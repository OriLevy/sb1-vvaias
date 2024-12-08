import React from 'react';
import { Globe2, Users, Shield, MessageSquareMore, Sparkles, ArrowRight } from 'lucide-react';
import { BackButton } from '../components/BackButton';
import { Link } from 'react-router-dom';

export function About() {
  const features = [
    {
      icon: Globe2,
      title: 'Global Coverage',
      description: 'Plan trips to any destination worldwide with our comprehensive travel database',
      color: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Shield,
      title: 'Smart Protection',
      description: 'AI-powered travel insurance recommendations and real-time safety alerts',
      color: 'from-emerald-500 to-green-400',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Connect with fellow travelers and share experiences through our platform',
      color: 'from-purple-500 to-pink-400',
    },
    {
      icon: MessageSquareMore,
      title: 'AI Assistant',
      description: '24/7 AI travel assistant to help plan and optimize your journey',
      color: 'from-orange-500 to-amber-400',
    },
  ];

  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '100+', label: 'Countries' },
    { value: '1M+', label: 'Trips Planned' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-24 px-4 pb-12">
      <BackButton />
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Revolutionizing Travel Planning
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Your Journey Begins with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              RoundTrip
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're combining artificial intelligence with human wanderlust to create
            the future of travel planning. Experience seamless journey organization
            powered by cutting-edge technology.
          </p>
          <Link
            to="/auth"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 group"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg mb-6">
            Ready to transform your travel experience?
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 group"
          >
            View Pricing
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}