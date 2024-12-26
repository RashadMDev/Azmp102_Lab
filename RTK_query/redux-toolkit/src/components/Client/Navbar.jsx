import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../../redux/userSlice";

const Navbar = () => {
      // const { currentUser, isAuth } = useSelector((state) => state.user);
      // const dispatch = useDispatch();

      return (
            <nav className="p-4 bg-gray-800 text-white flex justify-between">
                  <div className="text-xl font-bold">
                        <Link to="/qerib">Qerib</Link>
                  </div>
                  <div className="text-xl font-bold">
                        <Link to="/animals">Animals</Link>
                  </div>
                  {/* <div className="flex items-center gap-4">
                        {isAuth ? (
                              <>
                                    <span>{currentUser.name}</span>
                                    <button
                                          className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
                                          onClick={() => dispatch(logout())}
                                    >
                                          Logout
                                    </button>
                              </>
                        ) : (
                              <>
                                    <Link
                                          to="/login"
                                          className="px-4 py-2 rounde hover:bg-green-70"
                                    >
                                          Login
                                    </Link>
                                    <Link
                                          to="/register"
                                          className="px-4 py-2 rounded"
                                    >
                                          Register
                                    </Link>
                              </>
                        )}
                  </div> */}
            </nav>
      );
};

export default Navbar;
