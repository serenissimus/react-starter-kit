// @flow

import alive from 'assets/alive.jpg';
import style from 'styles/App.less';
import React from 'react';
import { Helmet } from 'react-helmet';

type PropsType = {
    title?: string,
    logo?: string,
};

/**
 * Main application component.
 */
const AppComponent: Function = ({ title, logo }: PropsType): React.Node => (
    <React.Fragment>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <h1 className={style.title}>{title}</h1>
        <img src={logo} alt='logo' />
    </React.Fragment>
);

AppComponent.defaultProps = {
    title: "It's alive!",
    logo: alive,
};

export default AppComponent;
