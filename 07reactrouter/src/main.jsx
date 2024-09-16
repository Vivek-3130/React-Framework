import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
// import { Github, githubInfoLoader } from "./components/Github/Github.jsx";
import Github from "./components/Github/Github.jsx";
import Users from "./components/Users/Users.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    // Here after the /about aayega to about page aayega
    // aur fir jb about/1,2,3...n koi bhi param aa skta hai uske liye pura route anout ke andarlikhenge
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      {/* Here if we want to again deep dive into about/1,2,3...n then we will use whole route tag */}
      {/* <Route path="about/" element={<About />}></Route>  */}
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {/* nested routing using sandwich tag */}
      <Route path="users/" element={<Users />}>
        <Route path=":userid" element={<Users />} />
      </Route>
      {/* For advance pre-processing at hovering */}
      {/* <Route path="github" element={<Github />} loader={githubInfoLoader} /> */}
      <Route path="github" element={<Github />}/>
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
