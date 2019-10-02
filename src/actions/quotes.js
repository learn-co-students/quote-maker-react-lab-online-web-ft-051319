// TODO: Create action creators as defined in tests

const addQuote = quote => ({
    type: "ADD_QUOTE",
    quote: {...quote, votes: 0}
    });

const removeQuote = quoteId => ({
    type: "REMOVE_QUOTE",
    quoteId: quoteId
    });

const upvoteQuote = quoteId => ({
    type: "UPVOTE_QUOTE",
    quoteId: quoteId
    });

const downvoteQuote = quoteId => ({
    type: "DOWNVOTE_QUOTE",
    quoteId: quoteId
    });

export {addQuote, removeQuote, upvoteQuote, downvoteQuote};

// export function addQuote(quote) {
//     return {
//     type: 'ADD_QUOTE',
//     quote: {...quote}
//     };
// };
