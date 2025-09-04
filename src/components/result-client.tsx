'use client';
import { useFormContext } from '@/context/formcontext';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Session } from 'next-auth';
import { Download, FilePlus2, Sparkles, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const SkeletonCL = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4">
    <Card className="w-full max-w-2xl p-8 text-center shadow-lg">
      <Sparkles className="mx-auto h-12 w-12 text-blue-500 animate-pulse" />
      <h1 className="mt-6 text-2xl font-bold text-gray-800">
        Generating Your Cover Letter
      </h1>
      <p className="mt-2 text-gray-500">
        Our AI is crafting the perfect letter for you. Please wait a moment...
      </p>
      <div className="mt-8 space-y-4 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded w-4/5 mx-auto"></div>
      </div>
    </Card>
  </div>
);

// --- Main Result Client Component ---
const ResultClient = ({ session }: { session: Session }) => {
  const { formData, setCoverLetter, coverLetter } = useFormContext();
  const letterRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const localData =
    typeof window !== 'undefined' && localStorage.getItem('formData')
      ? JSON.parse(localStorage.getItem('formData') as string)
      : null;

  const handleAnotherOne = () => {
    localStorage.removeItem('formData');
    setCoverLetter('');
    router.push('/dashboard');
  };

  const handleDownloadPDF = async () => {
    if (!letterRef.current || isDownloading) return;

    setIsDownloading(true);
    try {
      const printWindow = window.open('', '_blank', 'width=800,height=600');
      
      if (!printWindow) {
        throw new Error('Could not open print window. Please allow popups for this site.');
      }

      const element = letterRef.current;
      const content = element.innerHTML;
      
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Cover Letter - ${localData?.name || 'Document'}</title>
            <style>
              @media print {
                @page {
                  margin: 0.5in;
                  size: A4;
                }
                body {
                  margin: 0;
                  padding: 0;
                  font-family: serif;
                  line-height: 1.6;
                  color: #000;
                }
                .no-print {
                  display: none !important;
                }
              }
              @media screen {
                body {
                  font-family: serif;
                  margin: 20px;
                  line-height: 1.6;
                  color: #000;
                }
              }
              body {
                font-family: serif;
                margin: 20px;
                line-height: 1.6;
                color: #000;
              }
              h1 {
                font-size: 2.5rem;
                font-weight: bold;
                text-align: center;
                margin-bottom: 2rem;
              }
              p {
                margin-bottom: 1rem;
              }
              .date {
                margin-bottom: 1.5rem;
              }
              .greeting {
                margin-bottom: 1rem;
              }
              .content {
                margin-bottom: 2rem;
              }
              .signature {
                margin-top: 2rem;
              }
              .signature p:last-child {
                font-weight: bold;
                font-size: 1.1rem;
              }
            </style>
          </head>
          <body>
            ${content}
            <script>
              window.onload = function() {
                setTimeout(function() {
                  window.print();
                  // window.close();
                }, 500);
              }
              
              window.onafterprint = function() {
                // window.close();
              }
            </script>
          </body>
        </html>
      `);
      
      printWindow.document.close();
      
    } catch (error) {
      console.error('Print failed:', error);
      alert('Print failed. Please try using Ctrl+P (Cmd+P on Mac) to print and save as PDF.');
    } finally {
      setIsDownloading(false);
    }
  };

  useEffect(() => {
    const fetchCoverLetter = async () => {
      const dataToSend = localData || formData;
      if (!dataToSend || !dataToSend.name) {
        router.push('/dashboard');
        return;
      }

      const cleanedData = { ...dataToSend };
      if (cleanedData.experience && Array.isArray(cleanedData.experience)) {
        cleanedData.experience = cleanedData.experience.filter(
          (exp: { company: any; role: any; duration: any; description: any; }) => exp.company || exp.role || exp.duration || exp.description
        );
      }

      setIsGenerating(true);
      try {
        const response = await fetch('/api/letter-gen', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(cleanedData),
        });
        if (response.ok) {
          const data = await response.json();
          setCoverLetter(data.coverLetter);
        } else {
          console.error('Failed to fetch cover letter');
        }
      } catch (error) {
        console.error('Error fetching cover letter:', error);
      } finally {
        setIsGenerating(false);
      }
    };

    if (!coverLetter) {
      fetchCoverLetter();
    }

  }, []);

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (!coverLetter || isGenerating) {
    return <SkeletonCL />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container mx-auto px-4 py-8 sm:py-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-3xl"
        >
          <div
            className="bg-white shadow-2xl rounded-lg overflow-hidden"
            ref={letterRef}
          >
            <div className="relative p-8 sm:p-16 font-serif text-gray-800">
              <div className="absolute -bottom-24 -left-12 -right-12 h-48 bg-gradient-to-r from-sky-50 to-blue-100 -z-0 pdf-remove" />
              <div className="relative z-10">
                {localData?.name && (
                  <header className="text-center mb-16">
                    <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 font-sans">
                      {localData.name}
                    </h1>
                  </header>
                )}
                <div className="mb-12">
                  <p>{currentDate}</p>
                </div>
                {localData?.recipientName && (
                  <div className="mb-6">
                    <p>Dear {localData.recipientName},</p>
                  </div>
                )}
                {coverLetter && (
                  <div className="space-y-5 leading-relaxed">
                    {coverLetter
                      .split('\n')
                      .map((paragraph: string, index: number) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                  </div>
                )}
                {localData?.name && (
                  <footer className="mt-12 pt-8">
                    <p>Best Regards,</p>
                    <p className="text-lg font-semibold text-gray-900 mt-4 font-sans">
                      {localData.name}
                    </p>
                  </footer>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md items-center mt-10">
          <Button
            size="lg"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleAnotherOne}
          >
            <FilePlus2 className="mr-2 h-4 w-4" />
            Make Another One
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full bg-white border-blue-600 text-blue-600 hover:bg-blue-50"
            onClick={handleDownloadPDF}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Download className="mr-2 h-4 w-4" />
            )}
            {isDownloading ? 'Downloading...' : 'Download PDF'}
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ResultClient;

