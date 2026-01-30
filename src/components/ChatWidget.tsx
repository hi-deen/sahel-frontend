// src/components/ChatWidget.tsx
import React from 'react';
import ChatBot from 'react-chatbotify';
import API_BASE_URL from '../config';

const ChatWidget: React.FC = () => {

  const flow = {
    start: {
      message: async (params: any) => {
        await params.streamMessage("Hello — I'm the Sahel Hive assistant. Ask me about our services, procurement process, or request a quote.");
      },
      path: 'wait_input'
    },
    wait_input: {
      // This shows how to handle user input and fetch reply from backend
      // react-chatbotify will pass params.userInput when user submits
      message: async (params: any) => {
        const userText = params.userInput;
        if (!userText || userText.trim().length === 0) {
          await params.streamMessage("Please type your question.");
          return;
        }

        // show a short typing placeholder
        await params.streamMessage("...");

        try {
          const resp = await fetch(`${API_BASE_URL}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userText })
          });

          const data = await resp.json();
          const answer: string = data.reply || "Sorry, I couldn't answer that right now.";

          // Stream the reply (react-chatbotify supports streamMessage)
          // We'll do a simple streaming effect by progressively sending chunks
          const chunkSize = 80;
          for (let i = 1; i <= Math.ceil(answer.length / chunkSize); i++) {
            const part = answer.slice(0, i * chunkSize);
            await params.streamMessage(part);
            await new Promise(r => setTimeout(r, 40));
          }
        } catch (err) {
          console.error('Chat error', err);
          await params.streamMessage("Sorry — chat service is unavailable right now.");
        }
      },
      // remain in this state to accept more input
      path: 'wait_input'
    }
  };

  return (
    <div style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 9999 }}>
      <ChatBot flow={flow} />
    </div>
  );
};

export default ChatWidget;
