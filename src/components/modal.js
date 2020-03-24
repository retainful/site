import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import {FaTimesCircle} from 'react-icons/fa'

export default class Popup extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        // const properties = props
        return (
            <>
            <span style={{cursor:'pointer'}} onClick={() => this.openModal()}> <div dangerouslySetInnerHTML={{__html: this.props.content}}/> </span>
            <Modal 
                visible={this.state.visible}
                width="500"
                height="350"
                effect="fadeInUp"
                onClickAway={() => this.closeModal()}
            >
                <div style={{padding:'10px'}}>
                    <a href="javascript:void(0);" onClick={() => this.closeModal()} style={{float:'right'}}><FaTimesCircle/></a>
                    <div style={{padding:'30px'}}>
                      {this.props.children}
                    </div>
                </div>
            </Modal>
            </>
        );
    }
}