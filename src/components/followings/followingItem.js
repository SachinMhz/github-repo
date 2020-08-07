import React from "react";

const FollowingItem = ({ item }) => {
  const { login, html_url } = item;
  return (
    <div className="repo-item">
      <div className="repo-item__title">
        <a href={html_url} title={login}>
          {login}
        </a>
      </div>

      <div className="repo__btn">
        <i className="far fa-star"></i> Follow
      </div>
    </div>
  );
};
export default FollowingItem;
