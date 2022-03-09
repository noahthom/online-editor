import React from "react";
import { connect } from "react-redux";

const OutputArea = (props) => {

    return (
        <div>
            <textarea value={props.output} readOnly />
        </div>
    )

}


const mapStatetoProps = (state) => {
    return {
        output: state.output
    }
}

export default connect(mapStatetoProps)(OutputArea)