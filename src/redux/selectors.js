
import { usersFilters } from "./constants";
export const selectUsers = ({users})=> users;
export const selectFilter = ({filter}) => filter;



export const selectFilteredUsers = ({users, filter}) => {
  
  if (filter===usersFilters.follow) {
    return users.items.filter(item => item.status===usersFilters.follow);
  }
  if (filter===usersFilters.followings) {
    return users.items.filter(item => item.status===usersFilters.followings);
  }
  return users.items;
  };

  export const getUsersFilter = state => state.filter;