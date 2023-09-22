import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Settings from './components/Settings';
import ChatHistory from './components/ChatHistory';
import Feedback from './components/Feedback';
import Navbar from './components/Navbar';
function App() {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  
  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleUserMessageSubmit = (e) => {
    e.preventDefault();
    if (userMessage.trim() !== '') {
     
      setMessages([...messages, { text: userMessage, isUser: true }]);
      
      simulateChatbotReply(userMessage);
      setUserMessage('');
    }
  };

  const simulateChatbotReply = (userMessage) => {

    const reply = {
      text: `Chatbot: You said "${userMessage}". I'm just a basic chatbot.`,
      isUser: false,
    };
    setTimeout(() => {
      setMessages([...messages, reply]);
    }, 1000);
  };

  return (
    <div className="App">

      <Navbar />
    
      <div className="chat-container">
      {/* <ChatHistory messages={messages} /> */}

        <div className="chat">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.isUser ? 'user' : 'chatbot'}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleUserMessageSubmit} className="message-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={userMessage}
            onChange={handleUserMessageChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="sidebar">
        <Settings />
        <Feedback />
        <ChatHistory messages={messages} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
