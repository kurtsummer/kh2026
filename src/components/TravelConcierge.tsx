import { useState, useEffect, useRef } from "react";
import { Compass, X, Send, User, Bot, Plane, Ship, Map, Palmtree } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const TravelConcierge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hallo! Ich bin Ihr persönlicher Urlaubs-Concierge von Max Mustermann. 🌴 Wohin soll Ihre nächste Traumreise gehen?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "Das klingt fantastisch! Ich leite Ihre Anfrage direkt an Max oder eines unserer Teammitglieder weiter. Sollen wir Ihnen ein unverbindliches Angebot für " + inputValue + " erstellen?";
      
      if (inputValue.toLowerCase().includes("preis") || inputValue.toLowerCase().includes("kosten")) {
        botResponse = "Die Preise variieren je nach Saison und Verfügbarkeit. Wenn Sie uns Ihre Reisedaten nennen, finden wir das beste Angebot für Sie!";
      } else if (inputValue.toLowerCase().includes("hallo") || inputValue.toLowerCase().includes("moin")) {
        botResponse = "Schön, dass Sie da sind! Wie kann ich Ihnen heute bei Ihrer Urlaubsplanung behilflich sein?";
      }

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }]);
    }, 1000);
  };

  const quickActions = [
    { label: "Malediven", icon: Palmtree },
    { label: "Städtereise", icon: Map },
    { label: "Kreuzfahrt", icon: Ship },
    { label: "Last Minute", icon: Plane },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Chat Window */}
      <div className={cn(
        "absolute bottom-24 right-0 w-[400px] max-w-[calc(100vw-2rem)] bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(12,74,110,0.3)] border-8 border-white overflow-hidden transition-all duration-500 origin-bottom-right transform",
        isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-0 opacity-0 translate-y-20 pointer-events-none"
      )}>
        {/* Header */}
        <div className="bg-sky-600 p-8 text-white relative">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Compass className="w-32 h-32 rotate-12" />
          </div>
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-black text-2xl tracking-tighter leading-none italic">Urlaubs-Concierge</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Online & Bereit</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div 
          ref={scrollRef}
          className="h-[400px] overflow-y-auto p-8 space-y-6 bg-slate-50/50 custom-scrollbar"
        >
          {messages.map((m) => (
            <div 
              key={m.id}
              className={cn(
                "flex flex-col max-w-[85%]",
                m.sender === 'user' ? "ml-auto items-end" : "items-start"
              )}
            >
              <div className={cn(
                "p-5 rounded-[2rem] text-sm font-bold shadow-sm",
                m.sender === 'user' 
                  ? "bg-sky-600 text-white rounded-br-none" 
                  : "bg-white text-slate-700 rounded-bl-none border border-slate-100"
              )}>
                {m.text}
              </div>
              <span className="text-[10px] font-black text-slate-300 uppercase mt-2 px-2">
                {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          ))}

          {messages.length === 1 && (
            <div className="grid grid-cols-2 gap-3 pt-4">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  onClick={() => {
                    setInputValue(action.label);
                    setTimeout(() => handleSendMessage(), 100);
                  }}
                  className="flex items-center gap-3 p-4 bg-white border-2 border-slate-100 rounded-2xl hover:border-sky-600 hover:text-sky-600 transition-all font-black text-xs text-slate-500 text-left group"
                >
                  <action.icon className="w-5 h-5 text-sky-200 group-hover:text-sky-600 transition-colors" />
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <form 
          onSubmit={handleSendMessage}
          className="p-6 bg-white border-t-4 border-slate-50 flex gap-4 items-center"
        >
          <div className="relative flex-1 group">
            <Input 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Schreiben Sie uns..." 
              className="h-16 pl-6 pr-6 bg-slate-50 border-none rounded-2xl font-bold focus:ring-4 focus:ring-sky-500/10 transition-all"
            />
          </div>
          <Button 
            type="submit"
            className="w-16 h-16 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white shadow-xl shadow-sky-100 flex items-center justify-center shrink-0 group active:scale-95 transition-all"
          >
            <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </form>
      </div>

      {/* Floating Pill Trigger */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "bg-sky-600 text-white px-8 py-5 rounded-[2.5rem] shadow-[0_20px_50px_rgba(14,165,233,0.3)] flex items-center gap-4 cursor-pointer transition-all hover:scale-105 active:scale-95 border-4 border-white group relative overflow-hidden",
          isOpen && "scale-90 opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        <Compass className="w-8 h-8 text-white animate-spin-slow relative z-10" />
        <div className="flex flex-col relative z-10">
          <span className="text-[10px] uppercase font-black tracking-widest leading-none opacity-80 mb-1">Live Chat</span>
          <span className="font-black text-xl leading-none tracking-tighter">Urlaubs-Concierge</span>
        </div>
      </div>
    </div>
  );
};
