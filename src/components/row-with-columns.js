import React from 'react'

function Header() {
    return null
}

function Body() {
    return null
}

function Footer() {
    return null
}

class Row extends React.Component {
    static Header = Header;
    static Body = Body;
    static Footer = Footer;

    render() {
        const {children} = this.props;
        const header = children.find(child => child.type === Header);
        const body = children.find(child => child.type === Body);
        const footer = children.find(child => child.type === Footer);

        return (
            <div className="container">
                <header>
                    {header ? header.props.children : null}
                </header>
                <main>
                    {body ? body.props.children : null}
                </main>
                <footer>
                    {footer ? footer.props.children : null}
                </footer>
            </div>
        )
    }
}

export default Row;