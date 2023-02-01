import axios from "axios";
import { useEffect, useState } from "react";

const useInventoryItems = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        const getItems = async () => {
            const { data } = await axios.get('https://fruits-valley.onrender.com/inventory');
            setItems(data);
        };
        getItems();

    }, []);


    return [items, setItems];
};

export default useInventoryItems;