import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const { isDetails } = props;
    const { name, image_url, unique_id } = props.service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image_url} style={{ height: "400px" }} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {
                                isDetails ? <Link to={`/services/${unique_id}`}><button className="button">View Details</button></Link> : <Link to="/services"><button className="button">Show all services</button></Link> 
                            }
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;