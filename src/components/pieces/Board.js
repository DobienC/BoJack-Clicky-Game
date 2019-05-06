import React from 'react';
import Image from './Image';

function Board(props) {
    
    return (
        <div className="container mt-5">
            <div className="row">
                {props.icons.map((item) => <Image id={item.id} click={props.handleButtonClick} img={item.image} />)}
            </div>
        </div>
    )
}

export default Board;