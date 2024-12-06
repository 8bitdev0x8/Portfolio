// Chat.tsx
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5174');

interface ChatMessage {
  message: string;
}

const Chat: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [chat, setChat] = useState<ChatMessage[]>([]);

  const sendChat = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const chatMessage: ChatMessage = { message };
    socket.emit('chat', chatMessage);
    setChat((prevChat) => [...prevChat, chatMessage]);
    setMessage('');
  };

  useEffect(() => {
    const receiveChat = (payload: ChatMessage) => {
      setChat((prevChat) => [...prevChat, payload]);
    };
    socket.on('chat', receiveChat);
    return () => {
      socket.off('chat', receiveChat);
    };
  }, []);

  return (
    <div>
      <form onSubmit={sendChat}>
        <input
          type="text"
          name="chat"
          placeholder="Type your message here..."
          value={message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      {chat.map((payload, index) => (
        <p key={index}>{payload.message}</p>
      ))}
    </div>
  );
};

export default Chat;
