import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Model.module.css';

// for the background colour black with opacity of 0.75
const Backdrop = (Props) => {
    return <div className={classes.backdrop} onClick={Props.onClick} />;
};

const ModalOverlay = (Props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{Props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Model = (Props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={Props.onClose} />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{Props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Model;


