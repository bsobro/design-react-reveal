import { Bell } from "lucide-react";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import notificationsData from "../../data/notifications.json";
import { Link } from "react-router-dom";

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: string;
  link: string;
}

const NotificationDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  // Get notifications from JSON
  const notifications: Notification[] = notificationsData.notifications;

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  // Add event listener for outside clicks
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Notification Icon Button */}
      <button onClick={toggleDropdown} className="relative mt-3">
        <Bell className="h-6 w-6 text-blue-900" />
        {notifications.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="origin-top-right absolute -right-[100px] mt-2 max-w-[550px] w-[95vw] sm:w- rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="px-5 py-2 border-b">
            <h2 className="text-lg font-semibold">Notifications</h2>
          </div>
          <div className="p-1">
            {notifications.slice(0, 5).map((notification) => (
              <div
                key={notification.id}
                className="flex items-center px-4 py-3 hover:bg-track-light cursor-pointer rounded-md"
              ><Link to={notification.link} onClick={toggleDropdown}>
                <div className="flex">
                  <div className="flex">
                    <span className={`text-lg mr-3 
                      ${notification.title === "Task Completed" && "text-track"}
                      ${notification.title === "Check-In" && "text-track"}
                      ${notification.title === "Check-Out" && "text-red-500"}
                      ${notification.title === "Reminder" && "text-yellow-500"}
                      ${notification.title === "Meeting" && "text-blue-500"}`}
                      >
                      {notification.title === "Task Completed" && <i className="fi fi-rs-check-circle"></i>}
                      {notification.title === "Check-In" && <i className="fi fi-rs-arrow-right-to-bracket"></i>}
                      {notification.title === "Check-Out" && <i className="fi fi-rs-exit"></i>}
                      {notification.title === "Reminder" && <i className="fi fi-rs-calendar"></i>}
                      {notification.title === "Meeting" && <i className="fi fi-rs-clock-three"></i>}
                    </span>
                  </div>
                  <div>
                  <p className="text-sm">
                    <span className=" text-gray-900 font-semibold">{notification.title}: </span> 
                    <span className="text-gray-600 text-medium">{notification.message}</span>
                  </p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="border-t py-1 flex justify-center">
            <Link to="/admin/notifications" onClick={toggleDropdown}>
            <button
              className="w-fit text-center px-4 py-2 text-sm font-medium text-track hover:bg-track-light flex items-center gap-2"
            >
              See all notifications <i className="fi fi-rs-arrow-right"></i>
            </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;