import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import httpUtil from "./utils/http";
import config from "./utils/config";

import { getRepository } from "./actions/repoAction";
import { getProfile } from "./actions/profileAction";
import { getFollowers } from "./actions/followerAction";
import { getFollowings } from "./actions/followingAction";

import Header from "./components/header/";
import Profile from "./components/profile/";
import TabNavigation from "./components/tabNavigation";
import Repository from "./components/repository";
import Followers from "./components/followers";
import Followings from "./components/followings";
import Footer from "./components/footer/";



const App = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    httpUtil
      .get(config.endPoints.repository)
      .then((result) => {
        props.getRepository(result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err, "repo not fetched");
        setIsError(true);
      });
    httpUtil
      .get(config.endPoints.user)
      .then((result) => {
        props.getProfile(result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("profile not fetched");
        setIsError(true);
      });
    httpUtil
      .get(config.endPoints.followers)
      .then((result) => {
        props.getFollowers(result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("followers not fetched");
        setIsError(true);
      });
    httpUtil
      .get(config.endPoints.followings)
      .then((result) => {
        props.getFollowings(result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("followings not fetched");
        setIsError(true);
      });
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="loading-main">
          <img
            className="loading-img"
            src={require("./assets/images/git-load.gif")}
            alt="loading gif"
          />
        </div>
      )}
      {!isLoading && !isError && (
        <div>
          <Header />
          <TabNavigation />
          <main className="clearFix">
            <Profile />
            {props.tabName === "Repository" && <Repository />}
            {props.tabName === "Followers" && <Followers />}
            {props.tabName === "Followings" && <Followings />}
          </main>
          <Footer />
        </div>
      )}
      {isError && <div className="error-container"> Cannot fetch data </div>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tabName: state.tabName.tabName,
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
