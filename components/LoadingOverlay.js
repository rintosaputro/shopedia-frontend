import React from 'react';
import { Spinner } from 'react-bootstrap';
import styles from './styles/Overlay.module.css';

function LoadingOverlay() {
  return (
    <div className={`position-absolute vw-100 top-0 start-0 vh-100 d-flex justify-content-center align-items-center flex-column ${styles.overlay}`}>
      <Spinner animation="border" variant="color2" />
      <div>Loading...</div>
    </div>
  );
}

export default LoadingOverlay;
