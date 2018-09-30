import React from 'react';
import './collapsibleDiv.css';

class CollapsibleDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: this.props.open ? this.props.open : false,
        }

        this.handleCollapse = this.handleCollapse.bind(this);
    }

    handleCollapse() {
        this.setState({
            showing: !this.state.showing,
        })
    }

    render() {
        return(
            <div className='collapsible' style={{backgroundColor: this.props.bgImage}}>
                <div className='collapsibleHeader' onClick={this.handleCollapse}>
                    <div className='collapsible-number'>
                        {this.props.number}
                    </div>
                    <div className='collapsible-accordionHeader'>
                        {this.props.title.toUpperCase()}
                    </div>
                    <div className='collapsible-carrot'>
                        {this.state.showing ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-up"></i>}
                    </div>
                </div>
                {this.state.showing ? 
                <div className='collapsibleChild'>
                    {this.props.children}
                </div>
                : ''    
            }
            </div>
        )
    }
}

export default CollapsibleDiv;