import React, { useEffect } from "react";
import Popup from "reactjs-popup";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { changeLang } from "../utils/langSlice";
import { togglePage } from "../utils/togglePageSlice";

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

  const loggedUser = useSelector((store) => store.user);
  const gptPage = useSelector((store) => store.gpt.showGptPage);

  const onLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  const togglePageOut = () => {
    dispatch(togglePage());
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
    <div className="absolute flex justify-between p-3 z-20 w-screen pr-10 bg-gradient-to-b from-black">
      <div>
        <img
          className=" h-12 w-28"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="net"
        />
      </div>
      <div className="flex">
        <div className="mr-4">
          {loggedUser ? (
            gptPage ? (
              <button
                className="bg-red-600 text-white px-3 py-1rounded-lg "
                onClick={togglePageOut}
              >
                HOME Page
              </button>
            ) : (
              <button
                className="bg-red-600 text-white px-3 py-1 rounded-lg"
                onClick={togglePageOut}
              >
                GPT Page
              </button>
            )
          ) : (
            ""
          )}
        </div>
        <div className="mr-4">
          <p className="text-white font-semibold mb-1 ">Change Language</p>
          <select
            onChange={onLangChange}
            className="ml-8 px-3 rounded-lg bg-black text-white"
          >
            <option className="rounded-lg" value={"english"}>
              English
            </option>
            <option className="rounded-lg" value={"hindi"}>
              Hindi
            </option>
            <option className="rounded-lg" value={"telugu"}>
              Telugu
            </option>
          </select>
        </div>
        <div className="">
          {loggedUser ? (
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
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
