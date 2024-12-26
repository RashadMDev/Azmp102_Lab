import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/userSlice";

const Register = () => {
      const [form, setForm] = useState({ name: "", email: "", password: "" });
      const dispatch = useDispatch();

      const handleRegister = () => {
            dispatch(register(form));
            setForm({ name: "", email: "", password: "" });
      };

      return (
            <div className="p-4 text-white">
                  <h2 className="text-2xl mb-4">Register</h2>
                  <input
                        type="text"
                        placeholder="Name"
                        className="border border-white text-white p-2 mb-2 w-full"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                        type="email"
                        placeholder="Email"
                        className="border border-white text-white p-2 mb-2 w-full"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <input
                        type="password"
                        placeholder="Password"
                        className="border border-white text-white p-2 mb-4 w-full"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                  />
                  <button
                        className="text-white p-2 rounded w-full"
                        onClick={handleRegister}
                  >
                        Register
                  </button>
            </div>
      );
};

export default Register;
