import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbo = () => { /*(props)- not used currently*/
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Bryan Salicco</h1>
                    <p className="lead">|| Software Developer || Professor || Hockey Player || Snowboarder || Golfer || Yogi ||</p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Jumbo;