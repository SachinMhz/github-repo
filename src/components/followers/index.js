import React, { useState } from "react";
import "./followers.css";
import { connect } from "react-redux";
import RepoItem from "./followerItem";

const REPO_IN_PAGES = 10;

const Repository = (props) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const searchList = (list) => {
    return list.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  const nextPage = () => {
    if (page < props.followers.length / REPO_IN_PAGES) {
      setPage(page + 1);
    }
  };
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="repository">
      <div className="search-container">
        <input
          value={search}
          onChange={onSearchChange}
          className="repo__search-input"
          placeholder="Find a Follower..."
        />
      </div>
      <div>
        {search &&
          (searchList(props.followers).length > 0 ? (
            searchList(props.followers).map((item) => {
              return <RepoItem key={item.id} item={item} />;
            })
          ) : (
            <div style={{ marginTop: 10, fontSize: 16 }}> No result found</div>
          ))}
        {!search &&
          props.followers
            .slice((page - 1) * REPO_IN_PAGES, page * REPO_IN_PAGES)
            .map((item) => {
              return <RepoItem key={item.id} item={item} />;
            })}
      </div>

      <div className="repo-page__nav">
        <span className="repo-page__arrow" onClick={prevPage}>
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </span>
        <span className="repo-page__number">{page}</span>
        <span className="repo-page__arrow" onClick={nextPage}>
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    followers: state.followers.followers,
  };
};
export default connect(mapStateToProps)(Repository);
