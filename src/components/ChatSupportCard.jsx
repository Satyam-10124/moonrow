import React from 'react';
import './ChatSupportCard.css'; // ← Import the CSS here
import { MessageCircleMore } from 'lucide-react';

const ChatSupportCard = () => {
  const optionCount = 20;
  const dotElements = [];

  for (let i = 0; i <= optionCount; i++) {
    const size = 1.5 + i * 0.5;
    const opacity = 30 + i * 10;
    const topPosition = (i / optionCount) * 95;

    dotElements.push(
      <div
        key={`dot-${i}`}
        className="absolute rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: `rgba(127, 139, 158, ${opacity / 100})`,
          left: '0px',
          top: `${topPosition}%`,
          transform: 'translateY(-50%)',
        }}
      />
    );
  }

  return (
    <div className="chat-support-container text-white">
      {/* Inner glassy card */}
      <div className="relative p-6 rounded-2xl bg-[#0B1627] bg-opacity-70 backdrop-blur-lg border border-[#2F3440] flex flex-col h-full w-full">
        
        {/* Header */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-transparent rounded-full">
              <MessageCircleMore size={20} className="text-[#B0E0FF]" />
            </div>
            <h3 className="text-white text-lg font-semibold">Chat Support</h3>
          </div>
        </div>

        {/* Inner response card */}
        <div className="bg-[#0F1C30] p-4 rounded-xl border border-[#2F3440] space-y-4 flex flex-col flex-grow"> {/* Added flex flex-col flex-grow */}
          {/* User message moved inside and aligned to the right */}
          <div className="flex justify-end mb-4"> {/* Added mb-4 for spacing */}
            <div className="bg-white text-[#0B1627] px-4 py-2.5 rounded-2xl rounded-tr-md max-w-xs text-sm shadow-md">
              Hi, I'm having an issue
            </div>
          </div>

          <div className="text-[#C5C9D3] text-sm leading-relaxed">
            Hi! Sorry to hear that. Could you tell me what issue you're facing? Here are some common problems:
          </div>

          <div className="relative pl-6 flex-grow"> {/* Added flex-grow */}
            {dotElements}

            <div className="relative z-10 space-y-3">
              {[
                "Tracking issues (Can't track my package)",
                "Delivery delay (My package is late)",
                "Wrong or damaged package",
                "Other issues",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 px-4 py-3 bg-[#131B2E] rounded-xl border border-[#2F3440] cursor-pointer transition duration-200 group hover:bg-[#1A2D4A] hover:border-[#3C82F6] hover:shadow-md"
                >
                  <div className="w-2 h-2 rounded-full bg-[#6D7588] transition-all duration-200 flex-shrink-0 group-hover:w-3 group-hover:h-3 group-hover:bg-[#B0E0FF] group-hover:border group-hover:border-[#3C82F6]" />
                  <p className="text-[#6D7588] text-sm group-hover:text-white transition-colors duration-200">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSupportCard;