import React from 'react';

const ProfilePage = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            {/* Header Section */}
            <div className="flex items-center space-x-4 mb-8">
                <img src="profile-pic.jpg" alt="Profile" className="w-24 h-24 rounded-full border-2 border-gray-300" />
                <div>
                    <div className="text-2xl font-semibold">John Doe</div>
                    <div className="text-gray-600">Event Organizer | Creative Thinker</div>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">Edit Profile</button>
                </div>
            </div>

            {/* Personal Information Section */}
            <div className="mb-8">
                <div className="text-xl font-semibold mb-4">Personal Information</div>
                <ul className="space-y-2">
                    <li><strong>Email:</strong> john.doe@example.com</li>
                    <li><strong>Phone:</strong> +1 234 567 890</li>
                    <li><strong>Location:</strong> New York, USA</li>
                </ul>
            </div>

            {/* Professional Information Section */}
            <div className="mb-8">
                <div className="text-xl font-semibold mb-4">Professional Information</div>
                <ul className="space-y-2">
                    <li><strong>Company:</strong> Gatherly Inc.</li>
                    <li><strong>Role:</strong> Senior Event Manager</li>
                    <li><strong>Industry:</strong> Event Management</li>
                </ul>
            </div>

            {/* Upcoming Events Section */}
            <div className="mb-8">
                <div className="text-xl font-semibold mb-4">Upcoming Events</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
                        <h4 className="font-semibold">Tech Expo 2024</h4>
                        <p>Jan 15, 2024</p>
                        <p>Role: Speaker</p>
                    </div>
                    <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
                        <h4 className="font-semibold">Networking Gala</h4>
                        <p>Feb 20, 2024</p>
                        <p>Role: Organizer</p>
                    </div>
                </div>
            </div>

            {/* Past Events Section */}
            <div className="mb-8">
                <div className="text-xl font-semibold mb-4">Past Events</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
                        <h4 className="font-semibold">Annual Marketing Summit</h4>
                        <p>Dec 10, 2023</p>
                        <p>Role: Attendee</p>
                    </div>
                    <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
                        <h4 className="font-semibold">Startup Pitch Night</h4>
                        <p>Nov 5, 2023</p>
                        <p>Role: Speaker</p>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="flex justify-center space-x-4 text-blue-500">
                <a href="#" className="hover:text-blue-700">Privacy Settings</a>
                <a href="#" className="hover:text-blue-700">Logout</a>
            </div>
        </div>
    );
};

export default ProfilePage;
