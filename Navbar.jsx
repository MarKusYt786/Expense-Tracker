import { FaWallet } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { FiLogOut, FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const today = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Logout
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-xl">
            <FaWallet className="text-white text-xl" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-800">
              Expense Tracker
            </h1>

            <p className="text-xs text-slate-500">
              {today}
            </p>
          </div>
        </div>

        {/* Avatar */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center">
              {user?.username?.charAt(0).toUpperCase()}
            </div>

            <FiChevronDown
              className={`text-slate-500 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden z-50">
              <div className="px-4 py-4 border-b">
                <h3 className="font-semibold text-slate-800">
                  {user?.username}
                </h3>

                <p className="text-sm text-slate-500">
                  {user?.email}
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition"
              >
                <FiLogOut />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;