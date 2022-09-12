import React, { Component } from 'react';
import { Container, Card, Row } from 'react-bootstrap';
import {getEvents} from '../http/eventsAPI';
import {useContext, useEffect, useState} from 'react';
import {Context} from '../index';
import img1 from '../components/data/k1.jpg';
import img2 from '../components/data/k4.jpg';
import img3 from '../components/data/k2.jpg';
import Calendar from '../components/Calendar';
function Events () {
    //const {user} = useContext(Context);
    //console.log(user);
    const [data, setData] = useState([]);

    const getData = async () => {
    const events = await getEvents();
    let eventCards = [];
    for (let e in events) {
        console.log(events[e]);
        let event_photo = "http://localhost:5000/" + events[e].photo;
        let event = <EventCard title={events[e].nameEvent} desc={events[e].description} aud={events[e].auditorium} photo={event_photo}/>
        eventCards.push(event);
    } 
    setData(eventCards);}

    useEffect(() => {
        getData();
    }, [])

   // useEffect(() => {
        for (let d in data) {

        }
        //console.log(data);
    //}, [data])

    const EventCard = (props) => {

        return (
          <Card className="col-4 card2">
                                <Card.Img variant="top"
                                    src={props.photo} />
                                <Card.Body>
                                    <Card.Title>{props.title}</Card.Title>
                                    <Card.Text>{props.desc}</Card.Text>
                                    <button type="button" class="btn btn-primary mt-2">{props.aud}</button>
                                    <button type="button" class="btn btn-warning mt-2" id="B">Университетская жизнь</button>
                                    <button type="button" class="btn btn-secondary mt-2">Образование</button>
                                    <button type="button" class="btn btn-info mt-2">Спорт</button>
                                    <p class="data_time">20:00 <br/> 10.05.2022</p>
                                    
                                </Card.Body>
                                <div class="card-footer d-grid gap-2 d-flex justify-content-center">
                                    <button class="calendar__button calendar__button--primary event-btn">
                                        Записаться</button>
                                </div>
                            </Card>  
        )
    }
    
        return (
            <>
                
                <div className="row mt-5 mx-5" id="body_events">
                    <div className="col-2" style={{ textAlign: 'start', padding: '0px', paddingLeft: '0.74em' }}>
                        <h4 class="mb-3">Выберите аудиторию:</h4>
                        <button class="btn btn-primary mt-1 tags_but">
                            110а</button>
                        <button class="btn btn-primary mt-1 tags_but">
                            104</button>
                        <button class="btn btn-primary mt-1 tags_but">
                            108</button>
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
                        <h4 className="my-3">Создать мероприятие:</h4>
                        <div className="d-flex justify-content-center">
                            <button id="btn_create" class="btn-success btn event-btn" data-bs-toggle="modal" data-bs-target="#writeEvent">
                                Создать</button>
                        </div>
                        <Row id="calendarRow">
                            <Calendar />
                        </Row>
                    </div>

                    <Container className="col-10 " id="row-cont2">
                        <Container className="row cards-cont1" style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Card className="col-4 card2 card-height">
                                <Card.Img variant="top"
                                    src={img1} />
                                <Card.Body className="for_table_btn_bottom">
                                    <Card.Title>Совместный кампус РГГМУ и Политеха начнет обучение студентов осенью 2022 года</Card.Title>
                                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque hic necessitatibus similique ex adipisci inventore ullam laudantium, error dignissimos at minus et aspernatur impedit. Repudiandae dolore vero tenetur soluta excepturi ea pariatur neque, dolorem accusantium dolorum, ab ducimus dolores voluptatem cum ex cumque laboriosam odio explicabo! Repellat vitae quos in.</Card.Text>
                                    <div className="btn_bottom">
                                        <button type="button" class="btn btn-primary mt-2 tags_but">110a</button>
                                        <button type="button" class="btn btn-warning mt-2 tags_but" id="B">Университетская жизнь</button>
                                        <button type="button" class="btn btn-secondary mt-2 tags_but">Образование</button>
                                        <button type="button" class="btn btn-info mt-2 tags_but">Спорт</button>
                                        <p class="data_time">20:00 <br /> 10.05.2022</p>
                                    </div>
                                </Card.Body>
                                <div class="card-footer d-grid gap-2 d-flex justify-content-center">
                                    <button class="calendar__button calendar__button--primary event-btn ">
                                        Записаться</button>
                                </div>
                            </Card>
                            <Card className="col-4 card2 card-height">
                                <Card.Img variant="top"
                                    src={img2} />
                                <Card.Body className="for_table_btn_bottom">
                                    <Card.Title>Совместный кампус РГГМУ и Политеха начнет обучение
                                        студентов осенью 2022 года</Card.Title>
                                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Neque hic necessitatibus similique ex adipisci inventore ullam laudantium, error
                                        dignissimos at minus et aspernatur impedit. Repudiandae dolore vero tenetur soluta
                                        excepturi ea pariatur neque, dolorem accusantium dolorum, ab ducimus dolores voluptatem
                                        cum ex cumque laboriosam odio explicabo! Repellat vitae quos in.</Card.Text>
                                    <div className="btn_bottom">
                                        <button type="button" class="btn btn-primary mt-2 tags_but">110a</button>
                                        <button type="button" class="btn btn-success mt-2 tags_but">Наука</button>
                                        <button type="button" class="btn btn-warning mt-2 tags_but" id="B">Университетская жизнь</button>
                                        <button type="button" class="btn btn-danger mt-2 tags_but">Общество</button>
                                        <p class="data_time">20:00 <br /> 10.05.2022</p>
                                    </div>
                                </Card.Body>
                                <div class="card-footer d-grid gap-2 d-flex justify-content-center">
                                    <button class="calendar__button calendar__button--primary event-btn">
                                        Записаться</button>
                                </div>
                            </Card>
                            <Card className="col-4 card2 card-height">
                                <Card.Img variant="top"
                                    src={img3} />
                                <Card.Body className="for_table_btn_bottom">
                                    <Card.Title>Совместный кампус РГГМУ и Политеха начнет обучение
                                        студентов осенью 2022 года</Card.Title>
                                    <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi sit nam
                                        molestias harum unde magnam praesentium itaque non sequi dignissimos ipsum quo similique, nisi sint ipsa
                                        laboriosam distinctio porro beatae, veritatis quam. Architecto quo recusandae consequatur. Harum
                                        mollitia saepe quia facilis sunt inventore aut accusantium sequi, excepturi sapiente nemo laudantium
                                        quae vitae et impedit alias dolore quod omnis, nisi odit rem ea doloribus. Id quo suscipit molestias
                                        odit eum. Numquam vel, non architecto nisi placeat doloremque, dignissimos officia tempore natus tempora
                                        molestiae cum rerum quidem expedita nemo tenetur ipsa ratione quaerat! Dolor, id magnam eligendi
                                        molestiae harum illo ea?</Card.Text>
                                    <div className="btn_bottom">
                                        <button type="button" class="btn btn-primary mt-2 tags_but">110a</button>
                                        <button type="button" class="btn btn-dark mt-2 tags_but">Мероприятия</button>
                                        <button type="button" class="btn btn-light mt-2 tags_but" style={{ background: '#c5c8ca' }}>Олимпиады</button>
                                        <button type="button" class="btn btn-info mt-2 tags_but">Спорт</button>
                                        <p class="data_time">20:00 <br /> 10.05.2022</p>
                                    </div>
                                </Card.Body>
                                <div class="card-footer d-grid gap-2 d-flex justify-content-center">
                                    <button class="calendar__button calendar__button--primary event-btn">
                                        Записаться</button>
                                </div>
                            </Card>
                        </Container>
                    </Container>
                </div>

            </>
        )
}

export default Events