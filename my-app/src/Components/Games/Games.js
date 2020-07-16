import React from 'react';
import styles from './Games.css';
import { Container } from 'react-bootstrap';
import { Search, Accordion, AccordionItem } from 'carbon-components-react';
import "carbon-components/css/carbon-components.min.css";

/* global window document */

class Games extends React.Component {
    _gameToggle() {
        if (window.location.href.includes("strategy")) {
            if (document.getElementById("all").className === styles.gamesContentAll) {
                document.getElementById("strategy").className = styles.gamesContentStratHide;
            } else {
                document.getElementById("all").className = styles.gamesContentStrat;
            }
        }
    }
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
                                    <AccordionItem title="Hobbies"><a className="filters" onClick={this._gameToggle()} href="/games/strategy">Problem Solving Games</a></AccordionItem>
                                </Accordion>
                                <Accordion>
                                    <AccordionItem title="Reading"><a className="filters" href="/games/coloring">Coloring Games</a></AccordionItem>
                                </Accordion>
                                <Accordion>
                                    <AccordionItem title="Writing"><a className="filters" href="/games/reading">Reading Games</a></AccordionItem>
                                </Accordion>
                            </div>
                            <div id="all" className="gamesContentAll">
                                <p>All</p>
                            </div>
                            <div className="gamesContentStratHide" id="strategy">
                                <p>Strat</p>
                            </div>
                            <div className="gamesContentColorHide" id="coloring">
                                <p>color</p>
                            </div>
                            <div className="gamesContentReadHide" id="reading">
                                <p>read</p>
                            </div>
                        </div>
                    </div>
			</div>
        </Container>
		);
	}
}


export default Games;
