import React from 'react';
import { Globe2, Users, Shield, MessageSquareMore } from 'lucide-react';

const features = [
  {
    icon: Globe2,
    title: 'Global Coverage',
    description: 'Plan trips to any destination worldwide with our comprehensive travel database',
  },
  {
    icon: Shield,
    title: 'Smart Protection',
    description: 'AI-powered travel insurance recommendations and real-time safety alerts',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Connect with fellow travelers and share experiences through our platform',
  },
  {
    icon: MessageSquareMore,
    title: 'AI Assistant',
    description: '24/7 AI travel assistant to help plan and optimize your journey',
  },
];

export function FeatureList() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <div
            key={feature.title}
            className="flex items-start space-x-4 p-4 rounded-lg bg-gray-700/50 backdrop-blur-sm"
          >
            <Icon className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}