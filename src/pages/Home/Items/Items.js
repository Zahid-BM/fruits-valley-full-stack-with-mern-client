import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import SingleItem from './SingleItem';
import image1 from '../../../images/cherry.png';
import image2 from '../../../images/fruits.png';


const Items = () => {
    const [items] = useItems();
    return (
        <div>
            <Container className='my-5'>
                <h1 className='text-center fw-bold display-4'>Warehouse items <img src={image1} alt="" /></h1>
                <Row>
                    {
                        items.slice(0, 6).map(item => <SingleItem key={item._id} item={item}></SingleItem>)
                    }
                </Row>
                <Link to='/allitems'><Button className='btn-lg mx-auto d-block text-white ' variant='danger'>See all Items <img className='ms-1' src={image2} alt="" /></Button></Link>
            </Container>
        </div>
    );
};

export default Items;