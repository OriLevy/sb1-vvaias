import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { BackButton } from '../components/BackButton';

export function Pricing() {
  const plans = [
    {
      name: 'Explorer',
      price: '$9.99',
      period: 'month',
      features: [
        'Basic AI trip planning',
        'Up to 3 trips per month',
        'Standard travel recommendations',
        'Email support',
      ],
      highlighted: false,
      description: 'Perfect for occasional travelers looking to enhance their journey.',
    },
    {
      name: 'Adventurer',
      price: '$19.99',
      period: 'month',
      features: [
        'Advanced AI trip planning',
        'Unlimited trips',
        'Premium recommendations',
        'Priority support',
        'Real-time flight alerts',
        'Travel insurance integration',
      ],
      highlighted: true,
      description: 'Our most popular plan for serious travelers.',
    },
    {
      name: 'Globetrotter',
      price: '$39.99',
      period: 'month',
      features: [
        'Everything in Adventurer',
        'Personal travel consultant',
        'Exclusive deals and discounts',
        'VIP airport lounge access',
        'Premium travel insurance',
        'Family account sharing',
      ],
      highlighted: false,
      description: 'The ultimate travel experience with premium perks.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-24 px-4 pb-12">
      <BackButton />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Travel{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Adventure
              <span className="inline-block ml-2">
                <Sparkles className="w-6 h-6 text-emerald-400" />
              </span>
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select the perfect plan for your travel needs. All plans include our core AI-powered travel planning features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-emerald-600 to-emerald-700 transform hover:scale-105'
                  : 'bg-gray-800 hover:bg-gray-750'
              } transition-all duration-300 group`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-400 text-emerald-900 text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300 mb-1">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className={`h-1 w-full rounded-full ${
                plan.highlighted ? 'bg-emerald-400/30' : 'bg-gray-700'
              } group-hover:scale-x-110 transition-transform duration-300`} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            All plans come with a 14-day free trial.{' '}
            <span className="text-emerald-400">No credit card required.</span>
          </p>
        </div>
      </div>
    </div>
  );
}