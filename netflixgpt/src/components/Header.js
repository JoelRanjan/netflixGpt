import React, { useState } from "react";
import Popup from "reactjs-popup";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="flex justify-between m-3">
      <div>
        <img
          className=" h-12 w-28"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="net"
        />
      </div>
      <div className="">
        {/* <img
          src="https://occ-0-2040-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7"
          alt="logo"
          onClick={toggleOptions}
        /> */}
        <div>
          <Popup
            trigger={
              <button>
                <img
                  src="https://occ-0-2040-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7"
                  alt="logo"
                />
              </button>
            }
            position="bottom center"
          >
            <ul>
              <li className="w-20 cursor-pointer" onClick={userSignOut}>
                Sign out
              </li>
            </ul>
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default Header;
