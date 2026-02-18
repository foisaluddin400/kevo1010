import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaChevronRight, FaHome } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import {  IoSettingsOutline } from "react-icons/io5";
import { CiMoneyBill } from "react-icons/ci";
import { logout } from "../../page/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";

import { TbUserCircle } from "react-icons/tb";

import logo from "../../assets/header/logo1.png";
import { CgUserList } from "react-icons/cg";

// Note: HiReceiptRefund was used but not imported → replaced with placeholder
// You can import the real icon later (from 'react-icons/hi' for example)

const items = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <FaHome />,
    link: "/dashboard",           // changed from "/" → more consistent
  },
  {
    key: "userManagement",
    label: "Customer",
    icon: <TbUserCircle /> ,
    link: "/dashboard/UserManagement",
  },
  {
    key: "servicesProvider",
    label: "Services Provider",
    icon:<CgUserList />,              // temporary – replace with correct icon
    link: "/dashboard/ServicesProvider",
  },
  {
    key: "manageRefund",
    label: "Manage Refund",
    icon: <CiMoneyBill />,
    link: "/dashboard/manageRefund",
  },
  {
    key: "settings",
    label: "Settings",
    icon: <IoSettingsOutline />,
    link: "/dashboard/Settings/profile", // fallback link
    children: [
      { key: "profile", label: "Profile", link: "/dashboard/Settings/profile" },
      { key: "terms", label: "Terms & Condition", link: "/dashboard/Settings/Terms&Condition" },
      { key: "privacy", label: "Privacy Policy", link: "/dashboard/Settings/PrivacyPolicy" },
      
    ],
  },
];

const Sidebar = () => {
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const [expandedKeys, setExpandedKeys] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contentRef = useRef({});

  // Sync active menu item + auto-expand parent when path changes
  useEffect(() => {
    const currentPath = location.pathname;

    let foundItem = null;
    let foundChild = null;

    for (const item of items) {
      // exact match on parent
      if (item.link === currentPath) {
        foundItem = item;
        break;
      }
      // match on child
      if (item.children) {
        const child = item.children.find(c => c.link === currentPath);
        if (child) {
          foundItem = item;
          foundChild = child;
          break;
        }
      }
    }

    if (foundItem) {
      if (foundChild) {
        setSelectedKey(foundChild.key);
        if (!expandedKeys.includes(foundItem.key)) {
          setExpandedKeys(prev => [...prev, foundItem.key]);
        }
      } else {
        setSelectedKey(foundItem.key);
      }
    }
  }, [location.pathname]);

  const toggleExpand = (key) => {
    setExpandedKeys(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="custom-sidebar h-screen bg-white text-gray-800 flex flex-col border-r border-gray-200">
      {/* Logo */}
      <div className="py-6 flex justify-center">
        <img src={logo} alt="Logo" className="w-32" />
      </div>

      {/* Menu */}
      <div className="flex-1 px-3 space-y-1 overflow-y-auto">
        {items.map(item => {
          const isActive = selectedKey === item.key ||
            (item.children?.some(child => child.key === selectedKey));

          const hasChildren = !!item.children;

          return (
            <div key={item.key}>
              <Link
                to={item.link}
                className={`
                  flex items-center px-4 py-3 rounded-lg text-sm font-medium
                  transition-colors duration-150
                  ${isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  }
                `}
                onClick={(e) => {
                  if (hasChildren) {
                    e.preventDefault();
                    toggleExpand(item.key);
                  } else {
                    setSelectedKey(item.key);
                  }
                }}
              >
                <span className="w-5 mr-3 text-lg flex items-center justify-center">
                  {item.icon}
                </span>
                <span className="flex-1">{item.label}</span>

                {hasChildren && (
                  <FaChevronRight
                    className={`text-xs transition-transform duration-200 ${
                      expandedKeys.includes(item.key) ? "rotate-90" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Submenu */}
              {hasChildren && (
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: expandedKeys.includes(item.key)
                      ? `${contentRef.current[item.key]?.scrollHeight || 400}px`
                      : "0",
                  }}
                  ref={el => (contentRef.current[item.key] = el)}
                >
                  <div className="py-1 pl-11 pr-4 space-y-0.5">
                    {item.children.map(child => (
                      <Link
                        key={child.key}
                        to={child.link}
                        className={`
                          block py-2 px-3 rounded-md text-sm
                          transition-colors
                          ${selectedKey === child.key
                            ? "bg-blue-100 text-blue-700 font-medium"
                            : "text-gray-600 hover:bg-gray-100"
                          }
                        `}
                        onClick={() => setSelectedKey(child.key)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200 mt-auto">
        <button
          onClick={handleLogout}
          className="
            w-full flex items-center justify-center gap-3
            py-3 px-4 rounded-lg text-red-600 hover:bg-red-50
            border border-red-200 hover:border-red-300
            transition-colors font-medium
          "
        >
          <IoIosLogIn className="text-xl" />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;