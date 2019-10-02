export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      state.push(action.quote);
    case 'REMOVE_QUOTE':
      state = state.filter(quote => quote.id !== action.quoteId);
      // return state;
    case 'UPVOTE_QUOTE':
      state = state.map(quote => {
        if (quote.id === action.quoteId) {
          quote.votes += 1;
        }
        return quote
      });
      return state 
    case 'DOWNVOTE_QUOTE':
      state = state.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0) {
          quote.votes -= 1;
        }
        return quote
      });
      return state
    default: 
      return state 
  };
}
