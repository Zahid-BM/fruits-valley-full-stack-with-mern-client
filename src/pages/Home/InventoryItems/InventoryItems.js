import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventoryItems from '../../../hooks/useInventoryItems';
import SingleItem from './SingleItem';
import image1 from '../../../images/cherry.png';
import image2 from '../../../images/fruits.png';



const InventoryItems = () => {
    const [items] = useInventoryItems();
    return (
        <div>
            <Container className='my-5'>
                <h1 className='text-center fw-bold display-4'>Warehouse items <img src={image1} alt="" /></h1>
                <Row>
                    {
                        items.slice(0, 6).map(item => <SingleItem key={item._id} item={item}></SingleItem>)
                    }
                </Row>
                <Link to='/manageinventories'><Button className='btn-lg mx-auto d-block text-white my-5 hover1' variant='danger'>Manage Inventories <img className='ms-1' src={image2} alt="" /></Button></Link>
            </Container>
        </div>
    );
};

export default InventoryItems;