import {GET_USERS,BOOKMARK_USER, REMOVE_USER} from '../bookmark/bookmarkContants';


export function loadUsers(users) {
    return {
      type: GET_USERS,
      payload: users,
    };
  }
  
  export function addBookmark(user) {
    return {
      type: BOOKMARK_USER,
      payload: {
        user,
      },
    };
  }
  
  export function removeBookmark(id) {
    return {
      type: REMOVE_USER,
      id,
    };
  }
  