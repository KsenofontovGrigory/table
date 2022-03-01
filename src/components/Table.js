import React from "react";
import {connect} from "react-redux";
import {fetchBeers} from "../redux/actions";

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state={}
    }

    componentDidMount() {
        console.log(mapDispatchToProps)
        console.log(this.state.beers)
        console.log(this.state)
    }

    render() {
        return (
            <div>111</div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.beers)
    return {
        beers: state.beers
    }
};

const mapDispatchToProps = {
    fetchBeers
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
