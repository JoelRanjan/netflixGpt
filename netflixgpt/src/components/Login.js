import React, { useRef, useState } from "react";
import { validateData } from "../utils/validate";
import { auth } from "../utils/fireBase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Header from "./Header";
import { language } from "../utils/langConstants";

const Login = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [errmsg, setErrmsg] = useState(null);
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const selectedLang = useSelector((store) => store.lang.lang);

  const signUpBtn = () => {
    let errmsg = validateData(email.current.value, password.current.value);
    setErrmsg(errmsg);

    if (errmsg) return;

    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        dispatcher(addUser(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrmsg(errorMessage);
        dispatcher(removeUser());
      });
  };

  const signInBtn = () => {
    let errmsg = validateData(email.current.value, password.current.value);
    setErrmsg(errmsg);

    if (errmsg) return;

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        // dispatcher(addUser(user));
        navigate("/browse");
        // email.current.value = null;
        // password.current.value = null;
        // fullName.current.value = null;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrmsg(errorMessage);
        navigate("/");
      });
  };

  const toggleSignBtn = () => {
    setIsNewUser(!isNewUser);
  };

  return (
    <div className="relative ">
      <div className="absolute bg-gradient-to-b from-black z-10 w-full">
        {/* <img
          className=" h-32 w-52  z-10"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="net"
        /> */}
        <Header />
      </div>

      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg"
        alt="logo"
        className="absolute "
      />
      <form
        className="absolute bg-black m-56 ml-[500px] bg-opacity-70 p-14 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {isNewUser ? (
          <h1 className=" px-4 py-2 font-extrabold text-white text-2xl">
            {language[selectedLang].signUp}
          </h1>
        ) : (
          <h1 className=" px-4 py-2 font-extrabold text-white text-2xl">
            {language[selectedLang].signIn}
          </h1>
        )}
        {isNewUser && (
          <div>
            <input
              ref={fullName}
              type="text"
              placeholder="Enter Full Name"
              className="px-4 py-2 m-4 bg-transparent border border-white bg-slate-950 bg-opacity-80 text-white"
            />
            <br />
          </div>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter Email"
          className="px-4 py-2 m-4 bg-transparent border border-white bg-slate-950 bg-opacity-80  text-white"
        />

        <br />
        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className="px-4 py-2 m-4 bg-transparent border border-white  bg-slate-950 bg-opacity-80  text-white"
        />
        <br />
        <p className="text-red-600">{errmsg}</p>
        {isNewUser ? (
          <button
            className="px-4 py-1 m-3 text-white bg-red-600 w-[220px]"
            onClick={signUpBtn}
          >
            {language[selectedLang].signUp}
          </button>
        ) : (
          <button
            className="px-4 py-1 m-3 text-white bg-red-600 w-[220px]"
            onClick={signInBtn}
          >
            {language[selectedLang].signIn}
          </button>
        )}

        {isNewUser ? (
          <div>
            <p className="text-white">{language[selectedLang].existingUser}</p>
            <button
              className="px-4 py-1 m-3 text-white bg-red-600 w-[220px]"
              onClick={toggleSignBtn}
            >
              {language[selectedLang].signInPage}
            </button>
          </div>
        ) : (
          ""
        )}
        {isNewUser ? (
          ""
        ) : (
          <div>
            <p className="text-white">{language[selectedLang].newToNetflix}</p>
            <button
              className="px-4 py-1 m-3 text-white bg-red-600 w-[220px]"
              onClick={toggleSignBtn}
            >
              {language[selectedLang].signUpPage}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
