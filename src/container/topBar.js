import React from 'react';
import mainLogo from '../images/ansira-logo.png';

const styles = {
    divStyles: {
        height: '10%',
    },
    imgStyles: {
        float: 'right',
        maxHeight: '100%',
        maxWidth: '100%',
        paddingRight:'5%',
    }
}

export default function TopBar(props) {
    return (
        <div style={styles.divStyles}>
            <img style={styles.imgStyles} src={mainLogo} alt='mainlogo' />
        </div>
    )
}