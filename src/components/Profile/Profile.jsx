import React from "react";
import Nav from "../Home/Nav/Nav";
import { useSelector } from "react-redux";
import "./Profile.css";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

const Profile = () => {
  const user = useSelector(selectUser);

  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img src="/avatar.png" alt="Netflix Avatar" />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <div className="profile__plans">
              <h3>Plans</h3>
              <button
                onClick={() => auth.signOut()}
                className="profile__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
