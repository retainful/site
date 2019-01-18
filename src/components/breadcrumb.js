import React from 'react';
import Container from '../components/container'

export default function Breadcrumb( props ) {
    if (!props.children) {
        return null;
    }
    return(
        <div className="breadcrumb">
            <Container type="s">
                { props.children }
            </Container>
        </div>
    )
}