import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getRepository } from "./actions/repoAction";
import { getProfile } from "./actions/profileAction";
import { getFollowers } from "./actions/followerAction";
import { getFollowings } from "./actions/followingAction";

import Header from "./components/header/";
import Profile from "./components/profile/";
import TabNavigation from "./components/tabNavigation";
import Repository from "./components/repository";
import Footer from "./components/footer/";

const App = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.github.com/users/SachinMhz/repos")
      .then((res) => res.json())
      .then((result) => {
        props.getRepository(result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("repo not fetched");
        setIsLoading(true);
      });
    fetch("https://api.github.com/users/SachinMhz")
      .then((res) => res.json())
      .then((result) => {
        props.getProfile(result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("profile not fetched");
        setIsLoading(true);
      });
    fetch("https://api.github.com/users/SachinMhz/followers")
      .then((res) => res.json())
      .then((result) => {
        props.getFollowers(result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("followers not fetched");
        setIsLoading(true);
      });
    fetch("https://api.github.com/users/SachinMhz/following")
      .then((res) => res.json())
      .then((result) => {
        props.getFollowings(result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("followings not fetched");
        setIsLoading(true);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading-main">
          <img
            className="loading-img"
            src={require("./assets/images/git-load.gif")}
            alt="loading gif"
          />
        </div>
      ) : (
        <div>
          <Header />
          <TabNavigation />
          <main className="clearFix">
            <Profile />
            <Repository />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    repo: state.repo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getRepository: (repo) => {
      dispatch(getRepository(repo));
    },
    getProfile: (profile) => {
      dispatch(getProfile(profile));
    },
    getFollowings: (followings) => {
      dispatch(getFollowings(followings));
    },
    getFollowers: (followers) => {
      dispatch(getFollowers(followers));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
