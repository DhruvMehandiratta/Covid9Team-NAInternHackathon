import React from 'react';
import { Container } from 'react-bootstrap';
import './Games.css'
import { Search, Accordion, AccordionItem } from 'carbon-components-react';
import "carbon-components/css/carbon-components.min.css";
import image1 from '../../assets/dino.png';
import image2 from '../../assets/strategy.png';
import image3 from '../../assets/story.png';

class Games extends React.Component {
	render() {
		return (
			<Container className="gamesContainer">
            <div className="games-page">
                <div className="games-text-container">
                    <h1 className="games-text">
                        Explore educational and interactive games
                    </h1>
				</div>
                    <div className="games-content-container">
                        <div className="searchGamesContainer">
                            <Search id="searchGames" placeHolderText="Search the available games" labelText="Search" />
                            <div className="filterPanelGames">
                                <Accordion>
                                    <AccordionItem title="Strategic Games"><a className="filters" href="/games/strategy">Problem Solving Games</a></AccordionItem>
                                </Accordion>
                                <Accordion>
                                    <AccordionItem title="Educational Games"><a className="filters" href="/games/coloring">Reading Games</a></AccordionItem>
                                </Accordion>
                                <Accordion>
                                    <AccordionItem title="Adventure Games"><a className="filters" href="/games/reading">Dinosaur Games</a></AccordionItem>
                                </Accordion>
                            </div>
                            <div className="gamesContentAll">
                                <img className="games-image" alt="empty" src={image1} />
                                <img className="games-image" alt="empty" src={image2} />
                                <img className="games-image" alt="empty" src={image3} />
                            </div>
                        </div>
                    </div>
			</div>
        </Container>
		);
	}
}


export default Games;
