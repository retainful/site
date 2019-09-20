import React, { Component } from 'react'
import axios from 'axios'
import endpoints from '../utils/endpoints'
import Popup from './modal'

export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      showModal: false,
      valid: false,
      error: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    this.setState({ loading: true })
    let { name, email, subject, message } = this.state
    let data = { name, email, subject, message }
    
    axios.post(endpoints.supportform, JSON.stringify(data))
    .then(response => {
      this.handleSuccess()
    })
    .catch(error => {
      this.handleError()
    })
    e.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      subject: '',
      showModal: true,
      valid: false,
      alert:'Thank you for reaching out. We will get back to you soon.' 
    }) 
  }

  handleError = msg => { 
    
    this.setState({
      showModal: true,
      alert: 'Sorry, All fields are required',
      valid: false,
      loading: false, 
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  onConfirm = () => {
    this.setState({ valid: true })
  }

  render() {
    let { name, email, subject, message, alert} = this.state
    return (
    <form name="Support Form" onSubmit={this.handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={this.handleInputChange}
        autoComplete = "off"
        required
        />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={this.handleInputChange}
        autoComplete = "off"
        required
        />

      <input
        name="subject"
        type="subject"
        placeholder="Subject"
        value={subject}
        onChange={this.handleInputChange}
        autoComplete = "off"
        required
        />

      <textarea
        name="message"
        type="text"
        placeholder="Message"
        value={message}
        onChange={this.handleInputChange}
        autoComplete = "off"
        required
        />

      <button className="btn-action btn-lg" name="submit" type="submit" value="Send It">
        Send
      </button>
      <Popup visible={this.state.showModal} onClickAway={() => this.closeModal()}>
        <p>
          {alert}
        </p>
      </Popup>
    </form>
    )
  }
}
