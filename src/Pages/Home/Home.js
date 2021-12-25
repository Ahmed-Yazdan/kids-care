import React, { useState, useEffect } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../../components/Service/Service';


const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://ahmed-yazdan.github.io/Healthcare-data-API/data.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div>
            <div className="container mx-auto">
                <Carousel>
                    <Carousel.Item>
                        <img
                            style={{ height: "500px", width: "100%" }}
                            className="d-block w-100"
                            src="https://image.freepik.com/free-vector/thank-you-doctor-superhero-concept_52683-36927.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 style={{ color: "yellow", backgroundColor: "purple" }}>We are always with you!</h3>
                            <p style={{ color: "yellow", backgroundColor: "purple" }}>Remember kids, an apple a day, keeps the doctor away!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "500px", width: "100%" }}
                            className="d-block w-100"
                            src="https://image.freepik.com/free-photo/health-medicine-medical-icon_53876-139827.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 style={{ color: "yellow", backgroundColor: "purple" }}>Always be active, never get lazy!</h3>
                            <p style={{ color: "yellow", backgroundColor: "purple" }}>Laziness is the key to your bad health.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "500px", width: "100%" }}
                            className="d-block w-100"
                            src="https://image.freepik.com/free-photo/boy-cute-sweet-adorable-child-boy-white-medical-suit-sunglasses-blue-desk_179666-393.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 style={{ color: "yellow", backgroundColor: "purple" }}>If you feel bad, just contact us</h3>
                            <p style={{ color: "yellow", backgroundColor: "purple" }}>You can contact with us anytime you want.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="container mx-auto">
                <div>
                    <h1 style={{ textAlign: "centre", color: "#d88ad8" }}>Welcome to Kids Care</h1>
                    <p>We are a team of professional doctors who are dedicated to ensure your kid's good health!</p>
                </div>
                <div className="my-4">
                    <Link to="/services" style={{ textDecoration: "none" }}>
                        <h1 style={{ textAlign: "centre", color: "#d88ad8", textDecoration: "none" }}>Our services</h1>
                    </Link>
                    <Row xs={1} md={3} className="g-4">
                        {
                            data.map(service => <Service service={service} key={service.unique_id} isDetails={false}></Service>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Home;