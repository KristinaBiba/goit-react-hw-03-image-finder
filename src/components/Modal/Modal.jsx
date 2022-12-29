import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './index.css';

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {

    render() {
        return createPortal(<div class="overlay">
            <div class="modal">
                <img src="" alt="" />
            </div>
        </div>, modalRoot);
    }
}