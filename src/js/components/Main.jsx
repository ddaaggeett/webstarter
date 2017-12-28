import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Main extends Component {

    render() {

        return (
            <div className='body'>
                <div className="vertical_content">modern web developement starter point</div>


                <div className="vertical_content">
                    <div className="interactives">
                        <div className="button" onClick={() => this.props.countUp()}>count up</div>
                        <div className="button" onClick={() => this.props.countDown()}>count down</div>
                    </div>

                    <div className="interactives">
                        <p id="count">{this.props.main.count}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main
