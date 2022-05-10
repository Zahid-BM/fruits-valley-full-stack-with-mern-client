import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import SingleItem from './SingleItem';

const Items = () => {
    const [items] = useItems();
    return (
        <div>
            <Container className='my-5'>
                <h1 className='text-center fw-bold display-4'>Warehouse items</h1>
                <Row>
                    {
                        items.slice(0, 6).map(item => <SingleItem key={item._id} item={item}></SingleItem>)
                    }
                </Row>
                <Link to='/allitems'><Button className='btn-lg mx-auto d-block text-info' variant='warning'>See all Items <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-clipboard2-check-fill" viewBox="0 0 16 16">
                    <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                    <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5Zm6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708Z" />
                </svg></Button></Link>
            </Container>
        </div>
    );
};

export default Items;