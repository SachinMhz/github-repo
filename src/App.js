import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getRepository } from "./actions/repoAction";
import { getProfile } from "./actions/profileAction";

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
      });
    fetch("https://api.github.com/users/SachinMhz")
      .then((res) => res.json())
      .then((result) => {
        props.getProfile(result);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading-screen">loading...</div>
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
