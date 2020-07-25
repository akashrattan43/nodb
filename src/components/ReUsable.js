import React from 'react';


const ReUsable = ({...props}) => {
    return(
        <React.Fragment>
            <div className="container">
                <h1>call props here</h1>
                <h2>call another props here</h2>
            </div>
        </React.Fragment>
    )
}

export default ReUsable;