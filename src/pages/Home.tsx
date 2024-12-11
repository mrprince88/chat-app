import { useState } from "react";

import Sidebar from "src/components/Sidebar";
import Chat from "src/components/Chat";

const Home = () => {
  const [selectedUser, setSelectedUser] = useState<{
    id: string;
    username: string;
  } | null>(null);

  return (
    <div className="flex items-center justify-center bg-blue1 h-screen min-h-full">
      <div className="flex bg-blue2 rounded-lg shadow-lg w-3/4 h-3/4 min-h-72 border-1 border-black">
        <Sidebar
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
        <Chat selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default Home;
