import {React , useEffect, useState}from "react";
// import { useLoaderData } from "react-router-dom";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Vivek-3130")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  },[]);

//   const data = useLoaderData();
//   console.log(data);
  return (
    <div
      className="text-center m-3 bg-gray-700 text-white
    p-3 text-2xl font-semibold font-serif flex flex-col"
    >
      <h1 className=" text-pink-500">My Github Profile</h1>
      <img src={data.avatar_url} alt="avatar" className="w-1/5 self-center border rounded-full"/>
      <h1 className=" text-orange-400">{data.name}</h1>
      <p>Github Public Repositories: {data.public_repos}</p>
      <p className="text-lime-500">Github URL: {data.url}</p>


    </div>
  );
}

export default Github;


// export const githubInfoLoader = async()=>{
//     const response = await fetch("https://api.github.com/users/Vivek-3130")
//     return response.json()
// }