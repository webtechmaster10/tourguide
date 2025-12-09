import React from 'react';
import './index.css';

function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Learn more about our AI-powered travel guide platform</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We're dedicated to revolutionizing travel planning through artificial intelligence. 
            Our platform combines cutting-edge AI technology with comprehensive travel data to 
            provide personalized, intelligent travel recommendations for every type of traveler.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Do</h2>
          <p>
            Our AI Travel Guide helps you discover amazing destinations, plan itineraries, 
            and find the perfect travel experiences tailored to your unique preferences, 
            budget, and travel style. Whether you're a solo adventurer, a family planner, 
            or a luxury traveler, we have solutions for you.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            Founded by travel enthusiasts and AI experts, our team is passionate about 
            combining technology with wanderlust. We believe that everyone deserves access 
            to expert travel planning, regardless of their budget or experience level.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul className="about-list">
            <li>✈️ Comprehensive travel data from thousands of destinations</li>
            <li>🤖 Advanced AI technology that learns your preferences</li>
            <li>💰 Recommendations for every budget category</li>
            <li>👥 Support for all types of travel groups</li>
            <li>🎯 Personalized itineraries and suggestions</li>
            <li>📱 Easy-to-use conversational interface</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
