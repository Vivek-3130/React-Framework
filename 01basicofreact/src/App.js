import Youtube from "./Youtube";

function App() {
  // here App() function is returning a html tag to the index.js 
  return (
    // In react we can only return one tag, so we consise each tags into one tag only
    <>
    <h1>Classic React Web Application</h1>
    <Youtube />
    </>
  );
}
// Here we are exporting the app function so that it could be used by other files
export default App;
