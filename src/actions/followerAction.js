export const GET_FOLLOWERS = "GET_FOLLOWERS";

export function getFollowers(followers) {
  return {
    type: GET_FOLLOWERS,
    payload: followers,
  };
}
