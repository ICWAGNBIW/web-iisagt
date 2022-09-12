import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap';
import classnames from 'classnames';
import ".//Layout.css";
import "../index.css";
const DAYS_IN_WEEK = 7;

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5];

const Month = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    Novermber: 10,
    December: 11
};

function areEqual(a, b) {
    if (!a || !b) return false;

    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

export function isLeapYear(year) {
    return !((year % 4) || (!(year % 100) && (year % 400)));
}

function getDaysInMonth(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = DAYS_IN_MONTH[month];

    if (isLeapYear(year) && month === Month.February) {
        return daysInMonth + 1;
    } else {
        return daysInMonth;
    }
}

function getDayOfWeek(date) {
    const dayOfWeek = date.getDay();

    return WEEK_DAYS_FROM_MONDAY[dayOfWeek];
}

function getMonthData(year, month) {
    const result = [];
    const date = new Date(year, month);
    const daysInMonth = getDaysInMonth(date);
    const monthStartsOn = getDayOfWeek(date);
    let day = 1;

    for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
        result[i] = [];

        for (let j = 0; j < DAYS_IN_WEEK; j++) {
            if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
                result[i][j] = undefined;
            } else {
                result[i][j] = new Date(year, month, day++);
            }
        }
    }

    return result;
}
export default class Calendar extends Component {

    static defaultProps = {
        date: new Date(),
        years: [2020, 2021, 2022, 2023, 2024],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        onChange: Function.prototype
    };
    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectDate: null
    };
    get year() {
        return this.state.date.getFullYear();
    }
    get month() {
        return this.state.date.getMonth();
    }
    get day() {
        return this.state.date.getDate();
    }
    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1)
        this.setState({ date });
    };

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1)
        this.setState({ date });
    };
    handleSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;
        const date = new Date(year, month);
        this.setState({ date });
    };
    handleDayClick = date => {
        this.setState({ selectedDate: date });
        this.props.onChange(date);
    };
    render() {
        const { years, monthNames, weekDayNames } = this.props;
        const { currentDate, selectedDate } = this.state;
        const monthData = getMonthData(this.year, this.month);

        return (
            <Container className="calendar" id="header_calendar">
                <Container id="cc">
                    <button className="btn btn-primary tags_but" onClick={this.handlePrevMonthButtonClick}>{'<'}</button>
                    <select
                        className="but_header_calendar"
                        ref={element => this.monthSelect = element}
                        value={this.month}
                        onChange={this.handleSelectChange}>
                        {monthNames.map((name, index) =>
                            <option key={name} value={index}>{name}</option>)}
                    </select>
                    <select className="but_header_calendar"
                        ref={element => this.yearSelect = element}
                        value={this.year}
                        onChange={this.handleSelectChange}>{years.map(year =>
                            <option key={year} value={year}>{year}</option>
                        )}
                    </select>
                    <button className="btn btn-primary tags_but" onClick={this.handleNextMonthButtonClick}>{'>'}</button>
                </Container >
                <table id="table_Calendar">
                    <thead>
                        <tr>
                            {weekDayNames.map(name =>
                                <th key={name}>{name}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {monthData.map((week, index) =>
                            <tr key={index} className="week">
                                {week.map((date, index) => date ?
                                    <td
                                        onClick={() => this.handleDayClick(date)}
                                        className={classnames('day', {
                                            'today': areEqual(date, currentDate),
                                            'selected': areEqual(date, selectedDate)
                                        })}
                                        key={index}>
                                        {date.getDate()}</td> : <td key={index} />)}
                            </tr>
                        )}
                    </tbody>
                </table>
            </Container>
        );
    }
}