import React from 'react';
import { Container } from 'react-bootstrap';
import './Games.css'
import { Search, Accordion, AccordionItem } from 'carbon-components-react';
import "carbon-components/css/carbon-components.min.css";
import image1 from '../../assets/dino.png';
import image2 from '../../assets/strategy.png';
import image3 from '../../assets/story.png';
import image4 from '../../assets/story2.png';
import image5 from '../../assets/dino2.png';
import image6 from '../../assets/strategy2.png';
import image7 from '../../assets/strategy3.png';
import image8 from '../../assets/story3.png';
import image9 from '../../assets/dino3.png';
import image10 from '../../assets/animal.png';
import image11 from '../../assets/music.png';
import image12 from '../../assets/language.png';


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
                                <Accordion>
                                    <AccordionItem title="Animal Games"><a className="filters" href="/games/animal">Dog Games</a></AccordionItem>
                                </Accordion>
                                <Accordion>
                                    <AccordionItem title="Language Games"><a className="filters" href="/games/language">Spanish Games</a></AccordionItem>
                                </Accordion>
                                <Accordion>
                                    <AccordionItem title="Music Games"><a className="filters" href="/games/music">Guitar Games</a></AccordionItem>
                                </Accordion>
                            </div>
                            <div className="gamesContentAll">
                                <div className="gamesContainer1">
                                    <img className="games-image" alt="empty" src={image1} />
                                    <a className="gameLinks" href="http://pbskids.org/sesame/games/ernies-dinosaur-daycare/">Dinosaur Daycare</a>
                                    <img className="games-image" alt="empty" src={image2} />
                                    <a className="gameLinks" href="http://pbskids.org/sesame/games/dress-up-time/">Dress Up Time!</a>
                                    <img className="games-image" alt="empty" src={image3} />
                                    <a className="gameLinks" href="http://pbskids.org/sesame/games/story-book-builder/">Storybook Builder</a>
                                    <img className="games-image" alt="empty" src={image10} />
                                    <a className="gameLinks" href="http://www.pbskids.org/martha/games/marthassteaks/index.html">Martha's Steaks</a>
                                </div>
                                <div className="gamesContainer2">
                                    <img className="games-image" alt="empty" src={image4} />
                                    <a className="gameLinks" href="https://pbskids.org/superwhy/games/super-why-saves-the-day/">Super Why Saves The Day!</a>
                                    <img className="games-image" alt="empty" src={image5} />
                                    <a className="gameLinks" href="http://pbskids.org/dinosaurtrain/games/airshow.html">Air Show</a>
                                    <img className="games-image" alt="empty" src={image6} />
                                    <a className="gameLinks" href="https://pbskids.org/sesame/games/detective-elmo-the-cookie-case">Detective Elmo: The Cookie Case</a>
                                    <img className="games-image" alt="empty" src={image11} />
                                    <a className="gameLinks" href="https://pbskids.org/daniel/games/music-shop/">Music Shop</a>
                                </div>
                                <div className="gamesContainer3">
                                    <img className="games-image" alt="empty" src={image7} />
                                    <a className="gameLinks" href="https://pbskids.org/sesame/games/elmos-school-friends/">Elmo's School Friends</a>
                                    <img className="games-image" alt="empty" src={image8} />
                                    <a className="gameLinks" href="https://pbskids.org/daniel/stories/something-special-for-dad/">Something Special for Dad</a>
                                    <img className="games-image" alt="empty" src={image9} />
                                    <a className="gameLinks" href="http://pbskids.org/dinosaurtrain/games/buddysamazingadventure.html">Buddy's A-maze-ing Adventure</a>
                                    <img className="games-image" alt="empty" src={image12} />
                                    <a className="gameLinks" href="http://pbskids.org/catinthehat/games_span/span-sketch-a-mite.html">Dibuja Mita</a>
                                </div>
                            </div>
                        </div>
                    </div>
			</div>
        </Container>
		);
	}
}


export default Games;
