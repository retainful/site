import React from 'react'
import "./togglebtn.css"


class ToggleBtn extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            toggle : true
        }
        
    }
    componentDidMount(){
        this.toggle()
    }
    toggle = (e)=> {
    if(this.state.toggle) {
        let monthly =  document.querySelectorAll('#monthly');
        
        for(let i=0; i<monthly.length; i++) {
            if(monthly[i]) {monthly[i].style.display = monthly[i].style.display = "none"}
        }

        let anually =  document.querySelectorAll('#anually');
        for(let i=0; i<anually.length; i++) {
            if(anually[i]) {anually[i].style.display = anually[i].style.display = '' }
        }
    }
    else {
        let monthly =  document.querySelectorAll('#monthly');
        
        for(let i=0; i<monthly.length; i++) {
            if(monthly[i]) {monthly[i].style.display = monthly[i].style.display = ""}
        }

        let anually =  document.querySelectorAll('#anually');
        for(let i=0; i<anually.length; i++) {
            if(anually[i]) {anually[i].style.display = anually[i].style.display = 'none' }
        }
    }
    
    this.setState({toggle: !this.state.toggle})
}

render() {
    return(
        <div class="container toggle-btn">
    <div class="row">
    <div class="col-md-12">
    <div className="d-flex" style={{ width: '100%', justifyContent:'center'}}>
        <p><strong>Anually <span style={{color:'#3abd82',fontSize:'14px'}}>(Save 20%)</span></strong></p>
        <button type="button" onClick={this.toggle} id="pricing-toggle" class="btn btn-lg btn-toggle-secondary btn-toggle" data-toggle="button" aria-pressed="false" autocomplete="off" >
          <div class="handle"></div>
        </button>
        <p><strong>Monthly</strong></p>
        </div>
      </div>
    </div>
  </div>
    )
 }
}

export default ToggleBtn