import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MessageCircle, X, Send, Mic, MicOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useConversation } from '@11labs/react';
import { useTranslation } from 'react-i18next';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);

  // Initialize welcome message after translation is loaded
  React.useEffect(() => {
    setMessages([{
      id: 1,
      text: t('chat.welcomeBot'),
      isUser: false,
      timestamp: new Date(),
    }]);
  }, [t]);

  // ElevenLabs Conversation setup
  const conversation = useConversation({
    onConnect: () => {
      console.log('Voice AI connected');
      setIsListening(true);
    },
    onDisconnect: () => {
      console.log('Voice AI disconnected');
      setIsListening(false);
    },
    onMessage: (message) => {
      // Handle voice messages
      const voiceMessage: Message = {
        id: Date.now(),
        text: message.message || 'Voice response received',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, voiceMessage]);
    },
    onError: (error) => {
      console.error('Voice AI error:', error);
      const errorMessage: Message = {
        id: Date.now(),
        text: 'Sorry, I had trouble with the voice connection. Please try typing your message.',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  });

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    // Add bot reply
    const botMessage: Message = {
      id: Date.now() + 1,
      text: t('chat.smartSuggestion'),
      isUser: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInputText('');
  };

  const toggleVoiceChat = async () => {
    try {
      if (conversation.status === 'connected') {
        await conversation.endSession();
        setIsListening(false);
      } else {
        // Note: You'll need to provide a valid agent ID or signed URL
        // For now, we'll show a message to configure the voice AI
        const configMessage: Message = {
          id: Date.now(),
          text: t('chat.configureElevenLabs'),
          isUser: false,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, configMessage]);
      }
    } catch (error) {
      console.error('Voice toggle error:', error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-glow",
          "bg-primary text-primary-foreground hover:bg-primary/90",
          "transition-all duration-300 hover:scale-110",
          isOpen && "hidden"
        )}
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">{t('chat.aiAgent')}</span>
      </Button>

      {/* Chat Popup */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 w-80 h-96 transition-all duration-300 transform",
          isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-full opacity-0 scale-95 pointer-events-none"
        )}
      >
        <Card className="h-full flex flex-col bg-card border shadow-glow">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="font-semibold text-foreground">{t('chat.smartAssistant')}</h3>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.isUser ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[75%] rounded-lg px-3 py-2 text-sm",
                    message.isUser
                      ? "bg-primary text-primary-foreground ml-auto"
                      : "bg-muted text-foreground mr-auto"
                  )}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <Button
                onClick={toggleVoiceChat}
                size="icon"
                variant={isListening ? "default" : "outline"}
                className={cn(
                  "shrink-0",
                  isListening && "bg-red-500 hover:bg-red-600 text-white"
                )}
                title={isListening ? t('chat.stopVoice') : t('chat.voiceChat')}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('chat.placeholder')}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ChatBot;