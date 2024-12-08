import React from 'react';
import { Apple, ChevronDown, Mail } from 'lucide-react';

interface SocialAuthProps {
  onEmailClick: () => void;
  showEmailForm: boolean;
}

export function SocialAuth({ onEmailClick, showEmailForm }: SocialAuthProps) {
  const handleGoogleSignIn = () => {
    console.log('Google sign in clicked');
    // TODO: Implement Google authentication
  };

  const handleAppleSignIn = () => {
    console.log('Apple sign in clicked');
    // TODO: Implement Apple authentication
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-700 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              className="fill-[#4285F4]"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              className="fill-[#34A853]"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              className="fill-[#FBBC05]"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              className="fill-[#EA4335]"
            />
          </svg>
          <span className="text-white font-medium">Continue with Google</span>
        </button>

        <button
          onClick={handleAppleSignIn}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-700 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
        >
          <Apple className="w-5 h-5 text-white" />
          <span className="text-white font-medium">Continue with Apple</span>
        </button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-800 text-gray-400">or</span>
          </div>
        </div>

        <button
          onClick={onEmailClick}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-700 rounded-lg hover:bg-gray-700/50 transition-colors duration-300 group"
        >
          <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
          <span className="text-gray-400 group-hover:text-white font-medium transition-colors duration-300">Continue with Email</span>
          <ChevronDown className={`w-5 h-5 text-gray-400 group-hover:text-white transition-all duration-300 ${showEmailForm ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
}