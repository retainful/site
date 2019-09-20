import React from 'react'

const DownloadPluginCTA = props => {
    {
        console.log(props)
    }
    if (!props.children) {
        return null
    }
    const classes = `btn-action text-white`
    return (
        <div className="download-cta">
            <div className="container">
                <div className="row align-items-center border py-3 px-2">
                    <div className="col-md-8"><strong>{props.children}</strong></div>
                    <div className="col-md-4 text-center">
                        <a href={props.url} target={props.target} rel={props.rel} className={classes} > {props.buttontext} </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadPluginCTA
