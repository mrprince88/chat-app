import useAuth from "src/context/useAuth";
import { toast } from "react-toastify";

import { useNavigate } from "react-router";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const username = form.username.value;
    try {
      login(username);
      navigate("/");
      toast.success("Login successful");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="flex items-center justify-center bg-blue1 h-screen">
      <div className=" bg-blue2 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl mt-2 mb-2">Login</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="border border-gray-300 p-1 rounded-sm outline-none"
            />
          </div>
          <button type="submit" className="bg-blue4 text-white p-1 rounded-sm">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
