import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Users() {
  const [userInput, setUserInput] = useState('');
  const { userid } = useParams();

  return (
    <div className="bg-orange-500 text-black text-2xl text-center py-3 font-bold font-mono">
      Mera Jannu Kon Hai, Mera Jannu {userid || userInput} 😘 Hai
      &nbsp;
      <input
        type="text"
        placeholder="Enter User ID"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
    </div>
  );
}

export default Users;