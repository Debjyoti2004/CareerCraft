'use client';
import Image from 'next/image';
import menuIcon from '@public/image/menuIcon.svg';
import crossIcon from '@public/image/crossIcon.svg';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { TextLoop } from './ui/text-loop';
import UserDropdown from './user-dropdown';
import { Session } from 'next-auth';
import { useRouter } from 'next/navigation';

const Header = ({
  session,
  status,
}: {
  session: Session;
  status: 'loading' | 'authenticated' | 'unauthenticated';
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact Sales', href: '#contact' },
    { label: 'About Us', href: '#about' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-blue-600 tracking-tight">
                <TextLoop>
                  <span className='cursor-pointer' onClick={() => router.push('/')}>CareerCraft</span>
                  <span className='cursor-pointer' onClick={() => router.push('/')}>करियर Gen</span>
                </TextLoop>
              </div>
            </div>

            <div className="hidden md:block">
              <ul className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-50 rounded-lg"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center space-x-4">
              {status === 'authenticated' ? (
                <UserDropdown session={session} />
              ) : (
                <div className="hidden sm:flex items-center space-x-3">
                  <button
                    onClick={() => signIn()}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => signIn()}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
                  >
                    Get Started
                  </button>
                </div>
              )}

              <div className="md:hidden">
                <button
                  onClick={() => setIsSidebarOpen((prev) => !prev)}
                  className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-expanded="false"
                  aria-label="Toggle navigation menu"
                >
                  <Image 
                    src={isSidebarOpen ? crossIcon : menuIcon} 
                    alt={isSidebarOpen ? "Close menu" : "Open menu"}
                    className="h-5 w-5"
                  />
                </button>
              </div>
            </div>
          </div>

          {isSidebarOpen && (
            <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-sm">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                {status !== 'authenticated' && (
                  <div className="pt-4 border-t border-gray-200 space-y-2">
                    <button
                      onClick={() => {
                        signIn();
                        setIsSidebarOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        signIn();
                        setIsSidebarOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                    >
                      Get Started
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
