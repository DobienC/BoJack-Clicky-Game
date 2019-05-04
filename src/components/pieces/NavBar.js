import React from "react";

function NavBar(props) {
    return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="col-lg-4">
                <h1><a href="#">Clicky Game</a></h1>
            </div>
            <div className="col-lg-4">
                <h1>Click an image to start!</h1>
            </div>
            <div className="col-lg-4">
                <h2>Score {props.score} | High Score: {props.highScore}</h2>
            </div>
        </nav>
        
    </div>
    )
}

export default NavBar;