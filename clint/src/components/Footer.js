import React, { Component } from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import vk from './/data/logo-vk.svg'
import mail from './/data/logo-mail.png'
import map from './/data/logo-map.svg'
export default class Footer extends Component {
    render() {

        return (
            <>
                <Container fluid style={{
                    backgroundColor: '#212529', position: 'relative',
                    bottom: '0', color: '#fff', paddingLeft: '0px'  }}>
                    <Container id='cont1' style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '0px',
                        marginRight: '3rem!important',
                        marginLeft: '3rem!important'
                    }}>
                        <ul className="footerUl text-wrap">
                            <li>
                                  © 2022 Институт информационных систем и геотехнологий (ИСиГТ) РГГМУ 
                                </li>
                            <a href="https://www.rshu.ru/" class="text-white" target=" _blank">
                                https://www.rshu.ru/
                            </a>
                            <br/>
                            <Navbar.Brand className="navbar-brand" href="https://vk.com/is_rshu" target=" _blank">
                                <img
                                    src={vk}
                                    backgroundColor="#fff"
                                    id="App-logo"
                                    width="40"
                                    className="d-inline-block align-top"/>
                                </Navbar.Brand>
                               
                        </ul>
                        <ul className="footerUl text-wrap">
                            <li >
                                Контакты:
                                </li>
                            <li class="li-align">
                                <Navbar.Brand className="navbar-brand" target=" _blank">
                                    <img
                                        src={mail}
                                        id="mail1"
                                        width="25"
                                        color="#fff"
                                        className="d-inline-block align-top"/>
                                </Navbar.Brand>
                                dekanat_is@rshu.ru
                                </li>
                            <li class="li-align">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16" >
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                                </svg>
                                <span class="li-text">+7-812-633-01-86</span>
                            </li>
                            <li class="li-align">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                                </svg>
                                <span class="li-text">просп. Металлистов, 3, Санкт-Петербург</span>
                            </li>
                        </ul>
                        </Container>
                        </Container>
            </>
        )
    }
}
