import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: 'Jainil',
            lastName: 'Patel',
            numHours: '0',
            date: '2022-01-01',
            time: '00:00'
        }
    }

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleHoursChange = event => {
        this.setState({
            numHours: event.target.value
        })
    }

    handleDateChange = event => {
        this.setState({
            date: event.target.value
        })
    }

    handleTimeChange = event => {
        this.setState({
            time: event.target.value
        })
    }

    handleSubmit = event => {
        let day = new Date(this.state.date).getDay()
        let total = 0;

        day >= 5 ? (total = 150 * this.state.numHours) : (total = 100 * this.state.numHours)

        document.getElementById("output").innerHTML = "Booking for ".concat(this.state.firstName).concat(" ").concat(this.state.lastName).concat(" confirmed for ").concat(this.state.date).concat(" at ").concat(this.state.time).concat(" for: $").concat(total)

        event.preventDefault()
    }

    render() {
        let { firstName, lastName, numHours, date, time } = this.state
        return (
            <div>
                <h1>Booking Sytstem</h1>

                <form onSubmit={this.handleSubmit}>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>First Name:</label>
                            <input type="text" class="form-control" value={firstName} onChange={this.handleFirstNameChange} />
                        </div>
                        <div class="form-group col-md-6">
                            <label>Last Name:</label>
                            <input type="text" class="form-control" value={lastName} onChange={this.handleLastNameChange} />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label>Number of Hours:</label>
                            <input type="number" class="form-control" value={numHours} onChange={this.handleHoursChange} step="0.5" min="0" required />
                            <span class="validity"></span>
                        </div>
                        <div class="form-group col-md-4">
                            <label>Date:</label>
                            <input type="date" class="form-control" value={date} onChange={this.handleDateChange} requried />
                        </div>
                        <div class="form-group col-md-4">
                            <label>Time:</label>
                            <input type="time" class="form-control" value={time} onChange={this.handleTimeChange} requried />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <p id="output"></p>
            </div>

        )
    }
}

export default Form