import React from "react";

function NavBar(props) {
    return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="col-sm-4">
                <h2><a href="#">Clicky Game</a></h2>
            </div>
            <div className="col-sm-4">
                <h2>Score {props.score} | High Score: {props.highScore}</h2>
            </div>
        </nav>
    </div>
    )
}

export default NavBar;