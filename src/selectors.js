export const getCachedLeaders = (state, game, period) => {
  if (state.leaders[game]) {
    if(!state.leaders[game][period]) {
      return false;
    } else {
      return state.leaders[game][period];
    }
  } else {
    return false;
  }
}
