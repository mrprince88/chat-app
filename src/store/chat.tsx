import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export type Message = {
  message: string;
  sender: string;
  receiver: string;
  createdAt: Date;
};

interface ChatState {
  messages: Message[];
  addMessage: (message: string, sender: string, receiver: string) => void;
}

export const useChatStore = create<ChatState>()(
  subscribeWithSelector((set) => ({
    messages: [],
    addMessage: (message, sender, receiver) => {
      set((state) => ({
        messages: [
          ...state.messages,
          {
            message,
            sender,
            receiver,
            createdAt: new Date(),
          },
        ],
      }));
    },
  }))
);
