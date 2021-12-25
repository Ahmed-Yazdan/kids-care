import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctors = (props) => {
    const { name, mySpeech, experience, image_url } = props.doctor;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image_url} style={{height:"400px"}} />
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <Card.Title>Experience: {experience}yrs</Card.Title>
                        <Card.Text>
                            {
                                mySpeech
                            }
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Doctors;