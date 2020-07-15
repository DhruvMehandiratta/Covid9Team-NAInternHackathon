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
							<img className="classroom" alt="empty" src={classroom} />
							<button className="classroomButton">Live Classrooms</button>

							<img className="playdates" alt="empty" src={playdates} />
							<button className="playdatesButton">Online Playdates</button>
						</div>
						<div className="content-container2">
							<img className="vids" alt="empty" src={vids} />
							<button className="vidsButton">Educational Videos</button>

							<img className="games" alt="empty" src={games} />
							<button className="gamesButton">Games</button>
						</div>
					</div>
				</div>
        </Container>
		);
	}
}


export default Learn;
