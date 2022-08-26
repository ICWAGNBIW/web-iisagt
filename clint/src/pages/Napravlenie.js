import React, { Component } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import director from '../components/data/director.jpg';
import Accordion from 'react-bootstrap/Accordion';
import mail from '../components/data/logo-mail.png';
export default class Napravlenie extends Component {
    render() {
        return (
            <>
                <Container style={{ margin: '0px auto' }}>
                    <Row className="mx-5 mt-5" style={{ justifyContent: 'center' }} id="body_napr">
                        <Col className="col-8 w_100">
                            <Container style={{ backgroundColor: '#065aef', color: 'white', borderRadius: '0.25rem', minHeight: '35px', display: 'flex', alignItems: 'center' }}>
                                <h5 style={{ margin: '0px 0px' }}>09.03.03 Прикладная информатика</h5>
                            </Container>
                            <Row className="marg_null">
                                <Container style={{ padding: "0px" }}>
                                    <Card style={{
                                        margin: "30px 0px", padding: "20px", backgroundColor: 'rgb(248, 249, 250)',
                                        borderColor: 'rgb(248, 249, 250)', border: '1px solid silver', borderRadius: '0.25rem'
                                    }} >
                                        <Card.Title>09.03.03 Прикладные информационные системы и технологии</Card.Title>
                                        <Card.Body className="dir">
                                            <Row>
                                                <div class="acc_header">
                                                    <div class="forma_time">Очная</div>
                                                    <div class="forma_time">5 лет 6 месяцев</div>
                                                </div>
                                            </Row>
                                            <Row>
                                                <p className="text-post1 "> Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                    metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                    metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                    metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                    metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                    metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                    metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                    metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                    metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                </p>
                                            </Row>
                                        </Card.Body>
                                        <p style={{ fontSize: '0.8em', color: 'darkgray', margin: '0px 10px' }}>бюджет, контракт</p>
                                    </Card>
                                </Container>
                            </Row>


                        </Col>
                        <Col className="col-3 w_100">
                            <Row className="marg_null" style={{ margin: '10px 0px' }}>
                                <Card id="face_cards_for_napr" style={{
                                    padding: '15px', margin: '0px',
                                    backgroundColor: 'rgb(248, 249, 250)', borderColor: 'rgb(248, 249, 250)',
                                    borderRadius: '0.25rem', border: '1px solid silver'
                                }}>
                                    <Col md="4" style={{ marginRight: "5px" }} className="w_100">
                                        <img
                                            style={{ borderRadius: "0.45rem" }}
                                            width="100%"
                                            height="calc(100% * var(--hex-parent-width))"
                                            className="mr-3 "
                                            src={director} />
                                    </Col>
                                    <Col md="8" className="text-post1 w_100" id="col_for_ruk">
                                        <Card.Body className="dir" id="face_ruk">
                                            <h5>Истомин Евгений Петрович</h5>
                                            <p className="text-post1 ">Ответственный за программу</p>
                                        </Card.Body>
                                    </Col>
                                </Card>
                            </Row>
                            <Row className="marg_null">
                                <Card id="num_mail" style={{
                                    padding: '15px', margin: '10px 0px',
                                    backgroundColor: 'rgb(248, 249, 250)', borderColor: 'rgb(248, 249, 250)',
                                    borderRadius: '0.25rem', border: '1px solid silver'
                                }}>
                                    <Card.Body className="pad_null">
                                        <ul className="footerUl text-wrap pad_null">
                                            <li class="li-align">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16" >
                                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                                                </svg>
                                                <span class="li-text">+7-812-633-01-86</span>
                                            </li>
                                            <li class="li-align">
                                                <img
                                                    src={mail}
                                                    id="mail1"
                                                    width="25"
                                                    style={{
                                                        backgroundColor: "#000"
                                                    }}
                                                    className="d-inline-block align-top" />
                                                <span class="li-text">dekanat_is@rshu.ru</span>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row className="marg_null">
                                <Container className="pad_null">
                                    <hr />
                                    <Accordion style={{ marginBottom: '30px' }}>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header><div class="acc_header">Получаемые профессии</div></Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li>ппрр
                                                    </li>
                                                    <li >ааппп
                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Accordion style={{ marginBottom: '30px' }}>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header><div class="acc_header">Список изучаемых предметов</div></Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li>ппрр
                                                    </li>
                                                    <li >ааппп
                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Container>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </>
        )
    }
}
