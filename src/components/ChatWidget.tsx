'use client';

import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import Chatbox from 'https://cdn.jsdelivr.net/npm/@chatvolt/embeds@latest/dist/chatbox/index.js';
      await Chatbox.initBubble({ agentId: 'cmcy5emmq254lgva62hvxikcs' });
    `;
    document.body.appendChild(script);
  }, []);

  return null;
}
