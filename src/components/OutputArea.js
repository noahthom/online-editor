import React from "react";
import { connect } from "react-redux";

const OutputArea = (props) => {

    return (
        <div>
            <textarea className="w-100 h-100 bg-white" rows="31" value={props.output} disabled />
        </div>
    )

}


const mapStatetoProps = (state) => {
    return {
        output: state.output
    }
}

export default connect(mapStatetoProps)(OutputArea)