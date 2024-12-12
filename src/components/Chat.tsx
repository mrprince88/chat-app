import { useRef } from "react";
import cn from "classnames";

import { useChatStore } from "src/store/chat";
import useAuth from "src/context/useAuth";

const Chat = ({
  selectedUser,
}: {
  selectedUser: {
    id: string;
    username: string;
    name: string;
    image: string;
  } | null;
}) => {
  const message = useChatStore((state) => state.messages);
  const addMessage = useChatStore((state) => state.addMessage);
  const { user } = useAuth();
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  console.log("message", message);

  const scrollToBottom = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });

    formRef.current?.reset();
  };

  const messages = message.filter(
    (message) =>
      (message.sender === user?.id && message.receiver === selectedUser?.id) ||
      (message.sender === selectedUser?.id && message.receiver === user?.id)
  );

  if (!selectedUser?.id) {
    return (
      <div className="flex-1 bg-blue2 rounded-r-lg overflow-auto relative flex h-full items-center justify-center">
        <p className="text-center">Select a user to chat with</p>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-blue2 rounded-r-lg overflow-auto relative">
      <div className="flex items-center gap-4 p-4 border-b border-blue4 sticky top-0 w-full bg-blue2">
        <img
          src={selectedUser?.image}
          alt={selectedUser?.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex items-center">{selectedUser?.name}</div>
      </div>
      <div className="flex-1 p-4 gap-4 flex h-full flex-col justify-end">
        {messages.map((message) => (
          <div
            key={String(message.createdAt)}
            className={cn(
              message.sender === user?.id
                ? "bg-blue4 text-white rounded-lg ml-auto"
                : "bg-white text-black rounded-lg",
              "p-2 w-fit"
            )}
          >
            {message.message}
          </div>
        ))}
      </div>
      <div ref={ref} />
      <form
        ref={formRef}
        className="flex gap-4 p-4 sticky bottom-0 bg-blue2"
        onSubmit={(e) => {
          e.preventDefault();
          const value = e.currentTarget.message.value;
          addMessage(value, user?.id || "", selectedUser.id);
          scrollToBottom();
        }}
      >
        <input
          type="text"
          name="message"
          className="p-2 w-full border border-blue4 rounded-lg"
        />
        <button type="submit" className="bg-blue4 text-white p-2 rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
