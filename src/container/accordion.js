import React from 'react';
import CollapsibleDiv from '../components/CollapsibleDiv/collapsibleDiv';
import Dropdown from '../components/DropDown/dropDown';

class Accordion extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <CollapsibleDiv title='Accordion Header One' number='1' open='true' bgImage='rgb(97,104,113)'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil, officia non.
                    <br /><br/>
                    <Dropdown data={this.props.data}/>
                    <br></br>
                    <div className='button' onClick={this.props.buttonClick}>
                        CONTINUE
                    </div>
                </CollapsibleDiv>
                <CollapsibleDiv title='Accordion Header Two' number='2' bgImage='rgb(111,118,127)'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </CollapsibleDiv>
                <CollapsibleDiv title='Accordion Header Three' number='3' bgImage='rgb(126,133,140)'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </CollapsibleDiv>
                <CollapsibleDiv title='Accordion Header Four' number='4' bgImage='rgb(141,146,153)'>
                    We are the pirates, who don't do anything, we just stay at home and lie around, but if you ask us to do anything. We'll just tell you...... we don't do anything.
                </CollapsibleDiv>
            </div>
        );
    }
}

export default Accordion;