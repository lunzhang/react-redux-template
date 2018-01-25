import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMessage } from '../actions';

const mapStateToProps = (state) => ({
    message: state.message
});

const mapDispatchToProps = (dispatch) => ({
    onSetMessage: (message) => { dispatch(setMessage(message)) }
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'The message is'
        };
        this.props.onSetMessage('Hello World');
    }
    render() {
        return (
            <div id="app">
                <div>
                    { this.state.message }
                </div>
                <div>
                    { this.props.message }
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
