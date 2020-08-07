import React, { useState } from "react";
import "./followings.css";
import { connect } from "react-redux";
import FollowingItem from "./followingItem";

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
    if (page < props.followings.length / REPO_IN_PAGES) {
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
          placeholder="Find a Following..."
        />
      </div>
      <div>
        {search &&
          (searchList(props.followings).length > 0 ? (
            searchList(props.followings).map((item) => {
              return <FollowingItem key={item.id} item={item} />;
            })
          ) : (
            <div style={{ marginTop: 10, fontSize: 16 }}> No result found</div>
          ))}
        {!search &&
          props.followings
            .slice((page - 1) * REPO_IN_PAGES, page * REPO_IN_PAGES)
            .map((item) => {
              return <FollowingItem key={item.id} item={item} />;
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
    followings: state.followings.followings,
  };
};
export default connect(mapStateToProps)(Repository);
