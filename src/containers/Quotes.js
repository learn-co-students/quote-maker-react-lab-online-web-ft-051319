import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {upvoteQuote, downvoteQuote, removeQuote} from '../actions/quotes.js'

class Quotes extends Component {
 renderQuoteCards = () => {
  // console.log(this.props)
   return this.props.quotes.map (quote=> <QuoteCard quote={quote} removeQuote={this.props.removeQuote}
     upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} />)
 }
  render() {

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
              {
                this.renderQuoteCards()
/*
                this.props.quotes.map((quote) => <QuoteCard quote={quote}/>)
*/

              }

            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed

const mapStateToProps = state => {
  return {quotes: state.quotes}
}


export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
