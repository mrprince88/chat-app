import cn from "classnames";

import users from "src/data/users";

const Sidebar = ({
  selectedUser,
  setSelectedUser,
}: {
  selectedUser: { id: string; username: string } | null;
  setSelectedUser: (user: { id: string; username: string }) => void;
}) => {
  return (
    <div className="bg-blue3 w-1/4 overflow-auto no-scrollbar">
      <div className="flex items-center justify-between flex-col h-full">
        {users.map((user) => (
          <div
            key={user.id}
            className={cn(
              "flex items-center w-full p-4 flex-1 gap-5 cursor-pointer hover:bg-blue4 hover:text-white h-60",
              selectedUser?.id === user.id
                ? "bg-slate-300 text-black"
                : "text-black"
            )}
            onClick={() =>
              setSelectedUser({
                id: user.id,
                username: user.username,
              })
            }
            role="button"
          >
            <img
              src={`https://avatars.dicebear.com/api/human/${user.id}.svg`}
              alt={user.name}
              className="w-8 h-8 rounded-full"
            />
            <p>{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
