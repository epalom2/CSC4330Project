import React from 'react';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MessagesPage(){
    return(
        <Container>
             <Row className="px-4 my-5">
                <Col><h1>Messages</h1></Col>
            </Row>
        </Container>
    )
}

export default MessagesPage;