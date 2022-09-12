import React, { Component } from 'react';
import { Container, Card, Col } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap/Carousel';
import CarouselBox from '../components/Carousel';
import img1 from '../components/data/k1.jpg';
import img2 from '../components/data/k4.jpg';
import img3 from '../components/data/k2.jpg';
import img4 from '../components/data/k3.jpg';
export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <div className="row mt-5 mx-5" id="body_after_slider">
                    <Col className="col-2 width_for_pr_inf">
                        <h4 className="mb-3" style={{ textAlign: 'start' }}>Темы:</h4>
                        <Card className="panel1">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item card feat tags_li list" id="tag1">Поступающим</li>
                                <li className="list-group-item card feat tags_li list" id="tag2">Образование</li>
                                <li className="list-group-item card feat tags_li list" id="tag3">Наука</li>
                                <li className="list-group-item card feat tags_li list" id="tag4">Университетская жизнь</li>
                                <li className="list-group-item card feat tags_li list" id="tag5">Общество</li>
                                <li className="list-group-item card feat tags_li list" id="tag6">Мероприятия</li>
                                <li className="list-group-item card feat tags_li list" id="tag7">Олимпиады</li>
                                <li className="list-group-item card feat tags_li list" id="tag8">Спорт</li>
                            </ul>
                        </Card>
                    </Col>

                    <Container className="col-9" id="row-cont1">
                        <Container className="row cards-cont1 " style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Card className="col-3 card1 card-height">
                                <Card.Img variant="top"
                                    src={img1} />
                                <Card.Body className="for_table_btn_bottom">
                                    <Card.Title>Выпуск ПИ-Б20-2!!</Card.Title>
                                    <Card.Text>Все ребята молодцы!! Все окончили университет с красными
                                        дипломами)))</Card.Text>
                                    <div className="btn_bottom"><button type="button" className="btn btn-info mt-2 tags_but">Спорт</button>
                                        <button type="button" className="btn btn-primary mt-2 tags_but">Поступающим</button></div>
                                </Card.Body>
                            </Card>
                            <Card className="col-3 card1 card-height">
                                <Card.Img variant="top"
                                    src={img2} />
                                <Card.Body className="for_table_btn_bottom">
                                    <Card.Title>Выпуск ПИ-Б20-2!!</Card.Title>
                                    <Card.Text>Все ребята молодцы!! Все окончили университет с красными
                                        дипломами)))</Card.Text>
                                    <div className="btn_bottom">
                                        <button type="button" className="btn btn-warning mt-2 tags_but">Университетская жизнь</button>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="col-3 card1 card-height">
                                <Card.Img variant="top"
                                    src={img3} />
                                <Card.Body className="for_table_btn_bottom">
                                    <Card.Title>Выпуск ПИ-Б20-2!!</Card.Title>
                                    <Card.Text>Все ребята молодцы!! Все окончили университет с красными
                                        дипломами)))</Card.Text>
                                    <div className="btn_bottom">
                                        <button type="button" className="btn btn-danger mt-2 tags_but">Общество</button>
                                        <button type="button" className="btn btn-success mt-2 tags_but">Наука</button>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="col-3 card1 card-height">
                                <Card.Img variant="top"
                                    src={img4} />
                                <Card.Body className="for_table_btn_bottom">
                                    <Card.Title>Выпуск ПИ-Б20-2!!</Card.Title>
                                    <Card.Text>Все ребята молодцы!! Все окончили университет с красными
                                        дипломами)))</Card.Text>
                                    <div className="btn_bottom">
                                        <button type="button" className="btn btn-secondary mt-2 tags_but">Образование</button>
                                        <button type="button" className="btn btn-light mt-2 tags_but" style={{ background: '#c5c8ca' }}>Олимпиады</button>
                                    </div>
                                </Card.Body>

                            </Card>
                            <Card className="col-3 card1 card-height">
                                <Card.Img variant="top"
                                    src={img1} />
                                <Card.Body className="for_table_btn_bottom">
                                    <Card.Title>Выпуск ПИ-Б20-2!!</Card.Title>
                                    <Card.Text>Все ребята молодцы!! Все окончили университет с красными
                                        дипломами)))</Card.Text>
                                    <div className="btn_bottom">
                                        <button type="button" className="btn btn-dark mt-2 tags_but">Мероприятия</button>
                                        <button type="button" className="btn btn-primary mt-2 tags_but">Поступающим</button>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="col-3 card1 card-height">
                                <Card.Img variant="top"
                                    src={img2} />
                                <Card.Body className="for_table_btn_bottom">
                                    <Card.Title>Выпуск ПИ-Б20-2!!</Card.Title>
                                    <Card.Text>Все ребята молодцы!! Все окончили университет с красными
                                        дипломами)))</Card.Text>
                                    <div className="btn_bottom">
                                        <button type="button" className="btn btn-secondary mt-2 tags_but">Образование</button>
                                        <button type="button" className="btn btn-success mt-2 tags_but">Наука</button>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="col-3 card1 card-height">
                                <Card.Img variant="top"
                                    src={img3} />
                                <Card.Body className="for_table_btn_bottom">
                                    <Card.Title>Выпуск ПИ-Б20-2!!</Card.Title>
                                    <Card.Text>Все ребята молодцы!! Все окончили университет с красными
                                        дипломами)))</Card.Text>
                                    <div className="for_table_btn_bottom">
                                        <button type="button" className="btn btn-warning mt-2 tags_but">Университетская жизнь</button>
                                        <button type="button" className="btn btn-dark mt-2 tags_but">Мероприятия</button>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="col-3 card1 card-height">
                                <Card.Img variant="top"
                                    src={img4} />
                                <Card.Body className="for_table_btn_bottom">
                                    <Card.Title>Выпуск ПИ-Б20-2!!</Card.Title>
                                    <Card.Text>Все ребята молодцы!! Все окончили университет с красными
                                        дипломами)))</Card.Text>
                                    <div className="btn_bottom">
                                        <button type="button" className="btn btn-danger mt-2 tags_but">Общество</button>
                                        <button type="button" className="btn btn-info mt-2 tags_but">Спорт</button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Container>
                </div>

            </>
        )
    }
}