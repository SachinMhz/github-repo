export const GET_PROFILE = "GET_PROFILE";

export function getProfile(profile) {
  return {
    type: GET_PROFILE,
    payload: profile,
  };
}
