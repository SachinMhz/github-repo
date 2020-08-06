//types
export const GET_REPOSITORY = "GET_REPOSITORY";

export function getRepository(repo) {
  return {
    type: GET_REPOSITORY,
    payload: repo,
  };
}
