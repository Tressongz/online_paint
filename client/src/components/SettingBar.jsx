import React from 'react';
import "../styles/toolbar.scss"
import toolState from "../store/toolState";

const SettingBar = () => {
    return (
        <div className={'setting-bar'}>
            <label style={{marginLeft: '15px'}} htmlFor={'line-width'}>Толщина линии:</label>
            <input
                onChange={e => toolState.setLineWidth(e.target.value)}
                style={{margin: '0 10px'}}
                id={'line-width'}
                defaultValue={1} type={'number'} min={1} max={50}
            />
            <label style={{marginRight: '10px'}} htmlFor={'stroke-color'}>Цвет обводки:</label>
            <input
                onChange={e => toolState.setStrokeColor(e.target.value)}
                id={'stroke-color'}
                type={'color'}
            />
        </div>
    );
};

export default SettingBar;