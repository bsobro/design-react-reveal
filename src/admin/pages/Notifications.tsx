import React, { useState } from 'react';
import notificationsData from '../../data/notifications.json';

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState(notificationsData.notifications);
  const [filter, setFilter] = useState<'all' | 'read' | 'unread'>('all');

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    return filter === 'read' ? notification.read : !notification.read;
  });

  const markAsRead = (id: number) => {
    const updatedNotifications = notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    );
    setNotifications(updatedNotifications);
  };

  return (
    <div className="w-full rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="p-5 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <div className="space-x-2">
          <button 
            onClick={() => setFilter('all')} 
            className={`px-2 py-1 rounded text-sm ${filter === 'all' ? 'bg-track text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('unread')} 
            className={`px-2 py-1 rounded text-sm ${filter === 'unread' ? 'bg-track text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Unread
          </button>
          <button 
            onClick={() => setFilter('read')} 
            className={`px-2 py-1 rounded text-sm ${filter === 'read' ? 'bg-track text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Read
          </button>
        </div>
      </div>
      <div className="p-1">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-center px-4 py-3 hover:bg-track-light cursor-pointer rounded-md"
          >
            <div className="flex">
              <div className="flex">
                <span className={`text-lg mr-3 ${
                  notification.title === "Task Completed" ? "text-track" :
                  notification.title === "Check-In" ? "text-track" :
                  notification.title === "Check-Out" ? "text-red-500" :
                  notification.title === "Reminder" ? "text-yellow-500" :
                  notification.title === "Meeting" ? "text-blue-500" : ""
                }`}>
                  {notification.title === "Task Completed" && <i className="fi fi-rs-check-circle"></i>}
                  {notification.title === "Check-In" && <i className="fi fi-rs-arrow-right-to-bracket"></i>}
                  {notification.title === "Check-Out" && <i className="fi fi-rs-exit"></i>}
                  {notification.title === "Reminder" && <i className="fi fi-rs-calendar"></i>}
                  {notification.title === "Meeting" && <i className="fi fi-rs-clock-three"></i>}
                </span>
              </div>
              <div>
                <p className="text-sm">
                  <span className="text-gray-900 font-semibold">{notification.title}: </span> 
                  <span className="text-gray-600 text-medium">{notification.message}</span>
                </p>
                <p className="text-xs text-gray-500">{notification.time}</p>
                {!notification.read && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      markAsRead(notification.id);
                    }}
                    className="mt-1 px-2 py-1 bg-track text-white text-xs rounded hover:bg-track-light"
                  >
                    Mark as Read
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
