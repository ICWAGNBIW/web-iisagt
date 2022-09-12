import React, { Component } from 'react'
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap'
import { Outlet } from 'react-router-dom';
import ".//Layout.css";
import logo1 from './/data/лого_исигт.png'
import logo from './/data/лого_рггму.png'
import Dropdown from 'react-bootstrap';
export default class Header extends Component {
    state = {
        isOpen1: false,
        isOpen2: false,
        isOpen3: false,
        isOpen4: false
    };
    toggleOpen1 = () => setTimeout(() => { this.setState({ isOpen1: !this.state.isOpen1, isOpen2: false, isOpen3: false, isOpen4: false }); }, 150);
    toggleOpen2 = () => setTimeout(() => { this.setState({ isOpen2: !this.state.isOpen2, isOpen1: false, isOpen3: false, isOpen4: false }); }, 150);
    toggleOpen3 = () => setTimeout(() => { this.setState({ isOpen3: !this.state.isOpen3, isOpen1: false, isOpen2: false, isOpen4: false }); }, 150);
    toggleOpen4 = () => setTimeout(() => { this.setState({ isOpen4: !this.state.isOpen4, isOpen1: false, isOpen2: false, isOpen3: false }); }, 150);
    Blur1 = () => setTimeout(() => { this.setState({ isOpen1: false, isOpen2: false, isOpen3: false, isOpen4: false }); }, 150);

    render() {
        const menuClass1 = `dropdown-menu${this.state.isOpen1 ? " show" : ""}`;
        const menuClass2 = `dropdown-menu${this.state.isOpen2 ? " show" : ""}`;
        const menuClass3 = `dropdown-menu${this.state.isOpen3 ? " show" : ""}`;
        const menuClass4 = `dropdown-menu${this.state.isOpen4 ? " show" : ""}`;
        return (
            <>
                <Navbar className=" navbar navbar-expand-lg navbar-dark bg-dark sticky-top" id="Navbar" fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container id="menu">
                        <Navbar.Brand href="https://www.rshu.ru/" target="_blank" className="navbar-brand">
                            <img
                                src={logo}
                                id="App-logo"
                                width="70"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <div class="vr bg-white"></div>
                        <Navbar.Brand className="navbar-brand ms-3" href="/">
                            <img
                                src={logo1}
                                id="App-logo"
                                width="70"
                                className="d-inline-block align-top"
                                alt="Logo1"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="responsive-navbar-nav" aria-expanded="false" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="navbar-nav me-auto mr-auto">

                                <ul className="nav" style={{ display: 'flex', flexWrap: 'nowrap' }}>
                                    <li><a className="nav-link nav-item me-2 text_header" href="/">Главная страница</a></li>

                                    <div className="dropdown" onClick={this.toggleOpen1} onBlur={this.Blur1}>
                                        <a href="#nogo"
                                            className="nav-link text-wrap dropdown-toggle show text_header"
                                            type="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                        >
                                            Дирекция</a>
                                        <div className={menuClass1} id="id1" /*aria-labelledby="dropdownMenuButton"*/ onClick={this.toggleOpen1} >
                                            <a className="dropdown-item" href="/dir#director">
                                                Директор</a>
                                            <a className="dropdown-item" href="/dir#zav_inst">
                                                Заместитель директора</a>
                                            <a className="dropdown-item" href="/dir#umr">
                                                Учебно-методические работники</a>
                                            <a className="dropdown-item" href="/dir#pro_inst">
                                                Чем занимается институт</a>
                                            <a className="dropdown-item" href="/dir#napr">
                                                Все направления подготовки</a>
                                        </div>
                                    </div>
                                    <div className="dropdown" onClick={this.toggleOpen2} onBlur={this.Blur1}>
                                        <a href="#nogo"
                                            className="nav-link text-wrap dropdown-toggle show text_header"
                                            type="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                        >Студенческое научное общество</a>
                                        <div className={menuClass2} id="id2" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="/events">
                                                Мероприятия</a>
                                            <a className="dropdown-item" href="#nogo">
                                                Олимпиады</a>
                                            <a className="dropdown-item" href="#nogo">
                                                Научная работа</a>
                                            <a className="dropdown-item" href="#nogo">
                                                Клубы по интересам</a>
                                        </div>
                                    </div>
                                    <div className="dropdown" onClick={this.toggleOpen3} onBlur={this.Blur1}>
                                        <a href="#nogo"
                                            className="nav-link text-wrap dropdown-toggle show text_header"
                                            type="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                        >НУЛЦ</a>
                                        <div className={menuClass3} id="id3" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#nogo">
                                                Лаборатории</a>
                                            <a className="dropdown-item" href="#nogo">
                                                Заведующий</a>
                                            <a className="dropdown-item" href="#nogo">
                                                Чем занимаемся</a>
                                        </div>
                                    </div>
                                    <div className="dropdown" onClick={this.toggleOpen4} onBlur={this.Blur1}>
                                        <a href="#nogo"
                                            className="nav-link text-wrap dropdown-toggle show text_header"
                                            type="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                        >Кафедры</a>
                                        <div className={menuClass4} id="id4" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#nogo">
                                                Высшей математики и теоретической механики</a>
                                            <a className="dropdown-item" href="#nogo">
                                                Информационных технологий и систем безопасности</a>
                                            <a className="dropdown-item" href="#nogo">
                                                Морских информационных систем</a>
                                            <a className="dropdown-item" href="/prik_inf">
                                                Прикладной информатики</a>
                                            <a className="dropdown-item" href="#nogo">
                                                Физики</a>
                                        </div>
                                    </div>
                                </ul>
                            </Nav>
                            <Form inline className="d-flex">
                                <Button className="me-2 btn-outline-success " data-bs-toggle="modal" data-bs-target="#exampleModal" variant="outline-success">Войти</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}