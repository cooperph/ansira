import React from 'react';
import './headline.css';
import image from '../../images/slide-1.jpg';
import image2 from '../../images/slide-2.jpg';
import image3 from '../../images/slide-3.jpg';

class Headline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            images: [ image, image2, image3 ]
        }
        // this.changePhoto = this.changePhoto.bind(this);
    }

    // changePhoto() {
    //     console.log('before', this.state.index);
    //     let temp = this.state.index;
    //     let value = 0;
    //     if(temp < this.state.images.length-1){
    //         value = temp++;
    //     }

    //     this.setState({
    //         index: value,
    //     }, setTimeout(this.changePhoto(), 3000))
    // }

    render() {
        // setInterval(this.changePhoto, 3000);
        return (
            <div className='headline'>
                <div className='headlineText'>
                    <div className='text-headline'>
                        2018 Ansira Headline
                    </div>
                    <div className='text-content'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis excepturi at sit nemo.
                    </div>
                </div>
                <div className='headlineCarosel'>
                    <img className='headlineImg' src={this.state.images[this.state.index]} alt='image1'/>
                </div>
            </div>
        )
    }
}

export default Headline;