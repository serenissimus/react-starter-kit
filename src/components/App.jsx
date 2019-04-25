import 'normalize.css/normalize.css';
import style from 'styles/App.less';
import alive from 'images/alive.jpg';

import PropTypes from 'prop-types';
import React from 'react';

const AppComponent = ({ title }) => {
    return (
        <React.Fragment>
            <h1 className={style.title}>{title}</h1>
            <img src={alive} alt='alive' />
        </React.Fragment>
    );
};

AppComponent.propTypes = {
    title: PropTypes.string.isRequired,
};

AppComponent.defaultProps = {};

export default AppComponent;
