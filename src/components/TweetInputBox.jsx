import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as messageActions from '../actions/messageActions';
import * as messageApi from '../api/messageApi';
import './App.css';

class TweetInputBox extends Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  handleChange = (e) => {
    console.log(e)
    if(e.length > 255){
      return
    }
    this.setState({ tweet: e.currentTarget.value });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      const { tweetInputBox } = this.state;
      this.setState({ tweet: tweetInputBox || '' });

      if(this.props.user.id !== undefined){
        messageApi.postMessage(this.props.user.id, this.state.tweet).then(() => {
          console.log('TODO: Call load messages action. Dispatch to redux.');
          this.setState({ tweet: '' });
        });
      }
    }
  }

// the below code has been commented out because a handler (above) has been added to handle the post on keypress of 'Enter'

  // handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const { tweetInputBox } = this.state;
  //   this.setState({ tweet: tweetInputBox || '' });

  //   if(this.props.user.id !== undefined){
  //     messageApi.postMessage(this.props.user.id, this.state.tweet).then(() => {
  //       console.log('TODO: Call load messages action. Dispatch to redux.');
  //       this.setState({ tweet: '' });
  //     });
  //   }
  // }

  tweetBox(){
    if(this.props.user.id !== undefined){
      return(
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={ this.state.tweet }
            type="text"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            maxLength="144"
            className="tweet-form"
            name="tweetInputBox"
            placeholder="What's on your mind?" />
          {/* Commented out as a submit button is */}
          {/* <input type="submit" value="Submit" /> */}
        </form>
      );
    }

    return <p>Login to React Boulder Twitter to post your thoughts!</p>;
  }

  render() {
    return (
      <div>
        { this.tweetBox() }
      </div>
    );
  }
}

function mapStateToProps(state, props){
  return {
    app: state.app,
    user: state.user
  }
}

function mapDispatchToProps(dispatch){
  return {
    messageActions: bindActionCreators(messageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetInputBox);
