import React, { Component } from 'react'
import axios from 'axios'
import endpoints from '../utils/endpoints'
import Popup from '../components/modal'
import Layout from '../components/layout'


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
    axios.post(endpoints.supportform, JSON.stringify(data)).then(response => {
      {console.log(response)}
      if (response.statusCode === 200) {
        this.handleSuccess()
      } else {
        this.handleError({response})
      }
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
      error: false,
    })
  }

  handleError = msg => {
    this.setState({
      showModal: true,
      valid: false,
      loading: false,
      error: true,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  onConfirm = () => {
    this.setState({ valid: true })
  }

  render() {
    let { name, email, subject, message,error} = this.state
    return (
      <Layout>
        <div className="container contact-form">
          <form name="Support Form" onSubmit={this.handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={this.handleInputChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={this.handleInputChange}
              required
            />

            <input
              name="subject"
              type="subject"
              placeholder="Subject"
              value={subject}
              onChange={this.handleInputChange}
              required
            />

            <textarea
              name="message"
              type="text"
              placeholder="Message"
              value={message}
              onChange={this.handleInputChange}
              required
            />

            <button name="submit" type="submit" value="Send It">
              Send
            </button>
           <Popup visible={this.state.showModal} onClickAway={() => this.closeModal()}>
              <p>
                {error
                  ? `Thank you for reaching out. We will get back to you soon.`
                  : `Sorry, All fields are required`}
              </p>
            </Popup>
          </form>
        </div>
      </Layout>
    )
  }
}
