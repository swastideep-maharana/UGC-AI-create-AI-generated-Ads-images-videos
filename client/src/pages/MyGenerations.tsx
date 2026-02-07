import React from 'react';

const MyGenerations = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">My Library</h1>
          <p className="text-gray-400">Manage and download your generated ads</p>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
          New Generation
        </button>
      </div>
      
      <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">No generations yet</h3>
        <p className="text-gray-400 mb-6">Start by creating your first AI-generated ad.</p>
        <button className="text-purple-400 hover:text-purple-300 font-medium">
          Try the generator &rarr;
        </button>
      </div>
    </div>
  );
};

export default MyGenerations;
