import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import universityImg from '../components/data/university.png';
import deskImg from '../components/data/desk.png';
export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block"
                        width="100%"
                        display="none"
                        src={ universityImg }

                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        width="100%"
                        display="none"
                        src={ deskImg }

                    />
                </Carousel.Item>
            </Carousel>
            )
    }
}