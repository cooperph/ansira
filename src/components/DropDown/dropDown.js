import React from 'react';
import './dropDown.css';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'SELECT ONE',
        }

        this.updateValue = this.updateValue.bind(this);
    }

    componentDidMount() {
    
    }

    updateValue(e) {
        console.log(e.target.value);
        this.setState({
            value: e.target.value,
        })
    }

    render() {
        console.log(this.props.data)
        return (
            <div className='dropdown'>
                <select>
                    <option key='0'>SELECT ONE</option>
                    {this.props.data != '' ? (
                        this.props.data.map((m1,idx) => {
                        return (
                            <option key={m1.name} onClick={this.updateValue}>{m1.name}</option>
                        )
                    })) : ''                
                    }

                </select>
            </div>
        )
    }
}

export default Dropdown;