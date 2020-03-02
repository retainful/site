import React from 'react'
import { Tab, TabPanel, Tabs, TabList } from 'react-web-tabs'
// import ReactDOM from "react-dom";
import './react-web-tabs.css'
import {groupBy,map} from "lodash";

export default class TabContent extends React.Component {
    constructor(props) {
        super(props)
    this.childrenArray = React.Children.toArray(props.children)
    this.slottedChildren = groupBy(this.childrenArray, 'props.slot')
    this.cardClass = `col-md-${props.size} ${props.className}`
    this.state = {
        value: this.slottedChildren['tab-title'],
    }
    }
    render() {
        console.log(this);
    let { slottedChildren, cardClass } = this   
    let slotchild = this.slottedChildren
    return (
        <Tabs vertical className="vertical-tabs" defaultTab="one" onChange={(tabId) => { console.log(tabId) }}>
            <TabList>
                { Array.isArray(slotchild["tab-list-heading"]) && 
                map(slotchild["tab-list-heading"], val=>{
                    console.log("val is", val);
                    
                    return(
                        <Tab tabFor={val.props.id}>{val.props.children}</Tab>
                    )
                })}
                </TabList>
                { Array.isArray(slotchild["tab-panel-content"]) && 
                map(slotchild["tab-panel-content"], val=>{
                    console.log("pan is", val);
                    return(
                <TabPanel tabId={val.props.id}>
                    <p>{val.props.children}</p>
                </TabPanel>
                    )
                })}
            
        </Tabs>
        )
    }
}

TabContent.defaultProps = {
    size: '',
    className: '',
};
