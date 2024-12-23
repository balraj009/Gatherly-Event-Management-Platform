import React from 'react'

function ProfileDropdown() {
  return (
    <div className="p-2 text-gray-700 z-50">
      <div className="py-2 px-4 hover:bg-gray-100 rounded">Profile</div>
      <div className="py-2 px-4 hover:bg-gray-100 rounded">Dashboard</div>
      <div className="py-2 px-4 hover:bg-gray-100 rounded">Post Events</div>
      <div className="py-2 px-4 hover:bg-gray-100 rounded">Logout</div>
    </div>
  );
}

export default ProfileDropdown;