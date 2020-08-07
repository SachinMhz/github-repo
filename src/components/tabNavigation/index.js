import React, { useState } from "react";
import { connect } from "react-redux";
import "./tabNavigation.css";

const TabNavigation = (props) => {
  const [active, setActive] = useState([0, 1, 0]);

  const getStyle = (idx) => {
    if (active[idx]) {
      return "active";
    } else {
      return "inactive";
    }
  };
  const changeActive = (idx) => {
    let _active = [0, 0, 0];
    _active[idx] = 1;
    setActive(_active);
  };
  return (
    <ul className="tab tab-navigation">
      <li
        className={`tab__item ${getStyle(0)}`}
        onClick={() => changeActive(0)}
      >
        <span className="tab__icon">
          <i class="fas fa-book"></i>
        </span>
        Repositories
        <span className="tab__repo-no">{props.repo.length}</span>
      </li>
      <li
        className={`tab__item ${getStyle(1)}`}
        onClick={() => changeActive(1)}
      >
        <span className="tab__icon">
          <i class="fas fa-users"></i>
        </span>
        Followers
        <span className="tab__repo-no">{props.followers.length}</span>
      </li>
      <li
        className={`tab__item ${getStyle(2)}`}
        onClick={() => changeActive(2)}
      >
        <span className="tab__icon">
          <i class="fas fa-user-friends"></i>
        </span>
        Followings
        <span className="tab__repo-no">{props.followings.length}</span>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    repo: state.repo.repo,
    followers: state.followers.followers,
    followings: state.followings.followings,
  };
};
export default connect(mapStateToProps)(TabNavigation);
