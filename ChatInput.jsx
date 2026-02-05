import React, { useState } from 'react';

function ChatInput(props) {
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    
    if (inputValue.trim() === '') {
      return;
    }
    
    props.onSendMessage(inputValue);
    setInputValue('');
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div className="chat-input-container">
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message here..."
          className="text-input"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;