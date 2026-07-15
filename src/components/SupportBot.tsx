"use client";

import { useState, useEffect, useRef } from "react";
import {
  Paperclip,
  Smile,
  Mic,
  SendHorizontal,
  MoreHorizontal,
  Maximize2,
  Minimize2,
  Download,
} from "lucide-react";
import { WEBSITE_KNOWLEDGE, POPULAR_EMOJIS } from "../content/botData";


interface CustomSpeechRecognitionEvent {
  resultIndex: number;
  results: {
    [index: number]: {
      [index: number]: {
        transcript: string;
      };
    };
  };
}

interface SpeechRecognitionInstance {
  continuous: boolean;
  lang: string;
  interimResults: boolean;
  onstart: (() => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  onresult: ((event: CustomSpeechRecognitionEvent) => void) | null;
  start: () => void;
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance;

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function SupportBot() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const emojiTriggerRef = useRef<HTMLButtonElement>(null);
  const emojiMenuRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "👋 Welcome to Entro Ethiopia! I have full access to our website's knowledge base. Ask me about our services, products, tech stack, team workflow, or security standards!",
    },
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isBotTyping, open]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        menuContainerRef.current &&
        !menuContainerRef.current.contains(target)
      ) {
        setShowMenu(false);
      }
      if (
        emojiMenuRef.current &&
        !emojiMenuRef.current.contains(target) &&
        emojiTriggerRef.current &&
        !emojiTriggerRef.current.contains(target)
      ) {
        setShowEmojiPicker(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const startSpeechRecognition = () => {
    const targetWindow = window as unknown as {
      SpeechRecognition?: SpeechRecognitionConstructor;
      webkitSpeechRecognition?: SpeechRecognitionConstructor;
    };

    const SpeechRecognition =
      targetWindow.SpeechRecognition || targetWindow.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Voice recognition is not supported by your current browser. Please try again using Google Chrome.",
      );
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event: CustomSpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setInputValue((prev) => (prev ? prev + " " + transcript : transcript));
    };
    recognition.start();
  };

  const handleEmojiSelect = (emoji: string) => {
    setInputValue((prev) => prev + emoji);
    textareaRef.current?.focus();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    handleSendMessage(
      `📎 Attached: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`,
    );
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDownloadTranscript = () => {
    if (messages.length === 0) return;
    const transcriptText = messages
      .map((m) => `${m.sender === "user" ? "You" : "Entro Bot"}: ${m.text}`)
      .join("\n\n");
    const blob = new Blob([transcriptText], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      `entro-chat-transcript-${new Date().toISOString().slice(0, 10)}.txt`,
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setShowMenu(false);
  };

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim() || isBotTyping) return;

    setMessages((prev) => [...prev, { sender: "user", text: textToSend }]);
    setInputValue("");
    setIsBotTyping(true);
    setShowEmojiPicker(false);

    const cleanInput = textToSend.toLowerCase().trim();

    setTimeout(() => {
      setIsBotTyping(false);

      if (cleanInput.startsWith("📎 attached:")) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Thank you for sharing the file! 📂 I have received it. However, as an information assistant, I cannot open or read file contents. Please ask me a text question directly!",
          },
        ]);
        return;
      }

      const greetings = [
        "hi",
        "hello",
        "hey",
        "ሰላም",
        "selam",
        "yo",
        "greetings",
      ];
      if (greetings.some((greet) => cleanInput.includes(greet))) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Hello! 😊 How can I help you find information about Entro Ethiopia's projects or services today?",
          },
        ]);
        return;
      }

      const inputWords = cleanInput.split(/\s+/);
      const matchedData = WEBSITE_KNOWLEDGE.find((item) =>
        inputWords.some(
          (word) => word.length > 2 && item.keywords.includes(word),
        ),
      );

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: matchedData
            ? matchedData.answer
            : "I can only answer questions related to Entro Ethiopia's website information. Please try keywords like 'services', 'products', 'tech stack', 'workflow', 'security', or 'contact'.",
        },
      ]);
    }, 800);
  };

  return (
    <>
      {open && (
        <div
          className={`fixed z-[99999] flex flex-col overflow-hidden rounded-[28px] border border-slate-800 bg-[#070B16] shadow-[0_25px_60px_rgba(0,0,0,0.55)] font-sans transition-all duration-300 ease-in-out max-h-[calc(100vh-120px)] ${
            isExpanded
              ? "bottom-24 right-6 h-[720px] w-[650px] max-w-[90vw]"
              : "bottom-24 right-6 h-[560px] w-[380px]"
          }`}
        >
          <div className="relative border-b border-slate-850 bg-[#070B16] px-5 py-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white font-bold text-black text-xs sm:text-sm shadow-md select-none">
                  Entro
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-tight text-white">
                    Entro Ethiopia
                  </h3>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="h-1.5 w-1.5 inline-block rounded-full bg-teal-500 animate-pulse" />
                    The team can also help
                  </p>
                </div>
              </div>

              <div
                className="flex items-center gap-1 relative"
                ref={menuContainerRef}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMenu(!showMenu);
                  }}
                  className={`p-2 text-slate-400 hover:text-white rounded-lg transition cursor-pointer ${showMenu ? "bg-slate-900 text-white" : "hover:bg-slate-900"}`}
                >
                  <MoreHorizontal size={18} />
                </button>
                <button
                  onClick={() => {
                    setOpen(false);
                    setIsExpanded(false);
                  }}
                  className="p-2 text-slate-400 opacity-70 transition hover:opacity-100 hover:bg-slate-900 rounded-lg cursor-pointer"
                >
                  ✕
                </button>

                {showMenu && (
                  <div className="absolute right-0 top-11 z-[100000] w-56 rounded-[22px] border border-slate-800/80 bg-[#0C1222] p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-slate-200">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsExpanded(!isExpanded);
                        setShowMenu(false);
                      }}
                      className="flex w-full items-center gap-3.5 rounded-[16px] px-4 py-3 text-left text-sm font-normal text-slate-300 hover:bg-slate-800/50 hover:text-white transition cursor-pointer"
                    >
                      {isExpanded ? (
                        <>
                          <Minimize2 size={16} className="text-slate-400" />{" "}
                          Collapse window
                        </>
                      ) : (
                        <>
                          <Maximize2 size={16} className="text-slate-400" />{" "}
                          Expand window
                        </>
                      )}
                    </button>
                    <div className="my-1 border-t border-slate-800/60" />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleDownloadTranscript();
                      }}
                      className="flex w-full items-center gap-3.5 rounded-[16px] px-4 py-3 text-left text-sm font-normal text-slate-300 hover:bg-slate-800/50 hover:text-white transition cursor-pointer"
                    >
                      <Download size={16} className="text-slate-400" /> Download
                      transcript
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#070B16] text-sm">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-[24px] px-5 py-3.5 text-sm leading-relaxed shadow-sm whitespace-pre-line ${
                    message.sender === "user"
                      ? "bg-white text-black rounded-tr-none"
                      : "bg-[#232833] text-white rounded-tl-none"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {isBotTyping && (
              <div className="flex justify-start">
                <div className="flex w-16 items-center gap-1 rounded-[22px] rounded-tl-none bg-[#232833] px-5 py-3 text-slate-400 shadow-sm">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]"></span>
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]"></span>
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-[#070B16] border-t border-slate-900 relative">
            {showEmojiPicker && (
              <div
                ref={emojiMenuRef}
                className="absolute bottom-24 left-6 z-[100000] w-64 rounded-2xl border border-slate-800 bg-[#0F1626] p-3 shadow-2xl"
              >
                <p className="text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-wider select-none pl-1">
                  Popular Emojis
                </p>
                <div className="grid grid-cols-6 gap-1 max-h-40 overflow-y-auto p-0.5">
                  {POPULAR_EMOJIS.map((emoji, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleEmojiSelect(emoji)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-lg hover:bg-slate-800 transition active:scale-90 cursor-pointer"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="rounded-[24px] border border-slate-800 bg-[#0B1120] p-3 focus-within:border-slate-700 focus-within:ring-1 focus-within:ring-slate-700 transition duration-200"
            >
              <textarea
                ref={textareaRef}
                value={inputValue}
                placeholder="Message..."
                rows={1}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(inputValue);
                  }
                }}
                disabled={isBotTyping}
                className="w-full bg-transparent text-white text-sm placeholder:text-slate-500 outline-none resize-none min-h-[24px] max-h-[100px] font-sans px-1"
              />

              <div className="mt-2.5 flex items-center justify-between pt-1">
                <div className="flex items-center gap-4 text-slate-500 pl-1">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="hover:text-slate-300 transition duration-150 cursor-pointer"
                    title="Attach file"
                  >
                    <Paperclip size={18} />
                  </button>

                  <button
                    ref={emojiTriggerRef}
                    type="button"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    className={`transition duration-150 cursor-pointer ${showEmojiPicker ? "text-white scale-110" : "text-slate-500 hover:text-slate-300"}`}
                    title="Insert emoji"
                  >
                    <Smile size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={startSpeechRecognition}
                    className={`transition duration-150 relative cursor-pointer ${isListening ? "text-rose-500 animate-pulse scale-110" : "text-slate-500 hover:text-slate-300"}`}
                    title={isListening ? "Listening..." : "Record voice"}
                  >
                    <Mic size={18} />
                    {isListening && (
                      <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-rose-500" />
                    )}
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={!inputValue.trim() || isBotTyping}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E293B] text-slate-400 hover:bg-white hover:text-black active:scale-95 disabled:opacity-20 disabled:hover:bg-[#1E293B] disabled:hover:text-slate-400 disabled:scale-100 transition-all duration-200 cursor-pointer"
                >
                  <SendHorizontal size={16} />
                </button>
              </div>
            </form>

            <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 select-none">
              <span className="bg-[#1E293B] text-slate-300 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider">
                Entro
              </span>
              <span>Powered by Entro Ethiopia</span>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[99999] flex h-16 w-16 items-center justify-center rounded-full bg-slate-950 text-white shadow-xl border border-slate-800 transition-all hover:scale-105 active:scale-95 cursor-pointer"
      >
        {open ? (
          <span className="text-sm">✕</span>
        ) : (
          <span className="text-lg">💬</span>
        )}
      </button>
    </>
  );
}
