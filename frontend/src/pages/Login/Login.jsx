import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-black-400 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-50">
          Rapid Chat
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base font-bold text-gray-50">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10 "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base font-bold text-gray-50">
                {" "}
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm  font-bold hover:underline text-gray-200 hover:text-sky-500 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button
              className="btn text-base btn-block font-bold text-gray-50 btn-base mt-2"
              disabled={loading}
            >
              {loading ? (
                <span className=" text-base loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
