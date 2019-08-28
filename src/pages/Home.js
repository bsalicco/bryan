import React from "react";
import {Container, Row, Col, Button} from 'reactstrap';
import Jumbo from '../components/Jumbo';
import CardHome from '../components/CardHome';

export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><Jumbo/></Col>
                </Row>
                <Row>
                    <Col><CardHome title="#WatsyBubby" text ="The Best Boy Pics!"
                                   link="https://www.instagram.com/explore/tags/watsybubby/"
                                   buttonTitle ="Watsy"/></Col>
                    <Col><CardHome title="UCF Hockey" text ="UCF Hockey Alumni"
                                   link="http://www.ucfhockey.com/"
                                   buttonTitle ="UCF Hockey"/></Col>
                    <Col><CardHome title="U of Denver Bootcamp" text ="Adjuct Bootcamp Professor"
                                   buttonTitle="Explore"/></Col>
                    <Col><CardHome title="Ikon" text ="Oh The Places You Board"
                                   buttonTitle ="Ikon Map"/></Col>
                </Row>
            </Container>
        );
    }
}