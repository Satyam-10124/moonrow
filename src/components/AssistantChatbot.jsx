import React, { useState, useEffect, useRef } from 'react';
import baImage from '../assets/ba.png';

const AssistantChatbot = () => {
    const [isChatWindowOpen, setIsChatWindowOpen] = useState(false);
    const [chatMessages, setChatMessages] = useState([]);
    const [currentOptions, setCurrentOptions] = useState([]);
    const [isFloatingBubbleVisible, setIsFloatingBubbleVisible] = useState(true);
    const floatingMessageQueueRef = useRef([]);
    const [isDisplayingFloatingMessage, setIsDisplayingFloatingMessage] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const displayFloatingMessage = (text, delay = 2500) => {
            return new Promise(resolve => {
                floatingMessageQueueRef.current.push({ text, delay, resolve });
                if (!isDisplayingFloatingMessage) {
                    processFloatingQueue();
                }
            });
        };

        const processFloatingQueue = async () => {
            if (floatingMessageQueueRef.current.length === 0) {
                setIsDisplayingFloatingMessage(false);
                setTimeout(() => setIsFloatingBubbleVisible(false), 1000);
                return;
            }

            setIsDisplayingFloatingMessage(true);
            const { text, delay, resolve } = floatingMessageQueueRef.current.shift();

            setIsFloatingBubbleVisible(true);
            setChatMessages([{ sender: 'bot', text: text }]);
            await new Promise(timerResolve => setTimeout(timerResolve, delay));
            resolve();
            processFloatingQueue();
        };

        const startInitialGreeting = async () => {
            await displayFloatingMessage("Hello there! Welcome to Alvis Agro Chem.");
            await displayFloatingMessage("How can I assist you today?", 3000);
            setChatMessages([]);
        };

        startInitialGreeting();

        return () => {
            floatingMessageQueueRef.current = [];
            clearTimeout();
        };
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [chatMessages]);

    const handleAssistantClick = () => {
        setIsChatWindowOpen(prev => !prev);
        setIsFloatingBubbleVisible(false);

        if (!isChatWindowOpen) {
            setChatMessages([
                { sender: 'bot', text: "Hello there! Welcome to Alvis Agro Chem." },
                { sender: 'bot', text: "How can I assist you today?" }
            ]);
            setCurrentOptions([
                { label: 'Our Products', value: 'products' },
                { label: 'Contact Us', value: 'contact' },
                { label: 'About Alvis Agro Chem', value: 'about' },
                { label: 'Our Office Location', value: 'office' },
                { label: 'Seek Crop Help', value: 'crop_help' },
            ]);
        } else {
            setChatMessages([]);
            setCurrentOptions([]);
        }
    };

    const handleOptionClick = async (optionValue, optionLabel) => {
        setChatMessages(prevMessages => [...prevMessages, { sender: 'user', text: optionLabel }]);

        const botResponse = await getBotResponse(optionValue);
        setChatMessages(prevMessages => [...prevMessages, { sender: 'bot', text: botResponse.text }]);
        setCurrentOptions(botResponse.options || []);
    };

    const getBotResponse = async (query) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        const companyPhoneNumber = "9415577825"; // Updated company phone number

        switch (query) {
            case 'products':
                return {
                    text: "Great! Which type of product are you interested in?",
                    options: [
                        { label: 'Organic Fertilizers', value: 'organic_fertilizers' },
                        { label: 'Plant Growth Regulators', value: 'pgr' },
                        { label: 'Soil Conditioners', value: 'soil_conditioners' },
                        { label: 'Back to Main Menu', value: 'main_menu' },
                    ]
                };
            case 'organic_fertilizers':
                return {
                    text: "Our popular organic fertilizers include Protax, Wonder Combi, and Black Diamond. Would you like to know more about a specific one?",
                    options: [
                        { label: 'Protax', value: 'protax' },
                        { label: 'Wonder Combi', value: 'wonder_combi' },
                        { label: 'Black Diamond', value: 'black_diamond' },
                        { label: 'Back to Products', value: 'products' },
                        { label: 'Back to Main Menu', value: 'main_menu' },
                    ]
                };
            case 'pgr':
                return {
                    text: "We offer effective Plant Growth Regulators like Sparkle. These help in enhancing crop yield and quality.",
                    options: [
                        { label: 'Buy Sparkle', value: 'buy_sparkle' },
                        { label: 'Back to Products', value: 'products' },
                        { label: 'Back to Main Menu', value: 'main_menu' },
                    ]
                };
            case 'soil_conditioners':
                return {
                    text: "Our soil conditioners improve soil structure, water retention, and nutrient availability. They are essential for healthy soil.",
                    options: [
                        { label: 'Back to Products', value: 'products' },
                        { label: 'Back to Main Menu', value: 'main_menu' },
                    ]
                };
            case 'protax':
                return {
                    text: "Protax is a highly effective organic fertilizer known for boosting plant immunity and growth. It's great for overall plant health.",
                    options: [
                        { label: 'Buy Protax', value: 'buy_protax' },
                        { label: 'Back to Organic Fertilizers', value: 'organic_fertilizers' },
                        { label: 'Back to Main Menu', value: 'main_menu' },
                    ]
                };
            case 'wonder_combi':
                return {
                    text: "Wonder Combi is a unique blend of essential nutrients that provides comprehensive nourishment to your crops, ensuring vigorous growth.",
                    options: [
                        { label: 'Buy Wonder Combi', value: 'buy_wonder_combi' },
                        { label: 'Back to Organic Fertilizers', value: 'organic_fertilizers' },
                        { label: 'Back to Main Menu', value: 'main_menu' },
                    ]
                };
            case 'black_diamond':
                return {
                    text: "Black Diamond is a premium humic acid-based product that enhances nutrient uptake and improves soil fertility significantly.",
                    options: [
                        { label: 'Buy Black Diamond', value: 'buy_black_diamond' },
                        { label: 'Back to Organic Fertilizers', value: 'organic_fertilizers' },
                        { label: 'Back to Main Menu', value: 'main_menu' },
                    ]
                };
            case 'contact':
                return {
                    text: `You can reach us by phone at ${companyPhoneNumber} or email us at info@alvisagrochem.com. We look forward to hearing from you!`,
                    options: [
                        { label: 'Back to Main Menu', value: 'main_menu' },
                    ]
                };
            case 'about':
                return {
                    text: "Alvis Agro Chem is a leading manufacturer of organic fertilizers and soil conditioners based in Lucknow, committed to sustainable agriculture and healthy crops.",
                    options: [
                        { label: 'Back to Main Menu', value: 'main_menu' },
                    ]
                };
            case 'office':
                return {
                    text: "Our main office is located in Lucknow. For the exact address and directions, please visit the 'Our Office' section on our website.",
                    options: [
                        { label: 'Back to Main Menu', value: 'main_menu' },
                    ]
                };
            case 'crop_help':
                return {
                    text: `For personalized crop assistance, please call our experts at ${companyPhoneNumber}. They will be happy to guide you!`,
                    options: [
                        { label: 'Back to Main Menu', value: 'main_menu' },
                    ]
                };
            case 'buy_protax':
            case 'buy_wonder_combi':
            case 'buy_black_diamond':
            case 'buy_sparkle':
                const productName = query.replace('buy_', '').replace('_', ' ');
                return {
                    text: `To purchase ${productName}, please contact us directly at ${companyPhoneNumber}. Our sales team will assist you with your order.`,
                    options: [
                        { label: 'Back to Products', value: 'products' },
                        { label: 'Back to Main Menu', value: 'main_menu' },
                    ]
                };
            case 'main_menu':
            default:
                return {
                    text: "How else can I assist you today?",
                    options: [
                        { label: 'Our Products', value: 'products' },
                        { label: 'Contact Us', value: 'contact' },
                        { label: 'About Alvis Agro Chem', value: 'about' },
                        { label: 'Our Office Location', value: 'office' },
                        { label: 'Seek Crop Help', value: 'crop_help' },
                    ]
                };
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-2">
            {isChatWindowOpen && (
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-72 md:w-80 lg:w-96 h-96 flex flex-col border border-emerald-300">
                    <div className="bg-emerald-600 text-white p-3 flex justify-between items-center rounded-t-lg">
                        <h3 className="font-semibold text-lg">Alvis Agro Chem Assistant</h3>
                        <button
                            onClick={() => setIsChatWindowOpen(false)}
                            className="text-white hover:text-emerald-100 transition-colors duration-200 text-xl font-bold"
                        >
                            &times;
                        </button>
                    </div>

                    <div className="flex-grow p-3 overflow-y-auto custom-scrollbar" style={{ maxHeight: 'calc(100% - 100px)' }}>
                        {chatMessages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-2 p-2 rounded-lg text-sm max-w-[80%] ${
                                    msg.sender === 'user'
                                        ? 'bg-blue-100 text-blue-800 ml-auto rounded-br-none'
                                        : 'bg-gray-100 text-gray-800 mr-auto rounded-bl-none'
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-3 border-t border-gray-200 flex flex-wrap justify-center gap-2 bg-gray-50 rounded-b-lg">
                        {currentOptions.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleOptionClick(option.value, option.label)}
                                className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm px-3 py-2 rounded-lg transition-colors duration-200 shadow-md flex-grow-0 flex-shrink-0"
                                style={{ flexBasis: '48%' }}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {isFloatingBubbleVisible && !isChatWindowOpen && chatMessages.length > 0 && (
                <div className="message-box bg-emerald-100 text-emerald-800 p-4 rounded-lg shadow-lg max-w-xs md:max-w-sm relative">
                    <p className="text-sm md:text-base">{chatMessages[0]?.text}</p>
                    <style jsx="true">{`
                        .message-box::after {
                            content: '';
                            position: absolute;
                            bottom: -10px;
                            right: 20px;
                            width: 0;
                            height: 0;
                            border-left: 10px solid transparent;
                            border-right: 10px solid transparent;
                            border-top: 10px solid #d1fae5;
                        }
                        @media (max-width: 768px) {
                            .message-box::after {
                                right: 10px;
                            }
                        }
                    `}</style>
                </div>
            )}

            <img
                id="assistant-image"
                src={baImage}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/120x120/99f6e4/065f46?text=Assistant'; }}
                alt="Organic Fertilizer Assistant"
                className="w-24 h-40 md:w-32 md:h-50 rounded-full cursor-pointer shadow-xl hover:scale-110 transition-transform duration-300"
                onClick={handleAssistantClick}
            />
        </div>
    );
};

export default AssistantChatbot;
