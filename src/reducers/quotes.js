export default (state = [], action) => {
  switch(action.type){
    case 'ADD_QUOTE':
      let existingQuote = state.filter(quote => quote.content === action.quote.content);

      if (existingQuote.length > 0){
        return state;
      } else {
        return [...state, {...action.quote} ]
      }

    case 'REMOVE_QUOTE':
      let index = state.findIndex(quote => quote.id === action.quoteId);
      return state.filter(quote => state.indexOf(quote) !== index)
    
    case 'UPVOTE_QUOTE':
      let upIndex = state.findIndex(quote => quote.id === action.quoteId);
      let upQuote = state.find(quote => quote.id === action.quoteId);
      return [...state.slice(0, upIndex), {...upQuote, votes: upQuote.votes + 1 }, ...state.slice(upIndex + 1)]

    case 'DOWNVOTE_QUOTE':
        let downIndex = state.findIndex(quote => quote.id === action.quoteId);
        let downQuote = state.find(quote => quote.id === action.quoteId);

        if (downQuote.votes > 0) {
          return [...state.slice(0, downIndex), {...downQuote, votes: downQuote.votes - 1 }, ...state.slice(downIndex + 1)]
        } else {
          return state;
        }

    default:
      return state;
  }
}
