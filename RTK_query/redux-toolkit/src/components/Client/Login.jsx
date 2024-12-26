import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/userSlice";

const Login = () => {
      const [form, setForm] = useState({ email: "", password: "" });
      const dispatch = useDispatch();
      const { isAuth } = useSelector((state) => state.user);

      const handleLogin = () => {
            dispatch(login(form));
            setForm({ email: "", password: "" });
      };

      return (
            <div className="p-4">
                  <h2 className="text-2xl mb-4">Login</h2>
                  <input
                        type="email"
                        placeholder="Email"
                        className="border p-2 mb-2 w-full"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <input
                        type="password"
                        placeholder="Password"
                        className="border p-2 mb-4 w-full"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                  />
                  <button
                        className="text-white p-2 rounded w-full"
                        onClick={handleLogin}
                  >
                        Login
                  </button>
                  {isAuth && <p className="mt-4">Logged in successfully!</p>}
            </div>
      );
};

export default Login;
