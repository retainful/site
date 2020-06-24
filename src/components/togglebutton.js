import React, {Component, Fragment} from 'react'
import ReactDOM from "react-dom";
// import './togglebtn.css'
import { CustomInput, Form, FormGroup, Label } from 'reactstrap'

class ToggleBtn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: true,
      sliderRange: '2000',
      sliderValue: '',
    }
  }
  componentDidMount() {
    this.toggle()
    this.calculatePrice()
  }
  toggle = e => {
    if (this.state.toggle) {
      let monthly = document.querySelectorAll('#monthly')

      for (let i = 0; i < monthly.length; i++) {
        if (monthly[i]) {
          monthly[i].style.display = monthly[i].style.display = 'none'
        }
      }

      let anually = document.querySelectorAll('#anually')
      for (let i = 0; i < anually.length; i++) {
        if (anually[i]) {
          anually[i].style.display = anually[i].style.display = ''
        }
      }
    } else {
      let monthly = document.querySelectorAll('#monthly')

      for (let i = 0; i < monthly.length; i++) {
        if (monthly[i]) {
          monthly[i].style.display = monthly[i].style.display = ''
        }
      }

      let anually = document.querySelectorAll('#anually')
      for (let i = 0; i < anually.length; i++) {
        if (anually[i]) {
          anually[i].style.display = anually[i].style.display = 'none'
        }
      }
    }

    this.setState({ toggle: !this.state.toggle })
  }

  handleSliderChange = e => {
    this.setState(
      {
        sliderRange: e.target.value,
      },
      () => {
        this.calculatePrice()
      }
    )
  }
  calculatePrice = () => {
    let contacts = this.state.sliderRange
    if (contacts <= 2000) {
      ReactDOM.render(<Fragment>7</Fragment>, document.getElementById('starter-pricey'));
      ReactDOM.render(<Fragment>9</Fragment>, document.getElementById('starter-pricem'));
      ReactDOM.render(<Fragment>23</Fragment>, document.getElementById('growth-pricey'));
      ReactDOM.render(<Fragment>29</Fragment>, document.getElementById('growth-pricem'));
    }
    if (contacts <= 5000) {
      ReactDOM.render(<Fragment>23</Fragment>, document.getElementById('growth-pricey'));
      ReactDOM.render(<Fragment>29</Fragment>, document.getElementById('growth-pricem'));
    }
    if (contacts > 5000) {
      let priceMultiplier = contacts / 1000
      let priceValue = (priceMultiplier-5) * 5;
      let originalPrice = priceValue + 23;
      let originalPricem = priceValue + 29;
      ReactDOM.render(<Fragment>{originalPrice}</Fragment>, document.getElementById('growth-pricey'));
      ReactDOM.render(<Fragment>{originalPricem}</Fragment>, document.getElementById('growth-pricem'));
    }
    if (contacts > 2000) {
      let priceMultiplier = contacts / 1000
      let priceValue = (priceMultiplier-2) * 5;
      let originalPrice = priceValue + 7;
      let originalPricem = priceValue + 9;
      ReactDOM.render(<Fragment>{originalPrice}</Fragment>, document.getElementById('starter-pricey'));
      ReactDOM.render(<Fragment>{originalPricem}</Fragment>, document.getElementById('starter-pricem'));
    }
  }

  render() {
    return (
      <div class="toggle-btn">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div className="card text-center">
              <div className="card-body align-items-center">
                <div style={{flex: "auto"}}>
                  <h4>How many contacts do you have?</h4>
                  <h2 className="mt-1 mb-3">
                    {this.state.sliderRange} <small>Contacts</small>
                  </h2>
                  <FormGroup>
                    <CustomInput
                      type="range"
                      id="sliderRange"
                      min="2000"
                      max="25000"
                      step="1000"
                      value={this.state.sliderRange}
                      name="sliderRange"
                      onChange={this.handleSliderChange}
                      title={this.state.sliderRange}
                    />
                  </FormGroup>
                </div>
                <div style={{flex: "0 1 30%"}}>
                  <p className="mt-3 mb-2">Pay anually to <span style={{ color: '#3abd82', fontWeight: '600' }}>
                        Save 20%
                      </span></p>
                <div className="d-inline-block clearfix">
                  <button
                    type="button"
                    onClick={this.toggle}
                    id="pricing-toggle"
                    class="btn btn-lg btn-toggle-secondary btn-toggle"
                    data-toggle="button"
                    aria-pressed="false"
                    autocomplete="off"
                      >
                        <strong className={!this.state.toggle ? 'active' : ''}>
                      Anually
                        </strong>
                        <strong className={this.state.toggle ? 'active' : ''}>Monthly</strong>
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ToggleBtn
