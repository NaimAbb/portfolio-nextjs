'use client';

import { useState, useRef, useEffect } from 'react';
import { useChat, type UIMessage } from '@ai-sdk/react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { BsStars } from "react-icons/bs";
import { LuSend } from "react-icons/lu";
import ReactMarkdown from 'react-markdown';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, sendMessage, status, error } = useChat();
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const isLoading = status === 'streaming' || status === 'submitted';

    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const content = input;
        setInput('');

        try {
            await sendMessage({ text: content });
        } catch (err) {
            console.error("Failed to send message", err);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-[#252525] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-sans"
                    >
                        <div className="p-4 bg-[#1A1A1A] border-b border-white/10 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <h3 className="font-medium text-white text-sm">AI Assistant</h3>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <IoMdClose size={18} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-[#1A1A1A]/50">
                            {messages.length === 0 && (
                                <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 space-y-2 opacity-60">
                                    <BsStars size={40} className="mb-2" />
                                    <p className="text-sm">How can I help you today?</p>
                                </div>
                            )}
                            {messages.map((m: UIMessage) => {
                                console.log('Message:', m);
                                return (
                                    <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`
                            max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed
                            ${m.role === 'user'
                                                ? 'bg-white text-black rounded-tr-none'
                                                : 'bg-[#333] text-gray-100 rounded-tl-none border border-white/5'}
                        `}>
                                            <ReactMarkdown
                                                components={{
                                                    p: ({ node, ...props }) => <p className="mb-1 last:mb-0" {...props} />,
                                                    a: ({ node, ...props }) => <a className="text-blue-400 hover:underline" target="_blank" {...props} />,
                                                    ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-1" {...props} />,
                                                    ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-1" {...props} />,
                                                }}
                                            >
                                                {(m as any).content || (m.parts && (m.parts as any).filter((p: any) => p.type === 'text').map((p: any) => p.text).join(''))}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                )
                            })}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-[#333] rounded-2xl rounded-tl-none px-4 py-3 border border-white/5 flex gap-1 items-center">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            )}
                            {error && (
                                <div className="text-red-500 text-xs text-center p-2">
                                    Something went wrong. Please try again.
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 bg-[#1A1A1A] border-t border-white/10">
                            <div className="relative">
                                <input
                                    className="w-full bg-[#252525] text-white rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 transition-all border border-transparent placeholder:text-gray-500"
                                    value={input}
                                    placeholder="Type a message..."
                                    onChange={(e) => setInput(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white text-black rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-white transition-colors"
                                >
                                    <LuSend size={16} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-white text-black shadow-xl flex items-center justify-center hover:bg-gray-100 transition-colors z-50 fixed bottom-4 right-4"
            >
                {isOpen ? <IoMdClose size={24} /> : <BsStars size={24} />}
            </motion.button>
        </div>
    );
}
