import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.css'
const Details = (props) => {
    let { id } = useParams();
    const { services } = props;
    const service = services.filter(item => item.unique_id == id);
    const { name, price, duration, description, image_url } = service[0];
    console.log(id, services, service, name, price);
    return (
        <>
            <Card className="w-100">
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>Price: {price}tk</Card.Title>
                    <Card.Title> Time needed: {duration}min</Card.Title>
                    <Card.Text>
                        {
                            description
                        }
                    </Card.Text>
                    <Link to="/purchasecomplete">
                    <button className="button"><i class="fas fa-plus"></i>Purchase </button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default Details;