import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("Vivek-3130");

  const fetchData = (user) => {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  useEffect(() => {
    fetchData(username);
  }, [username]);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleButtonClick = () => {
    fetchData(username);
  };

  return (
    <div
      className="text-center m-3 bg-gray-700 text-cyan-500 p-3 text-2xl font-semibold font-serif flex flex-col"
    >
      <h1 className="text-pink-500">GitHub Profile</h1>
      <input
        type="text"
        value={username}
        onChange={handleInputChange}
        className="mb-3 p-2 rounded"
        placeholder="Enter GitHub username"
      />
      <button
        onClick={handleButtonClick}
        className="mb-3 p-2 bg-blue-500 rounded text-white"
      >
        Fetch Profile
      </button>
      {data.avatar_url && (
        <img
          src={data.avatar_url}
          alt="avatar"
          className="w-1/5 self-center border rounded-full"
        />
      )}
      <h1 className="text-orange-400">{data.name}</h1>
      <p>GitHub Public Repositories: {data.public_repos}</p>
      <p>Location: {data.location}</p>
      <p className="text-lime-500">GitHub URL: {data.html_url}</p>
    </div>
  );
}

export default Github;
