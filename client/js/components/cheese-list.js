import React from 'react';
import {connect} from 'react-redux';

// IMPORT ACTIONS

export class ComponentName extends React.Component {
    componentDidMount() {
        // DISPATCH FETCH EVENT
    }

    render() {
        // JSX TO RENDER LIST OF CHEESES
    }
}

const mapStateToProps = (state, props) => ({
  // MAP STATE CHEESES TO PROP CHEESES
});

export default connect(mapStateToProps)(ComponentName);
