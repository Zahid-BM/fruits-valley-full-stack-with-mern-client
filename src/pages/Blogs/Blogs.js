import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import PageTitle from '../Shared/PageTitle/PageTitle';
import image1 from '../../images/question-and-answer.png'


const Blogs = () => {
    return (
        <>
            <PageTitle title={'Blogs'} pageColor={'blogs-bg'}></PageTitle>
            <Container >
                <h1 className='text-center text-danger display-4 mt-5 mb-3'>The questions to be answered <img src={image1} alt="" /></h1>
                <Row>
                    <Col className='my-auto py-5' lg={7}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item className='bg-info text-white' eventKey="0">
                                <Accordion.Header >What is the difference between authorization and authentication?</Accordion.Header>
                                <Accordion.Body>
                                    Authentication is a process by which something/someone can be checked and verified the authenticity of identity or ownerships etc. And authorization is a process by which giving some access or ownership to certain things.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='bg-info text-white' eventKey="1">
                                <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                                <Accordion.Body>
                                    Firebase is famous for it's easier ways to use SDKs, provides backend services, rich ready made UI library and has almost all social media account authentication facilities. For all these reason I use firebase. There are other popular alternatives to firebase like Parse, Back4app, Kuzzle, Pubnub etc.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='bg-info text-white' eventKey="2">
                                <Accordion.Header>What other services does firebase provide other than authentication ?</Accordion.Header>
                                <Accordion.Body>
                                    Firebase has become this much popular because it provides a varieties of services other than authentication. It provides Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging and so on alongside authentication.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col className='py-5' lg={5}>
                        <img className='w-100 rounded-3' src="https://cdn.pixabay.com/photo/2021/11/14/19/04/programming-6795536_960_720.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blogs;