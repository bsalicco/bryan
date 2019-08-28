import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const CardHome = (props) => {
    return (
        <Card body>
            <CardTitle>{props.title}</CardTitle>
            <CardText>{props.text}</CardText>
            <Button href={props.link}>{props.buttonTitle}</Button>
        </Card>
    );
};

export default CardHome;