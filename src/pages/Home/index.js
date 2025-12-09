import { useState, useEffect, useRef } from 'react';
import tourGuideData from '../../data/tourGuide.json';
import { queryAIAgent, formatTime, generateMessageId } from '../../utils/aiAgent';
import { mapUserInputToCategories, formatAIResponse } from '../../utils/responseMapping';
import { scanTourGuide } from '../../utils/jsonScanner';
import { TRAVEL_INTERESTS, CHAT_STATES } from '../../constants/config';
import './index.css';

function Home() {
  const [userInput, setUserInput] = useState('');
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(CHAT_STATES.INITIAL);
  const messagesEndRef = useRef(null);
  const chatInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [responses, loading]);

const handleSendQuery = async (e) => {
  e.preventDefault();
  if (!userInput.trim()) return;

  setLoading(true);
  const newResponse = {
    id: generateMessageId(),
    user: userInput,
    bot: null,
    timestamp: formatTime()
  };

  try {
    const queryData = { question: userInput }; 
    const aiResponse = await queryAIAgent(queryData);

    newResponse.bot =
      aiResponse.output?.[0]?.text ||
      aiResponse.text ||
      aiResponse.message ||
      "I'm processing your request. Please try again.";

    if (currentStep === CHAT_STATES.INITIAL) {
      setCurrentStep(CHAT_STATES.COLLECTING_DETAILS);
    }
  } catch (error) {
    console.error('Error:', error);
    newResponse.bot = "Sorry, I encountered an error. Please try again.";
  }

  setResponses((prev) => [...prev, newResponse]);
  setUserInput('');
  setLoading(false);
};

  const handleQuickStart = async (interest) => {
    const quickMessage = `I'm interested in ${interest} travel. Can you help me plan my trip?`;
    setUserInput(quickMessage);
    
    setLoading(true);
    const newResponse = {
      id: generateMessageId(),
      user: quickMessage,
      bot: null,
      timestamp: formatTime()
    };

    try {
      const guidanceContext = tourGuideData;
      const mappedData = mapUserInputToCategories(quickMessage, guidanceContext);
      const scanSummary = scanTourGuide(guidanceContext);

      const queryData = {
        message: quickMessage,
        context: {
          scan_summary: scanSummary,
          user_mapped_interests: mappedData.matchedInterests,
          user_mapped_budgets: mappedData.matchedBudgets,
          enriched_context: mappedData.enrichedContext
        }
      };

      const aiResponse = await queryAIAgent(queryData);
      newResponse.bot = formatAIResponse(aiResponse, mappedData);
      setCurrentStep(CHAT_STATES.COLLECTING_DETAILS);

    } catch (error) {
      newResponse.bot = "Let me help you with your travel plans! Could you tell me more about what you're looking for?";
    }

    setResponses([...responses, newResponse]);
    setUserInput('');
    setLoading(false);
  };

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Your AI-Powered Travel Guide</h1>
          <p>Get personalized travel recommendations powered by artificial intelligence</p>
          <button 
            className="cta-button"
            onClick={() => chatInputRef.current?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Planning Your Trip
          </button>
        </div>
      </section>

      <section className="quick-start">
        <h2>Popular Interests</h2>
        <div className="quick-buttons">
          {TRAVEL_INTERESTS.map((interest) => (
            <button 
              key={interest.id}
              className="quick-btn"
              onClick={() => handleQuickStart(interest.description)}
            >
              {interest.label}
            </button>
          ))}
        </div>
      </section>

      <section className="features">
        <h2>How It Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📊 Data-Driven</h3>
            <p>Leverages a comprehensive travel dataset to provide accurate and personalized recommendations</p>
          </div>
          <div className="feature-card">
            <h3>🤖 AI Powered</h3>
            <p>Advanced AI agent processes your preferences and provides personalized suggestions</p>
          </div>
          <div className="feature-card">
            <h3>💬 Conversational</h3>
            <p>Chat naturally with our AI to refine and customize your travel plans</p>
          </div>
          <div className="feature-card">
            <h3>🎯 Personalized</h3>
            <p>Get recommendations tailored to your budget, interests, and travel style</p>
          </div>
        </div>
      </section>
            <section className="chat-section">
        <div className="chat-container">
          <div className="chat-header">
            <h2>Travel Planning Chat</h2>
            <p className="chat-subheader">Chat with our AI agent - it uses travel data to provide personalized recommendations</p>
          </div>

          <div className="messages-area">
            {responses.length === 0 ? (
              <div className="initial-message">
                <h3>👋 Welcome!</h3>
                <p>I'll help you plan your perfect trip! Tell me about:</p>
                <ul>
                  <li>Where you want to go (or type of destination like mountainous, beachy)</li>
                  <li>When you want to travel</li>
                  <li>Your budget and interests</li>
                  <li>Who you're traveling with</li>
                </ul>
                <p>Start by telling me about your travel preferences!</p>
              </div>
            ) : (
              responses.map((msg) => (
                <div key={msg.id} className="message-group">
                  <div className="message user-message">
                    <span className="time">{msg.timestamp}</span>
                    <p>{msg.user}</p>
                  </div>
                  {msg.bot && (
                    <div className="message bot-message">
                    <span className="time">{msg.timestamp}</span>
                    <p>
                      {msg.bot.split('\n').map((line, idx) => (
                        <span key={idx}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                  )}
                </div>
              ))
            )}
            {loading && (
              <div className="message-group">
                <div className="message bot-message loading">
                  <div className="typing-indicator">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendQuery} className="chat-form">
            <input
              ref={chatInputRef}
              type="text"
              className="chat-input"
              placeholder="Tell me about your travel plans..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              disabled={loading}
            />
            <button 
              type="submit" 
              className="send-button"
              disabled={loading || !userInput.trim()}
            >
              {loading ? '⏳' : '➤'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
