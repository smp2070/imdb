import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleMessage } from '../actions';
import { bindActionCreators } from 'redux';

class Toggle extends Component {
  render() {
    const { messageVisibility, toggleMessage } = this.props;
    return (
        <div>
            {messageVisibility && <p>You will be seeing this if redux is toggled.</p>}
            <button onClick={toggleMessage}>Toggle Me</button>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    messageVisibility: state.toggle.messageVisibility
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ toggleMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);