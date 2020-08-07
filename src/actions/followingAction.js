export const GET_FOLLOWINGS = "GET_FOLLOWINGS";

export function getFollowings(following) {
  return {
    type: GET_FOLLOWINGS,
    payload: following,
  };
}
