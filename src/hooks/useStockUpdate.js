import axios from "axios";
import { useEffect, useState } from "react"

const useStockUpdate = id => {
    const [stockUpdate, setStockUpdate] = useState({});
    useEffect(() => {
        const getItemById = async () => {
            const url = `https://fruits-warehouse.herokuapp.com/inventory/${id}`
            const { data } = await axios.get(url);
            setStockUpdate(data);
        }
        getItemById();
    }, [id])
    return [stockUpdate];
};
export default useStockUpdate;