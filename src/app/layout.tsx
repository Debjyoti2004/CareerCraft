import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers/Providers';
import { FormProvider } from '@/context/formcontext';
import Header from '@/components/Header';
import { getServerSession } from 'next-auth';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'CareerCraft',
  description:
    'Craft perfect cover letters in seconds with AI. Personalized, professional cover letters tailored to your skills and job applications—instantly!',
  keywords: [
    'cover letter',
    'cover letter generate',
    'ai',
    'cv generator',
    'CareerCraft',
    'resume',
    'cover letter',
    'job application',
    'kreyon',
    'kreyon CareerCraft',
  ],
  metadataBase: new URL('https://CareerCraft.kreyon.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'CareerCraft',
    title: 'CareerCraft',
    description:
      'Craft perfect cover letters in seconds with AI. Personalized, professional cover letters tailored to your skills and job applications—instantly!',
    url: 'https://CareerCraft.kreyon.in',
    images: [
      {
        url: 'https://CareerCraft.kreyon.in/image/OG_Image_Shared.png',
        width: 1200,
        height: 630,
        alt: 'CareerCraft Cover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://x.com/Krey_yon',
    creator: 'https://x.com/Krey_yon',
    images: ['https://CareerCraft.kreyon.in/image/OG_Image_Shared.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'CareerCraft',
      url: 'https://CareerCraft.kreyon.in',
      description:
        'Craft perfect cover letters in seconds with AI. Personalized, professional cover letters tailored to your skills and job applications—instantly!',
      image: 'https://CareerCraft.kreyon.in/image/OG_Image_Shared.png',
      author: {
        '@type': 'Person',
        name: 'Vikas',
      },
    }),
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  const status = session ? 'authenticated' : 'unauthenticated';

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <FormProvider>
          <Providers>
            <Header session={session!} status={status} />
            {children}
          </Providers>
        </FormProvider>
      </body>
    </html>
  );
}
