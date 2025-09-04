'use client';
import React from 'react';
import Image from 'next/image';
import { MoveRight, Sparkles, Zap, CheckCircle } from 'lucide-react';
import { Session } from 'next-auth';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const HeroSection = ({
  session,
  status,
}: {
  session: Session;
  status: 'loading' | 'authenticated' | 'unauthenticated';
}) => {
  const router = useRouter();
  const handleGetStarted = () => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    } else {
      router.push('/auth');
      toast.error('Please log in to continue.');
    }
  };

  const features = [
    { icon: Zap, text: 'AI-Powered Generation' },
    { icon: CheckCircle, text: 'ATS-Optimized' },
    { icon: Sparkles, text: 'Instant Results' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 min-h-screen">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Powered by Advanced AI Technology
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Craft Perfect{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Cover Letters
              </span>
              <br />
              in Seconds with AI
            </h1>

            <p className="max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
              Say goodbye to the stress of writing cover letters. Our AI-powered generator creates{' '}
              <span className="font-semibold text-gray-800">personalized, professional cover letters</span>{' '}
              tailored to your skills, experience, and the job you're applying for—instantly!
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <feature.icon className="w-4 h-4 mr-2 text-blue-600" />
                  {feature.text}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/25"
                onClick={handleGetStarted}
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                <span className="relative flex items-center">
                  Get Started Free
                  <MoveRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
              
              <button className="inline-flex items-center px-6 py-4 text-lg font-medium text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:bg-white hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-200"
              onClick={() => router.push('https://www.youtube.com/watch?v=gdEQpJEM6dc')}
              >
                Watch Demo
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>


          </div>
        </div>
    </section>
  );
};

export default HeroSection;
