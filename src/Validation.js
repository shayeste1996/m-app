import React, { Component } from 'react';

class Validation extends Component {
    render() {
        return (
            <div>

                <p>{this.props.txtLength > 5 ? "text is long enough" : "text is too short"}</p>
                <p>{this.props.txtLength}</p>
            </div>
            

        )
    }
}
export default Validation;