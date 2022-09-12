import React, { Component } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Isigt from '../components/data/1.png';
export default class Prik_Inf extends Component {
    render() {
        return (
            <>
                <Row className="mx-5 mt-5" style={{ justifyContent: 'unset' }} id="body_for_pr_inf">
                    <Col className="col-3 width_for_pr_inf">
                        <h4 className="mb-3">Кафедры</h4>
                        <Card>
                            <div className="card-header feat">
                                <a href="/prik_inf" className="links_for_panel">
                                    Прикладной информатики
                                </a>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item list" >Высшей математики и теоретической механики</li>
                                <li className="list-group-item list">Информационных технологий и систем безопасности</li>
                                <li className="list-group-item list">Морских информационных систем</li>
                                <li className="list-group-item list">Физики</li>
                            </ul>
                        </Card>
                    </Col>
                    <Col className="col-8 ms-5 width_for_pr_inf">
                        <Container>
                            <h4>Кафедра прикладной информатики</h4>
                            <hr />
                            <p className="text-post1 ">Кафедра прикладной информатики создана с целью подготовки обучающихся lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas minus odio pariatur,
                                deleniti quam eveniet architecto nisi quo a quod soluta provident dolorem eius ab eos ad error minima corrupti esse aliquam
                                modi voluptatum. Molestias, fugit eum modi, doloremque cumque architecto delectus, nemo sapiente aliquid totam voluptatem laborum
                                inventore veniam itaque enim consequuntur non repudiandae. Eaque quia nemo, nihil praesentium amet aperiam ab, debitis magni exercitationem quos
                                saepe ullam explicabo eveniet sed sapiente facilis vero corrupti suscipit optio dolore sit animi, odio quod! Explicabo nobis perferendis tempore temporibus repudiandae,
                                suscipit aut sit illo, adipisci, perspiciatis molestiae saepe reiciendis cum quo.</p>
                            <hr />
                        </Container>
                        <Container style={{ padding: "0px" }}> <Card className="card3" style={{ margin: "10px 0px", padding: "0px" }}>
                            <Col className="col-md-5 mb-md-0 p-md-4 logo_for_media_pr"><img src={Isigt} style={{ width: "80%" }} /> </Col>
                            <Col className="text-post1 col-md-7 p-4 ps-md-0" id="text_pr_inf">
                                <Card.Body className="dir">
                                    <h5>Заведующий кафедрой - Истомин Е.П.</h5>
                                    <p className="text-post1 ">Профессор, доктор технических наук. Направления работы: применение ЭВМ и автоматизация управления силами флота;
                                        Государственное муниципальное управление Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                        metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                        condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                </Card.Body>
                            </Col>
                        </Card>
                            <hr />
                        </Container>
                        <Container className="col-9" style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Row className="cards-cont1">
                                <Card className="col-3 card1 bg-light card-height">
                                    <Card.Img variant="top"
                                        alt="Photo" />
                                    <Card.Body>
                                        <Card.Title>Колбина Ольга Николаевна</Card.Title>
                                        <Card.Text>Доцент</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="col-3 card1 bg-light card-height">
                                    <Card.Img variant="top"
                                        alt="Photo" />
                                    <Card.Body>
                                        <Card.Title>Мартын Ирма Андреевна</Card.Title>
                                        <Card.Text>ассистент</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="col-3 card1 bg-light card-height">
                                    <Card.Img variant="top"
                                        alt="Photo" />
                                    <Card.Body>
                                        <Card.Title>Петров Ярослав Андреевич</Card.Title>
                                        <Card.Text>доцент</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="col-3 card1 bg-light card-height">
                                    <Card.Img variant="top"
                                        alt="Photo" />
                                    <Card.Body>
                                        <Card.Title>Сидоренко Артем Юсупович</Card.Title>
                                        <Card.Text>Старший преподаватель</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="col-3 card1 bg-light card-height">
                                    <Card.Img variant="top"
                                        alt="Photo" />
                                    <Card.Body>
                                        <Card.Title>Яготинцева Наталья Владимировна</Card.Title>
                                        <Card.Text>Доцент</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="col-3 card1 bg-light card-height">
                                    <Card.Img variant="top"
                                        alt="Photo" />
                                    <Card.Body>
                                        <Card.Title>Попов Николай Николаевич</Card.Title>
                                        <Card.Text>Доцент</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="col-3 card1 bg-light card-height">
                                    <Card.Img variant="top"
                                        alt="Photo" />
                                    <Card.Body>
                                        <Card.Title>Степанов Сергей Юрьевич</Card.Title>
                                        <Card.Text>Доцент</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="col-3 card1 bg-light card-height">
                                    <Card.Img variant="top"
                                        alt="Photo" />
                                    <Card.Body>
                                        <Card.Title>Сафонова Татьяна Владимировна</Card.Title>
                                        <Card.Text>Старший преподаватель</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="col-3 card1 bg-light card-height">
                                    <Card.Img variant="top"
                                        alt="Photo" />
                                    <Card.Body>
                                        <Card.Title>Шилин Михаил Борисович</Card.Title>
                                        <Card.Text>Профессор</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="col-3 card1 bg-light card-height">
                                    <Card.Img variant="top"
                                        alt="Photo" />
                                    <Card.Body>
                                        <Card.Title>Нигматулин Тагир Асядулович</Card.Title>
                                        <Card.Text>Доцент</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="col-3 card1 bg-light card-height">
                                    <Card.Img variant="top"
                                        alt="Photo" />
                                    <Card.Body>
                                        <Card.Title>Новожилова Елена Сергеевна</Card.Title>
                                        <Card.Text>Ассистент</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="col-3 card1 bg-light card-height">
                                    <Card.Img variant="top"
                                        alt="Photo" />
                                    <Card.Body>
                                        <Card.Title>Сапронова Ирина Владимировна</Card.Title>
                                        <Card.Text>Старший преподаватель</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Container>
                        <hr />
                        <Container>
                            <h5>Направления подготовки</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item list"> <a href="/napr" className="links_for_panel">09.03.03	Прикладная информатика	Прикладные информационные системы и технологии</a></li>
                                <li class="list-group-item list">38.03.05	Бизнес-информатика	Бизнес-аналитика</li>
                            </ul>
                        </Container>
                        <hr />

                    </Col>

                </Row>

            </>
        )
    }
}