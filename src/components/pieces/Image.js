import React from 'react';

function Image(props){

    return (
        <div className="col-lg-3">
            <img src={props.img} onClick={props.click} id={props.id}></img>
        </div>
    )
}

export default Image;