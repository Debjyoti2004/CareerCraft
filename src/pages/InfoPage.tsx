import Image from 'next/image';
import React from 'react';
import { CheckCircle, Target, Users, Zap, Sparkles } from 'lucide-react';

const InfoPage = () => {
  const features = [
    {
      icon: Target,
      title: "Mission-Driven Excellence",
      description: "We're on a mission to make job applications effortless and impactful for every professional.",
    },
    {
      icon: Zap,
      title: "AI-Powered Simplicity", 
      description: "Our AI-powered platform simplifies the process of creating personalized cover letters that get results.",
    },
    {
      icon: CheckCircle,
      title: "Professional Quality",
      description: "Professional cover letters that stand out. Whether you're an experienced professional or a first-time job seeker.",
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description: "We're here to help you put your best foot forward. Join thousands of users who trust us to bring their career stories to life!",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse animation-delay-2000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            About Our Mission
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Revolutionizing{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Job Applications
            </span>
            {' '}with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering professionals worldwide with cutting-edge AI technology to create compelling cover letters that open doors to new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <Image
                src="/image/aboutUs-image.png"
                width={600}
                height={500}
                alt="AI-powered job application process illustration"
                title="AI-powered job application assistance"
                className="w-full h-auto rounded-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-10">
                AI-Powered
              </div>
              <div className="absolute bottom-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-10">
                Professional
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 hover:bg-white/80 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100">
                <div className="text-2xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-gray-600">Happy Users</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100">
                <div className="text-2xl font-bold text-purple-600">50K+</div>
                <div className="text-sm text-gray-600">Cover Letters</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100">
                <div className="text-2xl font-bold text-pink-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 shadow-2xl">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have already elevated their job applications with our AI-powered platform.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Start Your Journey
              <CheckCircle className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoPage;
