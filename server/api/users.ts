import usersData from "../data/users.json";

export default defineEventHandler(async (event) => {
  return usersData.responses[0].body;
});
