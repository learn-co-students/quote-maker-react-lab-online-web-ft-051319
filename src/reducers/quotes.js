export default (state = [], action) => {

  let index;
  let quote;
  switch(action.type){
    case 'ADD_QUOTE':
      return state.concat(action.quote);
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id != action.quoteId) //returning the state array without the selected quote
    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId) //returning the index of the selected quote
      quote = state[index] //return the quote based on what was found by the number of the index

      return [
        ...state.slice(0 ,index),  //copying the state full of quotes and grabbing a portion of the state up to and excluding the index
        Object.assign({}, quote, {votes: quote.votes + 1}) // copying the found quote and creating an object and adding a key/value pair of votes for the quote and increasing by 1
      ]
    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[index]

      if(quote.votes > 0){
        return [
          ...state.slice(0, index),
          Object.assign({}, quote, {votes: quote.votes - 1})
        ]
      }
      return state
    default:
      return state
}


}

