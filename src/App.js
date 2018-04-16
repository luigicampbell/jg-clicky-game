import React, { Component } from 'react';
import './App.css';
import jg from './jg.json'
import Wrapper from './components/wrapper'
import Navpills from './components/navpills'
import Title from './components/title'
import JGCard from './components/JGCard'

class App extends Component {
    state = {
        message: "Ready, click a picture!",
        topScore: 0,
        score: 0,
        jg: jg,
        remainingJGs: jg
    }

    componentDidMount() {
    }

    shuffleJG = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    chooseJG = pose => {
        const findJG = this.state.remainingJGs.find(item => item.pose === pose);

        if(findJG === undefined) {

            // User chooses same jg
            this.setState({
                message: "Oh darn, here we go again!",
                topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
                score: 0,
                jg: jg,
                remainingJGs: jg
            });
        }
        else {

            // User chooses unique jg
            const newJG = this.state.remainingJGs.filter(item => item.pose !== pose);

            this.setState({
                message: "Nice! Keep going~",
                score: this.state.score + 1,
                jg: jg,
                remainingJGs: newJG
            });
        }
        // Shuffle board
        this.shuffleJG(jg);
    };

    render() {
        return (
            <wrapper>
                <navpills
                    message={this.state.message}
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <title />
                {
                    this.state.jg.map(jg => (
                        <JGCard
                            pose={jg.pose}
                            image={jg.image}
                            chooseJG={this.chooseJG}
                            score={this.state.score}
                        />
                    ))
                }
            </wrapper>
        );
    }
}

export default App;
