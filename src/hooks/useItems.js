import axios from "axios";
import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const { data } = await axios.get('http://localhost:5000/items');
            setItems(data);
        };
        getItems();
    }, []);
    return [items];
};

export default useItems;