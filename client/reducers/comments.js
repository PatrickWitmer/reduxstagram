function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // Return the new state with the new comment
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case 'REMOVE_COMMENT':
      // We need to return a new state without the deleted comment
      return [
        // From the start to the one we want to delete
        ...state.slice(0, action.i),
        // After the deleted one, to the end of state
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // Take current state
      ...state,
      // Overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    };
  }

  return state;
}

export default comments;
