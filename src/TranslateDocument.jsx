
// import React, { useState } from 'react';

// const TranslateDocument = () => {
//   const [documentFile, setDocumentFile] = useState(null);
//   const [translatedText, setTranslatedText] = useState('');

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setDocumentFile(file);
//       // Optionally, you can handle file preview or other operations here
//     }
//   };

//   const handleUpload = () => {
//     // Simulated translation process; replace with actual logic
//     // Here we're just setting a sample translated text
//     setTranslatedText('Example translated text will appear here.');
//   };

//   return (
//     <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Translate Document</h1>
//       <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//         <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
//           {/* Document upload input */}
//           <div className="py-4">
//             <label className="block text-sm font-medium text-gray-700">Upload Document:</label>
//             <div className="mt-1 flex items-center">
//               <input type="file" onChange={handleFileChange} className="py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//           </div>

//           {/* Example translation result */}
//           <div className="px-4 py-5 sm:px-6">
//             <p className="mt-1 max-w-2xl text-sm text-gray-500">Translated text:</p>
//             <p className="text-lg font-semibold mt-2">{translatedText}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TranslateDocument;

import React, { useState } from 'react';

const TranslateDocument = () => {
  const [documentFile, setDocumentFile] = useState(null);
  const [translatedText, setTranslatedText] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDocumentFile(file);
      // Optionally, you can handle file preview or other operations here
    }
  };

  const handleUpload = () => {
    // Simulated translation process; replace with actual logic
    // Here we're just setting a sample translated text
    setTranslatedText('Example translated text will appear here.');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Translate Document Page</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          {/* Document upload input and upload button */}
          <div className="flex space-x-4 py-2 items-center">
            <input type="file" onChange={handleFileChange} className="py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            <button
              type="button"
              onClick={handleUpload}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Upload
            </button>
          </div>

          {/* Example translation result */}
          <div className="px-4 py-5 sm:px-6">
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Translated text:</p>
            <p className="text-lg font-semibold mt-2">{translatedText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslateDocument;
