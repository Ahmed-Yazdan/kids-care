import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../../components/Service/Service';

const Services = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://ahmed-yazdan.github.io/Healthcare-data-API/data.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div style={{margin:"30px 20px"}}>
            <Row xs={1} md={3} className="g-4">
                {
                    data.map(service => <Service service={service} key={service.unique_id} isDetails={true}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;