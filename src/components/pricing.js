import React from 'react'
import Container from  '../components/container'
import {FaChevronRight} from "react-icons/fa";

class PricingTable extends React.Component {
    state = {
        pricingPeriod: "month",
        monthPrice: '14',
        yearPrice: '11',
        monthPricePro: '40',
        yearPricePro: '32',
    };
    componentDidMount () {

    }
    handleOnChangePeriod = (changeEvent) => {
        console.log(this.state.pricingPeriod);
        this.setState({
            pricingPeriod: changeEvent.target.value
        });
    }
    handleOnChangeCount = (e) =>{
        let chosenCount = e.target.value;
        switch (chosenCount) {
            case '2000':
                this.setState({
                    monthPrice: '14',
                    monthPricePro: '30',
                    yearPrice: '20',
                    yearPricePro: '25',
                });
                break;
            case '5000':
                this.setState({
                    monthPrice: '29',
                    monthPricePro: '40',
                    yearPrice: '23',
                    yearPricePro: '32',
                });
                break;
            case '10000':
                this.setState({
                    monthPrice: '49',
                    monthPricePro: '44',
                    yearPrice: '56',
                    yearPricePro: '48',
                });
                break;
            case '25000':
                this.setState({
                    monthPrice: '69',
                    monthPricePro: '62',
                    yearPrice: '89',
                    yearPricePro: '76',
                });
                break;
        }
    }
    render() {
        return (
            <div id="price-slider">
                <div className="calcuate-pricing-plan container">
                    <h4>How many customers does your store have?</h4>
                    <div className="customer-select-box">
                        <select id="customer-count-select" onChange={this.handleOnChangeCount}>
                            <option value="2000">100 - 2000</option>
                            <option value="5000">2000 - 5000</option>
                            <option value="10000">5000 - 10000</option>
                            <option value="25000">10000 - 25000</option>
                        </select>
                    </div>
                    <div className="pricing-radio-group">
                        <div className="radio">
                            <input type="radio" value="month" name="month"
                                   checked={this.state.pricingPeriod === 'month'}
                                   onChange={this.handleOnChangePeriod} />
                            <label for="month">
                                Monthly
                            </label>
                        </div>
                        <div className="radio">
                            <input type="radio" value="year" name="year"
                                   checked={this.state.pricingPeriod === 'year'}
                                   onChange={this.handleOnChangePeriod} />
                            <label for="year">
                                Yearly <span className="offer">(Up to 20% Off)</span>
                            </label>
                        </div>
                    </div>
                    <div id="pricing" className="pricing-section text-center">
                        <Container>
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="table-left wow fadeInDown">
                                        <div className="pricing-details">
                                            <h3>Free forever</h3>
                                            <span className="price-amount">$ 0.00</span>
                                            <span className="price-period">per month</span>
                                            <ul>
                                                <li>100 contacts</li>
                                                <li>Unlimited emails</li>
                                                <li>Unlimited automations</li>
                                                <li>Pop-ups</li>
                                                <li>Signup-forms</li>
                                                <li>Customer segmentation</li>
                                            </ul>
                                            <p className="text-center">
                                                <a className="btn-outline btn-lg" href="https://app.retainful.com/" target="_blank" rel="noopener noreferrer"> Get Started Now</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 featured">
                                    <div className="table-left wow fadeInDown">
                                        <div className="pricing-details">
                                            <h3>Essential</h3>
                                            <span className="price-amount">$
                                                { this.state.pricingPeriod === 'month'
                                                    ? <span id="monthprice" className="price">{this.state.monthPrice}</span>
                                                    : <span id="yearprice" className="price">{this.state.yearPrice}</span>
                                                }
                                            </span>
                                            <span className="price-period">per month</span>
                                            <ul>
                                                <li><strong>Everything in Free +</strong></li>
                                                <li>upto 2000 contacts</li>
                                                <li>Exit-Intent popups</li>
                                                <li>Advanced Segmentation</li>
                                                <li>Email and Chat priority support</li>
                                            </ul>
                                            <p className="text-center">
                                                <a className="btn-action btn-lg" href="https://app.retainful.com/" target="_blank" rel="noopener noreferrer"> Get Started Now</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="table-left wow fadeInDown">
                                        <div className="pricing-details">
                                            <h3>Pro</h3>
                                            <span className="price-amount">$
                                                { this.state.pricingPeriod === 'month'
                                                    ? <span id="monthpricepro" className="price">{this.state.monthPricePro}</span>
                                                    : <span id="yearpricepro" className="price">{this.state.yearPricePro}</span>
                                                }
                                            </span>
                                            <span className="price-period">per month</span>
                                            <ul>
                                                <li><strong>Everything in Essential +</strong></li>
                                                <li>upto 5000 contacts</li>
                                                <li>Dedicated Account Manager</li>
                                                <li>Priority Support</li>
                                                <li>Migration from other platforms</li>
                                            </ul>
                                            <p className="text-center">
                                                <a className="btn-outline btn-lg" href="https://app.retainful.com/" target="_blank" rel="noopener noreferrer"> Get Started Now</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="enterprise-pricing-plan">
                                <div className="row align-items-center">
                                    <div className="col-md-3">
                                        <img className="img-responsive" src="https://raw.githubusercontent.com/campaignrabbit/cr-media/master/images/discover-features/relevant-messages.png" alt=""/>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="pricing-details text-left">
                                            <h4>Enterprise</h4>
                                            <p>
                                                The <strong>Basic Plan</strong> includes all of the essentials for teams up to 100 contacts. Sign up for a 30-day trial
                                                <a href="https://app.retainful.com/" target="_blank" rel="noopener noreferrer"> Get Started Now <FaChevronRight/></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}

export default PricingTable;
