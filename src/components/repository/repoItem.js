import React from "react";

const RepoItem = ({ item }) => {
  const { name, description, updated_at, language, html_url } = item;
  return (
    <div className="repo-item">
      <div className="repo-item__title">
        <a href={html_url} title={name}>
          {name}
        </a>
      </div>
      <div className="repo-item__text">{description}</div>
      {language && (
        <div className="repo-item__text">
          <span className="repo__circle">
            <i class="fas fa-circle"></i>
          </span>
          {language}
        </div>
      )}
      <div className="repo-item__text">Update on {updated_at.slice(0, 10)}</div>

      <div className="repo__btn">
        <i class="far fa-star"></i> Star
      </div>
    </div>
  );
};
export default RepoItem;
