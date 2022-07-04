import React from "react";
import Login from "./Login";

var isLoggedIn = false; // After authentication it gets changed from false to true.  Don't use quotes.

// check variable if true then greet returning user if not ask for login
/*
var isLoggedIn = false; 
function renderConditionally() {
  if (isLoggedIn === true) {
    return <h1>Hello</h1>;
  } else {
    return (
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}*/

const currentTime = new Date(2019, 11, 1, 18).getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {" "}
      {
        //  isLoggedIn ? <h1>Hello</h1> : <Login />
        // currentTime > 12 ? <h1>Why are you still working?</h1> : null
        //below is another more succint way of writing because if expression is true it evaluates expression else not.
        currentTime > 12 && <h1>Why are you still working?</h1>
      }
    </div>
  );
}

export default App;
