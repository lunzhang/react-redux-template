import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    message: state.message
});

class App extends Component {
  render() {
    return (
      <div id="app">
        { this.props.message }
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
