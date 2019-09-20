import React, { Component } from 'react'
import Modal from 'react-awesome-modal'
import {FaWindowClose } from 'react-icons/fa'

export default class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  openModal() {
    this.setState({
      visible: true,
    })
  }

  closeModal() {
    this.setState({
      visible: false,
    })
  }

  render() {
    // const properties = props
    return (
      <div style={{display:'flex',flexDirection:'column'}}>
      <Modal visible={this.props.visible} effect="fadeInUp">
        <a 
        href="#"
        onClick={this.props.onClickAway} 

        style={{
          float: 'right',
          paddingRight:'10px',
         }}
      >
        <FaWindowClose/>
        </a>
          <div className="text-center" style={{padding:'50px',fontWeight:'bold'}}>
            {this.props.children}
          </div>
        </Modal>
        </div>
    )
  }
}
