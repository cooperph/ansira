import React from 'react';
import './subheading.css';

class Subheading extends React.Component {
    render() {
        return (
            <div className='subheading'>
                <div className='subheading-content'>
                    <div className='subheading-title'>
                        <b>Lorem Ipsum Dolor</b>
                    </div>
                    <div className='subheading-articles'>
                        <div className='subheading-content'>
                            <div className='subheading-subheading'>2018 Lorem Ipsum Dolor Sub-Headline</div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloribus praestntium. Magni
                            dicta rem consequuntur ab inventore odio, veritatis est corrupti quae beatae delectus
                            non ipsa deleniti id laborum
                        </div>
                        <div className='subheading-content'>
                            <div className='subheading-subheading'>2018 Lorem Ipsum Dolor Second Sub-Headline</div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloribus praestntium. Magni
                            dicta rem consequuntur ab inventore odio, veritatis est corrupti quae beatae delectus
                            non ipsa deleniti id laborum
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Subheading;