import React, { useState } from 'react';

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState('public');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    // Add save logic here
    alert('Settings saved successfully!');
  };

  return (
    <main className="flex-1 bg-gray-100 min-h-screen">
      <section className=" mx-auto bg-white p-8 rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Settings</h2>

        <form onSubmit={handleSave} className="space-y-6">
          {/* Email Notifications */}
          <div>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
              <span className="text-gray-700 font-medium">Email Notifications</span>
            </label>
            <p className="text-sm text-gray-500 mt-1">Receive email updates and newsletters</p>
          </div>

          {/* Profile Visibility */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Profile Visibility</label>
            <select
              value={profileVisibility}
              onChange={(e) => setProfileVisibility(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="friends">Friends Only</option>
            </select>
          </div>

          {/* Password Change */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Current Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter current password"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Save Changes
          </button>
        </form>
      </section>
    </main>
  );
};

export default Settings;
