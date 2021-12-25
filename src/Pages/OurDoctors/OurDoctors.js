import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctors from '../../components/Doctors/Doctors';

const OurDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("https://ahmed-yazdan.github.io/Healthcare-data-API/doctors.json")
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <Row xs={1} md={2} className="g-4 m-4">
            {
                doctors.map( doctor => <Doctors doctor={doctor} key={doctor.unique_id}></Doctors>)
            }
        </Row>
    );
};

export default OurDoctors;




/*

*/