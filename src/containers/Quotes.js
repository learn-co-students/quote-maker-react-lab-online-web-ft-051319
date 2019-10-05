import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    const {quotes, removeQuote, upvoteQuote, downvoteQuote} = this.props//destructuring objects from redux store and passed below to the quotes.map
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              
                {quotes.map(quote => <QuoteCard key={quote.id} quote={quote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote} />)}
                {/* Passing props to QuoteCard component */}
               {/* Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes*/}
               
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes  //used above in the render function
  }
}
//add arguments to connect as needed

export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
