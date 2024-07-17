import React, { useEffect } from "react";
import Popup from "reactjs-popup";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);

  return (
    <div className="absolute flex justify-between m-3 z-20 w-screen pr-10">
      <div>
        <img
          className=" h-12 w-28"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="net"
        />
      </div>
      <div className="">
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
              <li
                className="w-20 cursor-pointer text-white"
                onClick={userSignOut}
              >
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
