import React from 'react';

export const Loader = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
    <p className="mt-4 text-gray-500 font-medium">Fetching Content...</p>
  </div>
);

export const ErrorMessage = ({ message }) => (
  <div className="bg-red-600/10 border border-red-600 text-red-500 p-4 rounded text-center my-6">
    <p className="font-bold">Error</p>
    <p className="text-sm">{message}</p>
  </div>
);