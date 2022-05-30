import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './styles/Navbar.module.css';
import LoadingOverlay from './LoadingOverlay';

function Layout({ children, fullFooter }) {
  const { isLoading } = useSelector((state) => state.pages);

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    if (isLoading) {
      body.className = 'position-relative overflow-hidden';
    } else {
      body.className = '';
    }
  }, [isLoading]);

  return (
    <div>
      <Navbar />
      <div className={styles.contain}>
        {children}
      </div>
      <Footer fullFooter={fullFooter} />
      {isLoading && <LoadingOverlay />}
    </div>
  );
}

export default Layout;
