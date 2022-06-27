import {
  GET_USERS,
  BOOKMARK_USER,
  REMOVE_USER,
} from '../bookmark/bookmarkContants';

export const bookmarkReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;

    case BOOKMARK_USER:
      return [action.payload, ...state];

    case REMOVE_USER:
      return state.filter(user => {
        return user.id !== action.id;
      });

    default:
      return state;
  }
};
