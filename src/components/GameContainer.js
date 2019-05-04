import React, {Component } from 'react';
import NavBar from './pieces/NavBar';
import Banner from './pieces/Banner';
import Board from './pieces/Board';
import Characters from '../characters.json';

class GameContainer extends Component {
    state = {
        score: 0,
        highScore: 0,
        icons: Characters,
        group: []
    };

    handleButtonClick = event => {
        if(this.state.group.indexOf(event.target.id)===-1){
            this.setState({score: this.state.score + 1});
            if(this.state.highScore <= this.state.score){
                this.setState({highScore: this.state.score + 1});
            }
            this.state.group.push(event.target.id);
        } else {
            this.setState({score: 0});
            this.setState({group: []});
        }
        this.setState({
            icons: this.state.icons.sort(() => Math.random() - 0.5)
        })
    }

    render(){
        return (
            <div>
                <NavBar score={this.state.score} highScore={this.state.highScore}/>
                <Banner />
                <Board icons={this.state.icons} handleButtonClick={this.handleButtonClick}/>
            </div>
        );
    }
}

export default GameContainer;