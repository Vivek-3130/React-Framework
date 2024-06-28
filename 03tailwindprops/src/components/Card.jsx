import React from "react";

function Card({userName="Sunil Chhetri",userCountry="India",userProfession='Football',myArr,imgSrc='https://www.shutterstock.com/shutterstock/photos/2320612103/display_1500/stock-vector-football-uniform-of-national-team-of-india-with-football-ball-with-flag-of-india-soccer-jersey-and-2320612103.jpg'}) {  //here by default we assing the value to username 
  // excecuted when the username,userCountry,userProfession  is note messi and argentina then it is only declared
  // in one card tag in app.jsx

  // console.log(props):-this can be used as an object
  // And this prop help in recongnizing the variables
  // that are passed in the app.jsx tag
  // through this command:- props.userName, we can access them in the component
  return (
    <div>
      {/* <img src="https://images.pexels.com/photos/17753075/pexels-photo-17753075/free-photo-of-close-up-of-buck.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="image card" />
        <h1 classNameName="text-3xl bg-red-500 p-3 rounded">Card : May Be A Greeting One</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores rerum in quibusdam adipisci nobis!</p> */}

      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={imgSrc}
          alt="Card img"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              "Athlete skilled in the sport of football, renowned for teamwork, agility, and strategic prowess."
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{userName}</div>
            <div className="text-slate-700 dark:text-slate-500">
              {userProfession}, {userCountry}
            </div>
            <div className="text-slate-700 dark:text-slate-500">{myArr}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
