import React from 'react';
import './LiveStream.css';
import { Container } from 'react-bootstrap';

class LiveStream extends React.Component {
    render() {
        return (
            <Container className="streamContainer">
                <div id="videoCanvas">
                    <video id="camera" autoPlay playsInline></video>
                    <canvas id="photo"></canvas>
                </div>

                <div id="buttons">
                    <button id="snap">Snap</button><span> then </span><button id="send">Send</button>
                    <span> or </span>
                    <button id="snapAndSend">Snap &amp; Send</button>
                </div>

                <div id="incoming">
                    <h2>Incoming photos</h2>
                    <div id="trail"></div>
                </div>

                <script src="/socket.io/socket.io.js"></script>
                <script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
                <script src="js/server.js"></script>
            </Container>
        );
    }
}

export default LiveStream;