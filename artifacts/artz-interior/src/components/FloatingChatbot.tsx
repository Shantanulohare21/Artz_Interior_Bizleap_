import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
};

const GREETING = "Hi! Welcome to Art Interiorz. I'm here to help you with interior design queries, project enquiries, or anything about our services. How can I assist you today?";

const QUICK_REPLIES = [
  "Interior Design Services",
  "Modular Kitchen",
  "Book a Consultation",
  "Project Timeline & Cost",
];

const BOT_RESPONSES: Record<string, string> = {
  "Interior Design Services":
    "We offer full-service interior design for residential, commercial and hospitality spaces — including space planning, 3D visualisation, modular kitchens, renovation, and turnkey project execution.",
  "Modular Kitchen":
    "We design custom modular kitchens in L-shaped, U-shaped, parallel and open layouts with premium finishes. Get in touch for a free consultation!",
  "Book a Consultation":
    "You can book a consultation by filling out our contact form on the Contact page, or call us at +91 95450 02017. We respond within two business days.",
  "Project Timeline & Cost":
    "Project timelines typically range from 4–10 weeks depending on scope. We offer flexible pricing and detailed upfront quotations with no hidden costs.",
};

let nextId = 3;

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: "bot", text: GREETING },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  function sendMessage(text: string) {
    if (!text.trim()) return;
    const userMsg: Message = { id: nextId++, role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const response =
      BOT_RESPONSES[text] ??
      "Thank you for your message! Our team will get back to you shortly. You can also reach us at +91 95450 02017 or artinteriorz17@gmail.com.";

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: nextId++, role: "bot", text: response },
      ]);
    }, 700);
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-28 right-5 sm:right-6 z-[70] w-[340px] sm:w-[380px] flex flex-col bg-warm-white shadow-luxury border border-border overflow-hidden"
            style={{ maxHeight: "min(580px, calc(100dvh - 120px))" }}
          >
            <div className="flex items-center justify-between px-5 py-4 bg-charcoal text-warm-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center border border-warm-white/20">
                  <Bot size={18} strokeWidth={1.4} />
                </div>
                <div>
                  <div className="text-sm font-medium tracking-wide">Art Interiorz</div>
                  <div className="text-[10px] tracking-luxury uppercase text-warm-white/60">Design Assistant</div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-warm-white/70 hover:text-gold transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[82%] px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "bot"
                        ? "bg-ivory text-charcoal border border-border"
                        : "bg-charcoal text-warm-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {messages.length === 1 && (
                <div className="space-y-2 pt-2">
                  <div className="text-[10px] tracking-luxury uppercase text-muted-foreground px-1">Quick replies</div>
                  {QUICK_REPLIES.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => sendMessage(reply)}
                      className="block w-full text-left text-xs px-4 py-2 border border-border hover:border-gold hover:text-gold transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            <div className="p-3 border-t border-border bg-warm-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message…"
                  className="flex-1 bg-ivory border-b border-border focus:border-gold outline-none px-3 py-2 text-sm text-charcoal placeholder:text-muted-foreground/60 transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Send"
                  className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-charcoal text-warm-white hover:bg-gold transition-colors"
                >
                  <Send size={15} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-6 right-5 sm:right-6 z-[70] w-14 h-14 flex items-center justify-center bg-charcoal text-warm-white shadow-luxury hover:bg-gold transition-colors duration-300"
        style={{ borderRadius: "2px" }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <motion.span
            className="absolute -top-1 -right-1 w-3 h-3 bg-gold"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        )}
      </motion.button>
    </>
  );
}
