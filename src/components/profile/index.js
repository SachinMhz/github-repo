import React from "react";
import { connect } from "react-redux";
import "./profile.css";

const Profile = (props) => {
  const {
    avatar_url,
    login,
    bio,
    blog,
    followers,
    following,
    location,
  } = props.profile;
  return (
    <div className="profile">
      <div className="user profile__user">
        <div className="profile__img-container">
          <img className="profile__img" src={avatar_url} alt="user profile" />
        </div>
        <div className="profile__name">{login}</div>
      </div>
      <div className="profile__desc">{bio}</div>
      <ul className="profile__follow-container">
        <li className="profile__items">
          <i className="fas fa-user-friends"></i>
          {"  "}
          <strong>{followers} </strong> followers
        </li>
        <li className="profile__items">
          <strong>{following} </strong> following
        </li>
      </ul>
      <div className="profile__text">
        <i className="fas fa-map-marker-alt"></i> {location}
      </div>

      <div className="profile__text">
        <i className="fas fa-link"></i>{" "}
        <a href={blog} title="profile link">
          {blog}
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    profile: state.profile,
  };
};
export default connect(mapStateToProps)(Profile);
