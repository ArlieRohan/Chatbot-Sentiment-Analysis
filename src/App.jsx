import React, { useState } from 'react';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import Header from './components/Header';
import Legend from './components/Legend';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);

  function analyzeSentiment(text) {
    const lowerText = text.toLowerCase();
    
    // Positive words
    const positiveWords = ['good', 'great', 'awesome', 'excellent', 'happy', 'love', 'wonderful',
    'fantastic', 'amazing', 'perfect', 'best', 'brilliant', 'delighted',
    'excited', 'glad', 'joy', 'beautiful', 'thank', 'thanks', 'appreciate',
    'yay', 'hooray', 'nice', 'pleasant', 'superb', 'terrific', 'outstanding'];
    
    // Negative words
    const negativeWords = ['bad', 'terrible', 'awful', 'horrible', 'hate', 'worst', 'poor',
    'disappointing', 'sad', 'angry', 'frustrated', 'annoyed', 'upset',
    'unhappy', 'useless', 'waste', 'fail', 'failed', 'broken', 'sucks',
    'wrong', 'problem', 'issue', 'difficult', 'hard', 'painful', 'sorry'];
    
    let positiveCount = 0;
    let negativeCount = 0;
    
    // Count positive words
    for (let i = 0; i < positiveWords.length; i++) {
      if (lowerText.includes(positiveWords[i])) {
        positiveCount++;
      }
    }
    
    // Count negative words
    for (let i = 0; i < negativeWords.length; i++) {
      if (lowerText.includes(negativeWords[i])) {
        negativeCount++;
      }
    }
    
    // Return sentiment
    if (positiveCount > negativeCount) {
      return 'positive';
    } else if (negativeCount > positiveCount) {
      return 'negative';
    } else {
      return 'neutral';
    }
  }

  function handleSendMessage(text) {       
    const sentiment = analyzeSentiment(text);   // so basically what this part does is it loads the date like dat and time and also the sentiment
    
    const newMessage = {
      id: Date.now(),
      text: text,
      sentiment: sentiment,
      time: new Date().toLocaleTimeString('en-US', {  // it converst the time into read able metrics
        hour: '2-digit', 
        minute: '2-digit' 
      })
    };
    
    setMessages([...messages, newMessage]);  // it copies the old text and the add the new data   
                                              
  }

  return (
    <div className="app-container">
      <div className="chatbot-card">          {/* so what is basiclaly happning here is it shows the changes in display before and after you give an input*/ }
        <Header />
        
        <div className="messages-container">
          {messages.length === 0 ? (
            <div className="empty-state">
              <p className="empty-title">No messages yet</p>
              <p className="empty-subtitle">Start typing to analyze sentiment!</p>
            </div>
          ) : (
            messages.map(function(message) {
              return (
                <ChatMessage 
                  key={message.id}
                  text={message.text}
                  sentiment={message.sentiment}
                  time={message.time}
                />
              );
            })
          )}
        </div>

        <ChatInput onSendMessage={handleSendMessage} />
        
        <Legend />
      </div>
    </div>
  );
}

export default App;