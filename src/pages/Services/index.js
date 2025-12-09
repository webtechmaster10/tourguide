import React from 'react';
import { SERVICES_LIST } from '../../constants/config';
import './index.css';

function Services() {
  const services = [
    {
      id: 1,
      icon: '🗺️',
      title: 'Destination Planning',
      description: 'Get personalized destination recommendations based on your interests and budget'
    },
    {
      id: 2,
      icon: '📅',
      title: 'Itinerary Building',
      description: 'Create detailed day-by-day itineraries optimized for your travel style'
    },
    {
      id: 3,
      icon: '💰',
      title: 'Budget Planning',
      description: 'Smart budgeting advice tailored to different spending categories'
    },
    {
      id: 4,
      icon: '🍽️',
      title: 'Food & Dining',
      description: 'Discover local restaurants and culinary experiences'
    },
    {
      id: 5,
      icon: '🏨',
      title: 'Accommodation Advice',
      description: 'Find the perfect place to stay based on your preferences'
    },
    {
      id: 6,
      icon: '🎫',
      title: 'Activity Recommendations',
      description: 'Explore activities, attractions, and experiences at your destination'
    },
    {
      id: 7,
      icon: '👨‍👩‍👧‍👦',
      title: 'Group Travel Planning',
      description: 'Coordinate trips for families, couples, and friend groups'
    },
    {
      id: 8,
      icon: '🔐',
      title: 'Travel Tips & Safety',
      description: 'Get essential travel tips, safety advice, and local insights'
    }
  ];

  return (
    <div className="services-container">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Comprehensive travel planning solutions powered by AI</p>
      </section>

      <section className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      <section className="services-cta">
        <h2>Ready to Plan Your Trip?</h2>
        <p>Use our AI Travel Guide on the Home page to start planning your next adventure</p>
        <a href="/" className="cta-link">Go to Home →</a>
      </section>
    </div>
  );
}

export default Services;
