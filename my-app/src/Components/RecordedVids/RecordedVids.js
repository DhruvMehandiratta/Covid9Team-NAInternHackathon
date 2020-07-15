import React from 'react';
import './RecordedVids.css';
import { Container, Button, Dropdown } from 'react-bootstrap';
import { Search } from 'carbon-components-react';
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
                                    <p>Filters</p>
                            </div>
                            <div className="videos">
                                <iframe className="vid" width="560" height="315" src="https://www.youtube.com/embed/Xa_qNH8u3OM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <iframe className="vid" width="560" height="315" src="https://www.youtube.com/embed/dsScsu_s8FY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <iframe className="vid" width="560" height="315" src="https://www.youtube.com/embed/ZrqF7yD10Bo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
			</div>
        </Container>
		);
	}
}


export default RecordedVids;
