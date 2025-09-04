import React from 'react';
import Image from 'next/image';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const HowItWork = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up or Log In",
      description: "Get started by creating an account or logging in to access all the features with ease.",
      image: "/image/step-1.png",
      icon: CheckCircle,
    },
    {
      number: "02", 
      title: "Provide Job Details",
      description: "Enter the necessary job details to personalize your cover letter according to the specific role you're applying for.",
      image: "/image/step-2.png",
      icon: CheckCircle,
    },
    {
      number: "03",
      title: "Add Your Information", 
      description: "Fill in your personal and professional information to ensure your cover letter reflects your unique qualifications and experience.",
      image: "/image/step-3.png",
      icon: CheckCircle,
    },
    {
      number: "04",
      title: "Generate Your Cover Letter",
      description: "Create a personalized cover letter with ease using our AI-powered tools.",
      image: "/image/step-4.png", 
      icon: CheckCircle,
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            How it Works
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get started in{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes creating professional cover letters effortless and efficient.
          </p>
        </div>
        {/* Steps Grid */}
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Step Image */}
              <div className="flex-1 relative">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Image
                    src={step.image}
                    alt={`Step ${step.number}: ${step.title}`}
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-xl"
                  />
                  {/* Floating Number Badge */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                    <step.icon className="w-4 h-4 mr-2" />
                    Step {step.number}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="flex items-center space-x-2">
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          i <= index
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="ml-4 w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 shadow-2xl">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Create Your Perfect Cover Letter?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have already transformed their job applications with our AI-powered tool.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
