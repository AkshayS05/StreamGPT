import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/58622d3e-49bc-482d-8b16-bddc4b672e8e/web/CA-en-20251110-TRIFECTA-perspective_ece102fb-d9e0-4f42-a2a3-7e004cd8b78e_large.jpg" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black/80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 my-4 w-full text-black bg-gray-600"
            type="text"
            placeholder="Username"
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-600 text-black"
          type="text"
          placeholder="Your Email"
        />

        <input
          className="p-4 my-4 w-full text-black bg-gray-600"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleForm}>
          {isSignInForm
            ? "New to StreamGPT? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
