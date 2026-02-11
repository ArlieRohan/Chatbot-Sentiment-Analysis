import React from 'react';

function ChatMessage(props) {
  const text = props.text;
  const sentiment = props.sentiment;
  const time = props.time;

  function getSentimentClass() {
    if (sentiment === 'positive') {
      return 'positive';
    } else if (sentiment === 'negative') {
      return 'negative';
    } else {
      return 'neutral';
    }
  }

  function getSentimentLabel() {
    return sentiment.charAt(0).toUpperCase() + sentiment.slice(1);
  }

  return (
    <div className={'message-card ' + getSentimentClass()}>
      <p className="message-text">{text}</p>
      <div className="message-footer">
        <span className="sentiment-label">Sentiment: {getSentimentLabel()}</span>
        <span className="message-time">{time}</span>
      </div>
    </div>
  );
}

export default ChatMessage;