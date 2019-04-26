import style from 'styles/App.less';

import PropTypes from 'prop-types';
import React from 'react';

/**
 * Main application component.
 *
 * @param {string} title - Title for display.
 */
const AppComponent = ({ title, logo }) => {
    return (
        <React.Fragment>
            <h1 className={style.title}>{title}</h1>
            <img src={logo} alt='logo' />
        </React.Fragment>
    );
};

AppComponent.propTypes = {
    title: PropTypes.string.isRequired,
    logo: PropTypes.element.isRequired,
};

AppComponent.defaultProps = {};

export default AppComponent;
