# AI Travel Guide - 5 Page Website

A complete React-based travel website featuring an AI-powered travel planning assistant integrated with comprehensive travel data.

## 🌟 Features

### Main Page (Home) - AI Agent Integration
- **AI Chat Interface**: Interactive chat with your AI travel assistant
- **Tour Guide Data Integration**: Uses `tourGuide.json` for intelligent recommendations
- **Quick Start Buttons**: Fast access to popular travel interests
- **Real-time Responses**: Connects to the AI agent API for personalized suggestions
- **Conversation Context**: Maintains user profile data for better recommendations

### Additional Pages (Templates)
1. **About** - Company mission, values, and team information
2. **Services** - 8 comprehensive travel planning services
3. **Blog** - Travel tips, guides, and inspiration articles
4. **Contact** - Contact form, FAQs, and support information

## 📁 Project Structure

```
src/
├── App.js                 # Main routing component
├── App.css                # Global styles
├── components/
│   ├── Navigation.js      # Navigation bar with links
│   └── Navigation.css     # Navigation styling
├── pages/
│   ├── Home.js           # AI Chat interface (main page)
│   ├── Home.css          # Home page styles
│   ├── About.js          # About page template
│   ├── About.css         # About page styles
│   ├── Services.js       # Services page template
│   ├── Services.css      # Services page styles
│   ├── Blog.js           # Blog page template
│   ├── Blog.css          # Blog page styles
│   ├── Contact.js        # Contact page template
│   └── Contact.css       # Contact page styles
└── data/
    └── tourGuide.json    # Travel data for AI context(RAG)
```

## 🤖 AI Agent Integration

### How It Works

1. **Data Source**: The app reads from `tourGuide.json` which contains:
   - Travel metadata and guide information
   - Budget categories (backpacker, budget, mid-range, luxury)
   - Interest categories (beach, adventure, culture, food, etc.)
   - Travel party types (solo, couple, family, group, business)

2. **Query Process**:
   ```javascript
   // User sends a message
   // App retrieves data from tourGuide.json
   // Sends both user message and context to AI agent
   // AI agent returns personalized recommendation
   // Response displayed in chat
   ```

3. **API Endpoint**:
   ```
   https://rhpxilzb.usw.sealos.io/api/v1/prediction/051194e2-f2f8-4058-988e-49ac46183d6e
   ```

### Usage Example

```javascript
const queryData = {
  message: "I'm interested in beach travel",
  context: {
    guide_metadata: {...},
    budget_categories: {...},
    interest_categories: [...],
    travel_party_types: [...],
    current_profile: {}
  }
};

const response = await query(queryData);
```

## 🚀 Getting Started

### Prerequisites
- Node.js v18.19.0 or higher
- npm v10.2.3 or higher

### Installation

```bash
# Install dependencies
npm install

# Install React Router
npm install react-router-dom

# Start the development server
npm start
```

### Running the App

The app will open at `http://localhost:3000`

Navigate using the top navigation bar:
- **Home** - Main page with AI chat interface
- **About** - Learn about the platform
- **Services** - View available services
- **Blog** - Read travel articles
- **Contact** - Get in touch

## 🎨 Design Features

- **Modern Gradient Design**: Purple/blue gradient theme throughout
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Smooth Animations**: Transitions and hover effects for better UX
- **Clean Typography**: Professional fonts and readable content
- **Interactive Elements**: Buttons, forms, and chat interface

## 💬 Chat Interface Features

- **Quick Start Buttons**: Popular travel interests for fast access
- **Message History**: View entire conversation
- **Typing Indicator**: Shows when AI is processing
- **Timestamp Tracking**: See when each message was sent
- **Disabled State Handling**: Prevents multiple submissions while loading
- **Error Handling**: Graceful error messages

## 📱 Responsive Breakpoints

- **Desktop**: Full featured experience
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Compact interface with touch-friendly buttons

## 🛠️ Technologies Used

- **React** v19.2.1 - UI framework
- **React Router** v7.10.1 - Client-side routing
- **CSS3** - Styling with gradients and animations
- **JavaScript ES6** - Modern JavaScript features

## 📝 Notes

- The AI agent requires internet connection to function
- Tour guide data can be expanded by adding more entries to `tourGuide.json`
- All page templates can be customized with real content
- The contact form is a template (backend integration needed for email submission)

## 🔐 Security Notes

- API endpoint should be kept secure in production
- Consider environment variables for sensitive data
- Form submissions should be validated on backend

## 📞 Support

For questions or issues with the AI agent integration, check:
1. tourGuide.json for available data
2. API response in browser console (F12)
3. Network tab for API call details

---

Built with React and powered by AI 🚀
