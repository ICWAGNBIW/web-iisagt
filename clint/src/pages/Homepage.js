import React, { Component } from 'react';
import { Container, Card} from 'react-bootstrap';
import { Carousel } from 'react-bootstrap/Carousel';
import CarouselBox from '../components/Carousel';
import img1 from '../components/data/k1.jpg';
import img2 from '../components/data/k4.jpg';
import img3 from '../components/data/k2.jpg';
import img4 from '../components/data/k3.jpg';
export default class Home extends Component{
    render() {
        return (
            <>
            <CarouselBox />
                <div className="row mt-5 mx-5" id="body_after_slider">
                    <div className="col-2" style={{ textAlign: 'start'}}>
                        <h4>Темы:</h4>
                        <button type="button" className="btn btn-primary mt-2">Поступающим</button>
                        <button type="button" className="btn btn-secondary mt-2">Образование</button>
                        <button type="button" className="btn btn-success mt-2">Наука</button>
                        <button type="button" className="btn btn-warning mt-2" id="B">Университетская жизнь</button>
                        <button type="button" className="btn btn-danger mt-2">Общество</button>
                        <button type="button" className="btn btn-dark mt-2">Мероприятия</button>
                        <button type="button" className="btn btn-light mt-2" style={{ background: '#c5c8ca' }}>Олимпиады</button>
                        <button type="button" className="btn btn-info mt-2">Спорт</button>
                    </div>

                    <Container className="col-9" id="row-cont1">
                        <Container className="row cards-cont1">
                            <Card className="col-3 card1">
                                <Card.Img variant="top"
                                    src={ img1}/>
                                    <Card.Body>
                                    <Card.Title>Выпуск ПИ-Б20-2!!</Card.Title>
                                    <Card.Text>Все ребята молодцы!! Все окончили университет с красными
                                    дипломами)))</Card.Text>
                                    <button type="button" className="btn btn-info">Спорт</button>
                                    <button type="button" className="btn btn-primary">Поступающим</button>
                                        </Card.Body>
                            </Card>
                            <Card className="col-3 card1">
                                <Card.Img variant="top"
                                    src={img2} />
                                <Card.Body>
                                    <Card.Title>Выпуск ПИ-Б20-2!!</Card.Title>
                                    <Card.Text>Все ребята молодцы!! Все окончили университет с красными
                                    дипломами)))</Card.Text>
                                    <button type="button" className="btn btn-warning mt-2" id="B">Университетская жизнь</button>
                                </Card.Body>
                            </Card>
                        <Card className="col-3 card1">
                                <Card.Img variant="top"
                                    src={img3} />
                                <Card.Body>
                                    <Card.Title>Выпуск ПИ-Б20-2!!</Card.Title>
                                    <Card.Text>Все ребята молодцы!! Все окончили университет с красными
                                    дипломами)))</Card.Text>
                                    <button type="button" className="btn btn-danger mt-2">Общество</button>
                                    <button type="button" className="btn btn-success mt-2">Наука</button>
                                </Card.Body>
                        </Card>
                        <Card className="col-3 card1">
                                <Card.Img variant="top"
                                    src={img4} />
                            <Card.Body>
                                <Card.Title>Выпуск ПИ-Б20-2!!</Card.Title>
                                <Card.Text>Все ребята молодцы!! Все окончили университет с красными
                                    дипломами)))</Card.Text>
                                    <button type="button" className="btn btn-secondary mt-2">Образование</button>
                                    <button type="button" className="btn btn-light mt-2" style={{ background: '#c5c8ca' }}>Олимпиады</button>
                            </Card.Body>
                                </Card>
                            <Card className="col-3 card1">
                                <Card.Img variant="top"
                                    src={img1} />
                                <Card.Body>
                                    <Card.Title>Выпуск ПИ-Б20-2!!</Card.Title>
                                    <Card.Text>Все ребята молодцы!! Все окончили университет с красными
                                    дипломами)))</Card.Text>
                                    <button type="button" className="btn btn-dark mt-2">Мероприятия</button>
                                    <button type="button" className="btn btn-primary">Поступающим</button>
                                </Card.Body>
                            </Card>
                            <Card className="col-3 card1">
                                <Card.Img variant="top"
                                    src={img2} />
                                <Card.Body>
                                    <Card.Title>Выпуск ПИ-Б20-2!!</Card.Title>
                                    <Card.Text>Все ребята молодцы!! Все окончили университет с красными
                                    дипломами)))</Card.Text>
                                    <button type="button" className="btn btn-secondary mt-2">Образование</button>
                                    <button type="button" className="btn btn-success mt-2">Наука</button>
                                </Card.Body>
                            </Card>
                            <Card className="col-3 card1">
                                <Card.Img variant="top"
                                    src={img3} />
                                <Card.Body>
                                    <Card.Title>Выпуск ПИ-Б20-2!!</Card.Title>
                                    <Card.Text>Все ребята молодцы!! Все окончили университет с красными
                                    дипломами)))</Card.Text>
                                    <button type="button" className="btn btn-warning mt-2" id="B">Университетская жизнь</button>
                                    <button type="button" className="btn btn-dark mt-2">Мероприятия</button>
                                </Card.Body>
                            </Card>
                            <Card className="col-3 card1">
                                <Card.Img variant="top"
                                    src={img4} />
                                <Card.Body>
                                    <Card.Title>Выпуск ПИ-Б20-2!!</Card.Title>
                                    <Card.Text>Все ребята молодцы!! Все окончили университет с красными
                                    дипломами)))</Card.Text>
                                    <button type="button" className="btn btn-danger mt-2">Общество</button>
                                    <button type="button" className="btn btn-info mt-2">Спорт</button>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Container>                   
                    </div> 

            </>
            )
    }
}