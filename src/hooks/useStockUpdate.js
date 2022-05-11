import axios from "axios";
import { useEffect, useState } from "react"

const useStockUpdate = id => {
    const [stockUpdate, setStockUpdate] = useState({});
    useEffect(() => {
        const getItemById = async () => {
            const url = `http://localhost:8000/inventory/${id}`
            const { data } = await axios.get(url);
            setStockUpdate(data);
        }
        getItemById();
    }, [id])
    return [stockUpdate];
};
export default useStockUpdate;