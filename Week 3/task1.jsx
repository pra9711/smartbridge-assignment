import { useState } from 'react';

const TextUpdater = () => {
  const [text, setText] = useState('');

  return (
    <div className="max-w-md mx-auto p-4">
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
        placeholder="Type something..."
      />
      <p className="text-gray-700">Current text: {text}</p>
    </div>
  );
};

export default TextUpdater;