export default (state = [], action) => {
  let idx
  switch(action.type) {
      case 'ADD_QUOTE':
        return [...state, action.quote];
      case 'REMOVE_QUOTE':
        idx = state.findIndex(quote => quote.id === action.quoteId)
        return [...state.slice(0, idx), ...state.slice(idx+1)]
      case 'UPVOTE_QUOTE':
        idx = state.findIndex(quote => quote.id === action.quoteId)
        var upvoteQuote=state[idx]
        upvoteQuote.votes = upvoteQuote.votes+1
        return [...state.slice(0, idx-1),upvoteQuote,...state.slice(idx+1)]
      case 'DOWNVOTE_QUOTE':
          idx = state.findIndex(quote => quote.id === action.quoteId)

        var qVotes = state[idx].votes
          qVotes -= 1
          if (qVotes >= 0) {
              var downvoteQuote=state[idx]
              state[idx].votes = qVotes;
              return [...state.slice(0, idx-1),downvoteQuote,...state.slice(idx+1)]
          }
          else {return state}

       default:
        return state;

  }


}
