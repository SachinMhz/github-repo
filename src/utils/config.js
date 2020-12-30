import followings from "../components/followings";

const BASE_URL = "https://api.github.com/users/akashgiri1998";

const endPoints = {
  user: "",
  repository: "/repos",
  followers: "/followers",
  followings: "/following",
};

export default {
  BASE_URL,
  endPoints,
};
