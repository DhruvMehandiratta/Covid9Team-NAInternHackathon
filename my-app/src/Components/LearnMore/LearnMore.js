import React from 'react';
import './LearnMore.css';
import { Container } from 'react-bootstrap';
import classroom from '../../assets/liveClassroom.jpg';
import playdates from '../../assets/playdate.png';
import games from '../../assets/games.png';
import vids from '../../assets/eduVids.png';

class Learn extends React.Component { 
	render() {
		return (
			<Container className="learnContainer">
            <div className="learn-page">
                <div className="learn-text-container">
                    <h1 className="learn-text">
                        Explore new classes, games, online playdates and more!
                    </h1>
					</div>
					<div className="content-container">
						<div className="content-container1">
							<img className="classroom" alt="classroom" src={classroom} />
							<a className="classroomButton" href="/calendar">Live Classrooms</a>

							<img className="playdates" alt="playdates" src={playdates} />
							<a className="playdatesButton" href="/playdates">Online Playdates</a>

							
						</div>
						<div className="content-container2">
							<img className="vids" alt="videos" src={vids} />
							<a className="vidsButton" href="/videos">Educational Videos</a>

							<img className="games" alt="games" src={games} />
							<a className="gamesButton" href="/games">Games</a>
						</div>
					</div>
				</div>
        </Container>
		);
	}
}


export default Learn;
