import React from 'react';

const ThreeButtonCta = (props) => {
    return(
        <div className="bg-primary text-center text-white p-3">
            <div className="p-4">
                {props.children}
            </div>
                <div className="d-flex justify-content-around">  
                    { props.buttontext1?
                    <a href={props.url1} target={props.target1} rel={props.rel1} className="px-4 btn-action btn-edge text-white"> { props.buttontext1 } </a> 
                    : null}

                    { props.buttontext2?
                        <a href={props.url2} target={props.target2} rel={props.rel2} className="px-4 btn-action btn-edge text-white"> { props.buttontext2 } </a> 
                    : null}

                    { props.buttontext3?
                        <a href={props.url3} target={props.target3} rel={props.rel3} className="px-4 btn-action btn-edge text-white"> { props.buttontext3 } </a> 
                    : null}
                </div>
        </div>
    )
} 

export default ThreeButtonCta