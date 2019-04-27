// @flow
import style from 'styles/App.less';
import React from 'react';

type Props = {
    title: string,
    logo: string,
};

/**
 * Main application component.
 *
 * @param {string} title - Title for display.
 */
const AppComponent = ({ title, logo }: Props) => (
    <React.Fragment>
        <h1 className={style.title}>{title}</h1>
        <img src={logo} alt='logo' />
    </React.Fragment>
);

export default AppComponent;
