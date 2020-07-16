import React from 'react';
import './RecordedVids.css';
import { Container } from 'react-bootstrap';
import { Search, Accordion, AccordionItem } from 'carbon-components-react';
import "carbon-components/css/carbon-components.min.css";

class RecordedVids extends React.Component { 
	render() {
		return (
			<Container className="vidsContainer">
            <div className="vids-page">
                <div className="vids-text-container">
                    <h1 className="vids-text">
                        Can't attend our live classrooms? Explore pre-recorded classes by our teachers
                    </h1>
				</div>
                    <div className="vid-content-container">
                        <div className="searchContainer">
                            <Search id="search" placeHolderText="Search the available classes" labelText="Search" />
                            <div className="filterPanel">
                                <Accordion>
                                    <AccordionItem title="Hobbies"><a className="filters" href="/videos/hobbies">Arts and Craft</a></AccordionItem>
                                </Accordion>
                                <Accordion>
                                    <AccordionItem title="Reading"><a className="filters" href="/videos/reading">Story Hour</a></AccordionItem>
                                </Accordion>
                                <Accordion>
                                    <AccordionItem title="Writing"><a className="filters" href="/videos/writing">Creative Writing</a></AccordionItem>
                                </Accordion>
                            </div>
                            <div className="videos">
                                <iframe className="vid" title="vid1" width="560" height="315" src="https://www.youtube.com/embed/Xa_qNH8u3OM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <iframe className="vid" title="vid2" width="560" height="315" src="https://www.youtube.com/embed/dsScsu_s8FY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <iframe className="vid" title="vid3" width="560" height="315" src="https://www.youtube.com/embed/ZrqF7yD10Bo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <iframe className="vid" title="vid4" width="560" height="315" src="https://www.youtube.com/embed/j2WhBtmpqCA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <iframe className="vid" title="vid5" width="560" height="315" src="https://www.youtube.com/embed/oyClviB1xd8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <iframe className="vid" title="vid6" width="560" height="315" src="https://www.youtube.com/embed/AbY2Pjyg5CE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <iframe className="vid" title="vid7" width="560" height="315" src="https://www.youtube.com/embed/T53yDxrnLMY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <iframe className="vid" title="vid8" width="560" height="315" src="https://www.youtube.com/embed/ONvNWclIes4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <iframe className="vid" title="vid9" width="560" height="315" src="https://www.youtube.com/embed/e5o8GAtWSZM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                </div>
                        </div>
                    </div>
			</div>
        </Container>
		);
	}
}


export default RecordedVids;
