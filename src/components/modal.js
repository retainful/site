import React, { Component } from 'react'
import Modal from 'react-awesome-modal'
import { FaTimesCircle, FaWeight } from 'react-icons/fa'

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
      <>
        <Modal visible={this.props.visible} effect="fadeInUp">
          <div className="text-center" style={{padding:'50px',fontWeight:'bold'}}>
            <a onClick={this.props.onClickAway} style={{float:'right'}}><FaTimesCircle/></a>
            {this.props.children}
          </div>
        </Modal>
      </>
    )
  }
}
