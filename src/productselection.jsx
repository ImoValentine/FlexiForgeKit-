import React from 'react';

export default function ProductSelection() {
  return (
    <div className="flex w-screen h-screen bg-gradient-to-br from-[#25374A] to-[#202C36]">
      {/* Sidebar */}
      <aside className="w-[80px] bg-[#202C36] flex flex-col items-center py-6 gap-8">
        <img src="/icon-dashboard.svg" alt="Dashboard" className="w-8 h-8 mb-8" />
        <img src="/icon-users.svg" alt="Users" className="w-8 h-8 mb-8" />
        <img src="/icon-calendar.svg" alt="Calendar" className="w-8 h-8 mb-8" />
        {/* Add more icons as needed */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-8 py-6">
        {/* Top Bar */}
        <div className="flex items-center mb-8">
          <h1 className="text-white text-3xl font-bold mr-8">Select Kit to View/Edit</h1>
          <input
            className="flex-1 rounded-full px-6 py-2 bg-[#202C36] text-white placeholder:text-gray-400 max-w-[400px]"
            placeholder="Search for products"
          />
          {/* Top bar icons */}
          <div className="flex items-center gap-4 ml-6">
            <img src="/icon1.svg" alt="" className="w-6 h-6" />
            <img src="/icon2.svg" alt="" className="w-6 h-6" />
            <img src="/icon3.svg" alt="" className="w-6 h-6" />
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-4 flex items-center shadow min-h-[180px] relative">
            <img src="/kit1.png" alt="Kit" className="w-24 h-32 object-cover rounded-xl mr-4 absolute -top-8 left-4 shadow-lg" />
            <div className="ml-32">
              <div className="font-bold text-lg">Football Kit 1- Modern</div>
              <div className="text-gray-500 text-sm mb-2">Aerodynamic Fit: Slim, tailored cut to reduce drag and enhance movement. Popular choices</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-400">Top picks</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden w-24">
                  <div className="h-2 bg-yellow-400 w-1/2" />
                </div>
                <span className="text-xs text-gray-400">Best sellers</span>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-4 flex items-center shadow min-h-[180px] relative">
            <img src="/kit2.png" alt="Kit" className="w-24 h-32 object-cover rounded-xl mr-4 absolute -top-8 left-4 shadow-lg" />
            <div className="ml-32">
              <div className="font-bold text-lg">Basic</div>
              <div className="text-gray-500 text-sm mb-2">you decide on design</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-400">Lesson Progress:</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden w-24">
                  <div className="h-2 bg-yellow-400 w-1/3" />
                </div>
                <span className="text-xs text-gray-400">Completion: 33%</span>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-4 flex items-center shadow min-h-[180px] relative">
            <img src="/kit3.png" alt="Kit" className="w-24 h-32 object-cover rounded-xl mr-4 absolute -top-8 left-4 shadow-lg" />
            <div className="ml-32">
              <div className="font-bold text-lg">Shirt Basic <span className="ml-2 bg-yellow-200 text-gray-700 px-2 py-1 rounded-full text-xs">Select</span></div>
              <div className="text-gray-500 text-sm mb-2">You decide on design</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-400">Current Status:</span>
                <span className="text-xs text-gray-400">Action Needed:</span>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-4 flex items-center shadow min-h-[180px] relative">
            <img src="/kit4.png" alt="Kit" className="w-24 h-32 object-cover rounded-xl mr-4 absolute -top-8 left-4 shadow-lg" />
            <div className="ml-32">
              <div className="font-bold text-lg">College</div>
              <div className="text-gray-500 text-sm mb-2">you decide on design</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-400">Review Status:</span>
                <span className="text-xs text-gray-400">Action Taken:</span>
              </div>
            </div>
          </div>
        </div>

        {/* Proceed Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#4cdc64] text-[#0a1d0d] font-bold text-2xl px-16 py-4 rounded-lg shadow">Proceed</button>
        </div>
      </main>

      {/* Right Panel */}
      <aside className="w-[400px] bg-[#202C36] p-6 flex flex-col">
        {/* Selected Kit Details */}
        <div className="bg-white rounded-2xl p-4 mb-6">
          <img src="/kit1.png" alt="Selected Kit" className="w-32 h-32 object-cover rounded-xl mx-auto mb-4" />
          <div className="flex justify-between text-gray-700 text-sm mb-2">
            <span>Customize your</span>
            <span>Edit components</span>
          </div>
          <div className="flex justify-between text-gray-400 text-xs">
            <span>Color options available</span>
            <span>Save changes</span>
          </div>
          <div className="flex justify-between text-gray-400 text-xs">
            <span>Color scheme options</span>
            <span>Select your style</span>
          </div>
        </div>
        {/* Kit Components */}
        <div className="mb-6">
          <div className="text-white text-lg font-bold mb-4">Kit Components</div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center bg-white rounded-xl p-3 justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">{String.fromCharCode(0x1F4C8)}</span>
                  <span className="font-bold">Main structure</span>
                </div>
                <div className="text-xs text-gray-400 ml-10">Additional accessories</div>
              </div>
              <span className="bg-yellow-100 text-gray-700 px-4 py-1 rounded-full font-bold">View</span>
            </div>
            <div className="flex items-center bg-white rounded-xl p-3 justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">{String.fromCharCode(0x1F3A8)}</span>
                  <span className="font-bold">Color Selection</span>
                </div>
                <div className="text-xs text-gray-400 ml-10">Customize colors</div>
              </div>
              <span className="bg-yellow-100 text-gray-700 px-4 py-1 rounded-full font-bold">Color</span>
            </div>
            <div className="flex items-center bg-white rounded-xl p-3 justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">{String.fromCharCode(0x1F4CA)}</span>
                  <span className="font-bold">Quantity &</span>
                </div>
                <div className="text-xs text-gray-400 ml-10">Cost breakdown</div>
              </div>
              <span className="bg-yellow-100 text-gray-700 px-4 py-1 rounded-full font-bold">Prici</span>
            </div>
          </div>
        </div>
        {/* Messages */}
        <div>
          <div className="text-white text-lg font-bold mb-2">Messages</div>
          <div className="bg-white rounded-2xl p-4 flex items-center justify-between">
            <div>
              <div className="font-bold text-gray-700 mb-1">New kit version available</div>
              <div className="text-xs text-gray-400">Update your kit to the latest version</div>
            </div>
            <button className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white text-xl">&gt;</button>
          </div>
        </div>
      </aside>
    </div>
  );
} 