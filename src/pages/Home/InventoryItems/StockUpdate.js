import React from 'react';
import { useParams } from 'react-router-dom';
import useStockUpdate from '../../../hooks/useStockUpdate';

const StockUpdate = () => {
    const { id } = useParams();
    const [stockUpdate] = useStockUpdate(id);
    return (
        <div>
            <h2>This is Stock update protected route</h2>
        </div>
    );
};

export default StockUpdate;