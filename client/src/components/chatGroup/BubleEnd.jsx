import React from 'react';

export default function BubleEnd({ chat }) {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <div className="chat-header">{chat.author}</div>
      <div className="chat-bubble">{chat.message}</div>
      <div className="chat-footer opacity-50">{chat.time}</div>
    </div>
  );
}
