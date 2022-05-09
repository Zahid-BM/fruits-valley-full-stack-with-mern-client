import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const DailyReport = () => {
    const [data] = useChart();
    return (
        <>
            <Container>
                <Row>
                    <Col lg={6}>
                        <ResponsiveContainer width="100%" aspect={1.4}>
                            <BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="day" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="stock" fill="#446A46" />
                                <Bar dataKey="shipped" fill="#F66B0E" />
                                <Bar dataKey="request" fill="#363062" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col lg={6}>

                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DailyReport;