import React, { useState } from 'react';
import { BackButton } from '../components/BackButton';
import { AuthForm } from '../components/AuthForm';
import { FeatureList } from '../components/FeatureList';
import { SocialAuth } from '../components/SocialAuth';

export function Auth() {
  const [authType, setAuthType] = useState<'login' | 'register'>('login');
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // TODO: Implement actual authentication logic
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-24 px-4 pb-12">
      <BackButton />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            {authType === 'login' ? 'Welcome Back' : 'Join RoundTrip'}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {authType === 'login'
              ? 'Sign in to access your travel plans and continue your journey'
              : 'Start your journey with RoundTrip and discover a new way to travel with AI-powered assistance'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Auth Section */}
          <div className="h-full bg-gray-800 p-8 rounded-2xl shadow-xl order-2 md:order-1">
            <div className="space-y-8">
              <SocialAuth 
                onEmailClick={() => setShowEmailForm(!showEmailForm)} 
                showEmailForm={showEmailForm}
              />
              
              {showEmailForm && (
                <>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-gray-800 text-gray-400">Sign in with email</span>
                    </div>
                  </div>
                  <AuthForm type={authType} onSubmit={handleSubmit} />
                </>
              )}
              
              <div className="text-center">
                <p className="text-gray-400">
                  {authType === 'login' ? "Don't have an account? " : 'Already have an account? '}
                  <button
                    onClick={() => setAuthType(authType === 'login' ? 'register' : 'login')}
                    className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-300"
                  >
                    {authType === 'login' ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="h-full order-1 md:order-2">
            <div className="h-full bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Why Choose RoundTrip?</h2>
              <p className="text-gray-300 mb-8">
                We're revolutionizing travel planning by combining artificial intelligence with human wanderlust.
                Our platform makes it easier than ever to plan, organize, and enjoy your perfect trip.
              </p>
              <FeatureList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}