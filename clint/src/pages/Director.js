import React, { Component } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import director from '../components/data/director.jpg';
import Accordion from 'react-bootstrap/Accordion';
export default class Director extends Component {
    render() {
        return (
            <>
                <a name="director" style={{ position: "absolute", top: "0" }} />
                <Container>
                    <Container>
                        <Row className="admin">

                            <Card className="card3">
                                <Col md="2">
                                    <img
                                        width="100%"
                                        height="calc(100% * var(--hex-parent-width))"
                                        className="mr-3 "
                                        src={director} />
                                </Col>
                                <Col md="10" className="text-post1">
                                    <Card.Body className="dir">
                                        <h5>Директор института – Истомин Евгений Петрович.</h5>
                                        <p className="text-post1 ">Учёная степень: доктор технических наук</p>

                                        <p className="text-post1 ">Ученое звание: профессор</p>
                                        <p className="text-post1 ">Направления работы: применение ЭВМ и автоматизация управления силами флота</p>
                                        <p className="text-post1 ">Государственное муниципальное управление Cras sit amet nibh libero,
                                            in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                                            Cras purus odio, vestibulum in
                                            vulputate at, tempus viverra turpis.
                                            Fusce condimentum nunc ac nisi vulputate fringilla.
                                            Donec lacinia congue felis in faucibus.</p>
                                    </Card.Body>
                                </Col>
                            </Card>

                        </Row>
                    </Container>
                    <a name="zav_inst" style={{ position: "relative", top: "-96px" }} />
                    <Container>
                        <Row className="admin">
                            <Card className="card3">
                                <Col md="2">
                                    <img
                                        width="100%"
                                        height="calc(100% * var(--hex-parent-width))"
                                        className="mr-3"
                                        alt="Photo" />
                                </Col>
                                <Col md="10" className="text-post1">
                                    <Card.Body className="dir">
                                        <h5>Заместитель директора по УМР: Новожилова Елена Сергеевна</h5>

                                        <p className="text-post1 ">Cras sit amet nibh libero,
                                            in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                                            Cras purus odio, vestibulum in
                                            vulputate at, tempus viverra turpis.
                                            Fusce condimentum nunc ac nisi vulputate fringilla.
                                            Donec lacinia congue felis in faucibus.</p>
                                    </Card.Body>
                                </Col>
                            </Card>

                        </Row>
                    </Container >
                    <Container>
                        <Row className="admin">
                            <Card className="card3">
                                <Col md="2">
                                    <img
                                        width="100%"
                                        height="calc(100% * var(--hex-parent-width))"
                                        className="mr-3"
                                        alt="Photo" />
                                </Col>
                                <Col md="10" className="text-post1">
                                    <Card.Body className="dir">
                                        <h5>Заместитель директора по УВР: Сафонова Татьяна Владимировна</h5>
                                        <p className="text-post1 ">Cras sit amet nibh libero,
                                            in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                                            Cras purus odio, vestibulum in
                                            vulputate at, tempus viverra turpis.
                                            Fusce condimentum nunc ac nisi vulputate fringilla.
                                            Donec lacinia congue felis in faucibus.</p>
                                    </Card.Body>
                                </Col>
                            </Card>

                        </Row>
                    </Container >
                </Container>
                <Container className="col-9" style={{ marginBottom: '30px', height: '100%' }}>
                    <a name="umr" style={{ position: "relative", top: "-96px" }} />
                    <Row className="cards-cont1">
                        <Card className="col-3 card1 card-height">
                            <Card.Img variant="top"
                                alt="Photo" />
                            <Card.Body>
                                <Card.Title>Жильчук Лариса Борисовна</Card.Title>
                                <Card.Text></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="col-3 card1 card-height">
                            <Card.Img variant="top"
                                alt="Photo" />
                            <Card.Body>
                                <Card.Title>Строева Екатерина Владимировна</Card.Title>
                                <Card.Text></Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
                <a name="pro_inst" style={{ position: "relative", top: "-96px" }} />
                <Container>
                    <h5>Чем занимается институт</h5>
                    <hr />
                    <p >Cras sit amet nibh libero,
                        in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                        Cras purus odio, vestibulum in
                        vulputate at, tempus viverra turpis.
                        Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus</p>
                    <hr />
                </Container>
                <Container>
                    <br />
                    <h5>Направления подготовки</h5>
                    <hr />
                    <Accordion style={{ marginBottom: '30px' }}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><div class="acc_header"><div>03.03.02 Физика</div>
                                <div class="forma_time">Очная</div><div class="forma_time">4 года</div></div></Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><div class="acc_header"><div>09.03.03 Прикладная информатика</div>
                                <div class="forma_time">Очная</div><div class="forma_time">4 года</div></div></Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum. <a href="/prik_inf">Подробнее</a>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <div class="acc_header"><div>10.05.02 Информационная безопасность телекоммуникационных систем</div>
                                    <div class="forma_time">Очная</div><div class="forma_time">5 лет 6 месяцев</div></div>                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                <div class="acc_header"><div>17.03.01 Корабельное вооружение</div>
                                    <div class="forma_time">Очная</div><div class="forma_time">4 года</div></div>
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                <div class="acc_header"><div>38.03.05 Бизнес-информатика</div>
                                    <div class="forma_time">Очная</div><div class="forma_time">4 года</div>
                                    <div class="forma_time oz">Очно-заочная</div><div class="forma_time oz">4 года 6 месяцев</div></div>
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
                <a name="napr" style={{ position: "relative", bottom: "0" }} />
            </>
        )
    }
}