import React from 'react';

const Community = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Community Creations</h1>
        <p className="text-gray-400">See what others are creating with UGC Ad Maker</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
            <div className="aspect-[9/16] bg-gray-800 relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                <button className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-colors">
                  View Case Study
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                <div>
                  <p className="text-sm font-medium text-white">Creator Name</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <h3 className="text-white font-semibold truncate">Modern Tech Ad for Startup</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
