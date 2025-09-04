'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { Github, Loader, Mail, Lock, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isloading, setIsloading] = useState<boolean>(false);

  const router = useRouter();

  async function handleLogin() {
    setError('');
    try {
      setIsloading(true);
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError(res.error);
      } else {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"></div>
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Welcome Back
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                CareerCraft
              </span>
            </h1>

            <p className="text-gray-600 text-xl max-w-2xl leading-relaxed">
              We're excited to see you again! Log in to your account and pick up right where you left off. 
              Let our AI tools help you create outstanding cover letters and unlock new career opportunities.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span>AI-Powered Cover Letter Generation</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span>End-to-End Encryption & Privacy</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-600 to-red-600 rounded-lg flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <span>Instant Professional Results</span>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm">Your data is protected with enterprise-grade security</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border border-white/20 shadow-2xl">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  Sign In
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  Access your account to continue your journey
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6 px-8 pb-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="h-12 pl-10 text-gray-900 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Enter your password"
                      className="h-12 pl-10 text-gray-900 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-red-600 text-sm text-center">{error}</p>
                  </div>
                )}

                <Button
                  disabled={isloading}
                  onClick={handleLogin}
                  className="w-full h-12 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  {!isloading ? (
                    <span className="flex items-center justify-center">
                      Sign In
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </span>
                  ) : (
                    <Loader className="w-5 h-5 animate-spin" />
                  )}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500 font-medium">
                      or continue with
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    disabled={isloading}
                    onClick={() => signIn('google', { callbackUrl: '/' })}
                    variant="outline"
                    className="w-full h-12 text-base font-medium text-gray-700 bg-white hover:bg-gray-50 border-gray-300 hover:border-gray-400 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <Image
                      src="/image/google-logo.png"
                      alt="Google Logo"
                      width={20}
                      height={20}
                      className="mr-3"
                    />
                    Continue with Google
                  </Button>
                  
                  <Button
                    disabled={isloading}
                    onClick={() => signIn('github', { callbackUrl: '/' })}
                    variant="outline"
                    className="w-full h-12 text-base font-medium text-gray-700 bg-white hover:bg-gray-50 border-gray-300 hover:border-gray-400 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <Github className="mr-3 h-5 w-5" />
                    Continue with GitHub
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-gray-600">
                    Don't have an account?{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline">
                      Sign up for free
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
