import React from 'react';

const ChatHistory = ({ messages }) => {
  return (
    <div className="chat-history">
      <h1>Chat_History</h1>
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.isUser ? 'user' : 'chatbot'}`}>
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
