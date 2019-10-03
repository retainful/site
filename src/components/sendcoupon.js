import React from "react"

const SendCoupon = (props) =>{
    return(
        <div className="p-4" style={{border:'2px dashed #000'}}>
            <div className="row align-items-center">
                <div className="col-md-8">
                    {props.children}
                </div>
                <div className="col-md-4">
                    <a href={props.url} target={props.target} rel={props.rel} className="px-4 btn-action btn-edge text-white">{props.buttontext ? props.buttontext : "Send me 10% Coupon"}</a>
                </div>
            </div>
        </div>
    )
}

export default SendCoupon