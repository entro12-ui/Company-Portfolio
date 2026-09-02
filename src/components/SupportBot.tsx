"use client";

import { useEffect, useRef, useState } from "react";
import {
  Download,
  Maximize2,
  MessageCircle,
  Mic,
  Minimize2,
  MoreHorizontal,
  Paperclip,
  SendHorizontal,
  Smile,
  X,
} from "lucide-react";
import {
  findBestAnswer,
  POPULAR_EMOJIS,
  QUICK_REPLIES,
} from "@/content/botData";

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

type Message = {
  sender: "user" | "bot";
  text: string;
};

const GREETINGS = new Set([
  "hi",
  "hello",
  "hey",
  "selam",
  "ሰላም",
  "greetings",
  "good morning",
  "good afternoon",
  "good evening",
]);

const FALLBACK =
  "I can help with Entro Ethiopia’s services, products, pricing process, tech stack, security, and contact details.\n\nTry asking things like:\n• “What services do you offer?”\n• “Tell me about MediCare AI”\n• “What is your tech stack?”\n• “How do I contact you?”";

function isGreeting(input: string) {
  if (GREETINGS.has(input)) return true;
  return ["hi", "hello", "hey", "selam", "ሰላም"].some(
    (g) => input === g || input.startsWith(`${g} `) || input.endsWith(` ${g}`),
  );
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
      text: "Hi — I’m the Entro Ethiopia assistant. Ask me about our services, products, process, tech stack, or how to get a quote. I’ll answer from our company knowledge.",
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
        "Voice recognition is not supported in this browser. Please try Google Chrome.",
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
      setInputValue((prev) => (prev ? `${prev} ${transcript}` : transcript));
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

  const resolveBotReply = (textToSend: string) => {
    if (textToSend.toLowerCase().startsWith("📎 attached:")) {
      return "Thanks — I received the file name, but I can’t open attachments. Please describe your question in a short message and I’ll answer from our knowledge base.";
    }

    const cleanInput = textToSend
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s.+#-]/gu, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (isGreeting(cleanInput)) {
      return "Hello! 😊 Ask me anything about Entro Ethiopia — services, products like EduStack or MediCare AI, pricing process, tech stack, or how to contact us.";
    }

    if (
      cleanInput.includes("thank") ||
      cleanInput === "thanks" ||
      cleanInput === "thx"
    ) {
      return "You’re welcome. If you want to start a project, I can also share our contact details or walk you through what happens after you send a brief.";
    }

    return (
      findBestAnswer(cleanInput) ??
      FALLBACK
    );
  };

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim() || isBotTyping) return;

    setMessages((prev) => [...prev, { sender: "user", text: textToSend }]);
    setInputValue("");
    setIsBotTyping(true);
    setShowEmojiPicker(false);

    const reply = resolveBotReply(textToSend);

    window.setTimeout(() => {
      setIsBotTyping(false);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 550);
  };

  const userMessageCount = messages.filter((m) => m.sender === "user").length;
  const showQuickReplies = userMessageCount === 0 && !isBotTyping;

  return (
    <>
      {open && (
        <div
          className={`fixed z-[99999] flex max-h-[calc(100vh-7rem)] flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-950 font-sans shadow-[0_28px_80px_-24px_rgba(0,0,0,0.85)] transition-all duration-300 ${
            isExpanded
              ? "bottom-24 right-4 h-[min(720px,calc(100vh-7rem))] w-[min(650px,calc(100vw-2rem))] sm:right-6"
              : "bottom-24 right-4 h-[min(580px,calc(100vh-7rem))] w-[min(380px,calc(100vw-2rem))] sm:right-6"
          }`}
        >
          <div className="relative border-b border-white/10 bg-gradient-to-r from-ink-900 via-ink-950 to-ink-900 px-5 py-4 text-white">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-xs font-bold text-white shadow-md">
                  Entro
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-tight text-white">
                    Entro Assistant
                  </h3>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-teal-400" />
                    Answers based on your question
                  </p>
                </div>
              </div>

              <div className="relative flex items-center gap-1" ref={menuContainerRef}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMenu(!showMenu);
                  }}
                  className={`cursor-pointer rounded-lg p-2 text-slate-400 transition hover:text-white ${showMenu ? "bg-white/10 text-white" : "hover:bg-white/10"}`}
                  aria-label="Chat options"
                >
                  <MoreHorizontal size={18} />
                </button>
                <button
                  onClick={() => {
                    setOpen(false);
                    setIsExpanded(false);
                  }}
                  className="cursor-pointer rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>

                {showMenu && (
                  <div className="absolute right-0 top-11 z-[100000] w-56 rounded-2xl border border-white/10 bg-ink-900 p-1.5 text-slate-200 shadow-2xl">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsExpanded(!isExpanded);
                        setShowMenu(false);
                      }}
                      className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                    >
                      {isExpanded ? (
                        <>
                          <Minimize2 size={16} className="text-slate-400" />
                          Collapse window
                        </>
                      ) : (
                        <>
                          <Maximize2 size={16} className="text-slate-400" />
                          Expand window
                        </>
                      )}
                    </button>
                    <div className="my-1 border-t border-white/10" />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleDownloadTranscript();
                      }}
                      className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                    >
                      <Download size={16} className="text-slate-400" />
                      Download transcript
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto bg-ink-950 p-5 text-sm">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    message.sender === "user"
                      ? "rounded-br-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white"
                      : "rounded-bl-md border border-white/8 bg-white/[0.06] text-slate-100"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {showQuickReplies && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK_REPLIES.map((reply) => (
                  <button
                    key={reply}
                    type="button"
                    onClick={() => handleSendMessage(reply)}
                    className="cursor-pointer rounded-full border border-teal-400/30 bg-teal-400/10 px-3.5 py-2 text-left text-xs font-medium text-teal-200 transition hover:border-teal-300/50 hover:bg-teal-400/20"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {isBotTyping && (
              <div className="flex justify-start">
                <div className="flex w-16 items-center gap-1 rounded-2xl rounded-bl-md border border-white/8 bg-white/[0.06] px-5 py-3 text-slate-400">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-teal-400 [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-teal-400 [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-teal-400" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="relative border-t border-white/10 bg-ink-950 p-4">
            {showEmojiPicker && (
              <div
                ref={emojiMenuRef}
                className="absolute bottom-24 left-4 z-[100000] w-64 rounded-2xl border border-white/10 bg-ink-900 p-3 shadow-2xl"
              >
                <p className="mb-2 select-none pl-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Emojis
                </p>
                <div className="grid max-h-40 grid-cols-6 gap-1 overflow-y-auto p-0.5">
                  {POPULAR_EMOJIS.map((emoji, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleEmojiSelect(emoji)}
                      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-lg transition hover:bg-white/10 active:scale-90"
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
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition duration-200 focus-within:border-teal-400/40 focus-within:ring-1 focus-within:ring-teal-400/20"
            >
              <textarea
                ref={textareaRef}
                value={inputValue}
                placeholder="Ask about services, products, pricing…"
                rows={1}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(inputValue);
                  }
                }}
                disabled={isBotTyping}
                className="min-h-[24px] max-h-[100px] w-full resize-none bg-transparent px-1 font-sans text-sm text-white outline-none placeholder:text-slate-500"
              />

              <div className="mt-2.5 flex items-center justify-between pt-1">
                <div className="flex items-center gap-3 pl-1 text-slate-500">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="cursor-pointer transition duration-150 hover:text-slate-300"
                    title="Attach file"
                  >
                    <Paperclip size={18} />
                  </button>

                  <button
                    ref={emojiTriggerRef}
                    type="button"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    className={`cursor-pointer transition duration-150 ${showEmojiPicker ? "scale-110 text-white" : "text-slate-500 hover:text-slate-300"}`}
                    title="Insert emoji"
                  >
                    <Smile size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={startSpeechRecognition}
                    className={`relative cursor-pointer transition duration-150 ${isListening ? "scale-110 animate-pulse text-rose-500" : "text-slate-500 hover:text-slate-300"}`}
                    title={isListening ? "Listening..." : "Record voice"}
                  >
                    <Mic size={18} />
                    {isListening && (
                      <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-rose-500" />
                    )}
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={!inputValue.trim() || isBotTyping}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white transition-all duration-200 hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
                  aria-label="Send message"
                >
                  <SendHorizontal size={16} />
                </button>
              </div>
            </form>

            <p className="mt-3 select-none text-center text-[11px] text-slate-500">
              Replies match your question from Entro’s knowledge base
            </p>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[99999] flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-teal-400/30 bg-gradient-to-br from-teal-500 to-cyan-700 text-white shadow-[0_16px_40px_-12px_rgba(20,184,166,0.9)] transition-all hover:scale-105 active:scale-95"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </>
  );
}
