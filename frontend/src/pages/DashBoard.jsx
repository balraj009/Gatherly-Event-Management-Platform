import React, { useState } from 'react';

const DashboardPage = () => {
    const [selectedTab, setSelectedTab] = useState('organized');

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            {/* Tabs for switching between Organized and Registered Dashboard */}
            <div className="flex justify-center mb-8">
                <button 
                    onClick={() => setSelectedTab('organized')} 
                    className={`px-6 py-2 text-xl font-semibold ${selectedTab === 'organized' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-l-lg hover:bg-blue-400 transition duration-300`}>
                    Organized Dashboard
                </button>
                <button 
                    onClick={() => setSelectedTab('registered')} 
                    className={`px-6 py-2 text-xl font-semibold ${selectedTab === 'registered' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-r-lg hover:bg-blue-400 transition duration-300`}>
                    Registered Dashboard
                </button>
            </div>

            {/* Conditional Content Based on Selected Tab */}
            {selectedTab === 'organized' ? (
                <div>
                    <h2 className="text-3xl font-semibold text-center mb-6">Organized Dashboard</h2>
                    {/* Organized Dashboard Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {/* Real-time Attendee Count */}
                        <div className="p-6 border border-gray-300 rounded-lg shadow-sm">
                            <h4 className="text-xl font-semibold mb-4">Attendee Count</h4>
                            <div className="flex justify-between">
                                <p className="text-lg font-semibold">Registered</p>
                                <p className="text-lg">200</p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <p className="text-lg font-semibold">Checked In</p>
                                <p className="text-lg">150</p>
                            </div>
                        </div>
                        {/* Engagement Status */}
                        <div className="p-6 border border-gray-300 rounded-lg shadow-sm">
                            <h4 className="text-xl font-semibold mb-4">Engagement Status</h4>
                            <div className="flex justify-between">
                                <p className="text-lg font-semibold">Active Users</p>
                                <p className="text-lg">85%</p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <p className="text-lg font-semibold">Inactive Users</p>
                                <p className="text-lg">15%</p>
                            </div>
                        </div>
                        {/* Ticket Sales */}
                        <div className="p-6 border border-gray-300 rounded-lg shadow-sm">
                            <h4 className="text-xl font-semibold mb-4">Ticket Sales</h4>
                            <p className="text-lg font-semibold">Total Sales: $5000</p>
                            <div className="mt-4">
                                <p className="text-lg font-semibold">Tickets Sold: 250</p>
                                <p className="text-lg">Remaining Tickets: 50</p>
                            </div>
                        </div>
                    </div>

                    {/* Insights Section */}
                    <div className="p-6 border border-gray-300 rounded-lg shadow-sm">
                        <h4 className="text-xl font-semibold mb-4">Insights</h4>
                        <ul className="list-disc pl-6">
                            <li>High engagement rate in the last 3 days.</li>
                            <li>Ticket sales increased by 20% last week.</li>
                            <li>Check-in process running smoothly with minimal delays.</li>
                        </ul>
                    </div>
                </div>
            ) : (
                <div>
                    <h2 className="text-3xl font-semibold text-center mb-6">Registered Dashboard</h2>
                    {/* Registered Dashboard Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {/* Registered Events */}
                        <div className="p-6 border border-gray-300 rounded-lg shadow-sm">
                            <h4 className="text-xl font-semibold mb-4">Registered Events</h4>
                            <ul className="space-y-2">
                                <li>Tech Expo 2024</li>
                                <li>Networking Gala 2024</li>
                            </ul>
                        </div>
                        {/* My Tickets */}
                        <div className="p-6 border border-gray-300 rounded-lg shadow-sm">
                            <h4 className="text-xl font-semibold mb-4">My Tickets</h4>
                            <ul className="space-y-2">
                                <li>Tech Expo 2024 - General Admission</li>
                                <li>Networking Gala 2024 - VIP</li>
                            </ul>
                        </div>
                        {/* Ticket Status */}
                        <div className="p-6 border border-gray-300 rounded-lg shadow-sm">
                            <h4 className="text-xl font-semibold mb-4">Ticket Status</h4>
                            <div className="flex justify-between">
                                <p className="text-lg font-semibold">Tech Expo 2024</p>
                                <p className="text-lg text-green-500">Confirmed</p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <p className="text-lg font-semibold">Networking Gala 2024</p>
                                <p className="text-lg text-yellow-500">Pending</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardPage;
