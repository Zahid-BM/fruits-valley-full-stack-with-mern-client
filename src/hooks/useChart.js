import axios from "axios";
import { useEffect, useState } from "react";

const useChart = () => {
    const [chart, setChart] = useState([]);
    useEffect(() => {
        const getReport = async () => {
            const { data } = await axios.get('https://fruits-valley.onrender.com/report');
            setChart(data);
        }
        getReport();
    }, []);
    return [chart];
};
export default useChart;
