import axios from "axios";
import { useEffect, useState } from "react"

const useStockUpdate = (id,counter) => {
    const [stockUpdate, setStockUpdate] = useState({});
    useEffect(() => {
        const getItemById = async () => {
            const url = `http://localhost:8000/inventory/${id}`
            const { data } = await axios.get(url);
            setStockUpdate(data);
        }
        getItemById();
    }, [id, counter])
    return [stockUpdate];
};
export default useStockUpdate;