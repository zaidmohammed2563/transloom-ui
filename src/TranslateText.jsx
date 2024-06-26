

import React from 'react';

const TranslateText = () => {
  return (
    <div >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Translate Text Page</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            {/* Your translation form or content goes here */}
            <div className="flex space-x-4 py-2">
              <input
                type="text"
                className="flex-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm"
                placeholder="    Enter text to translate"
              />
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Translate
              </button>
            </div>
            {/* Example translation result */}
            <div className="px-4 py-5 sm:px-6">
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Translated text:</p>
              <p className="text-lg font-semibold mt-2">Example translated text will appear here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslateText;

