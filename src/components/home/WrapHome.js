import React from 'react';
import Footer from './Footer';
import { Routes, RoutesApp } from '../../routes/routes';
import axios from 'axios';

export default props => {
  return (
    <>
      <RoutesApp />
      <Footer {...props} />
    </>
  );
};
