import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, ...rest }) => {
  const isAdminAuthenticated = useSelector(state => state.auth.isAdminAuthenticated);

  return (
    isAdminAuthenticated ? (
      children // This is the child component passed to PrivateRoute
    ) : (
      <Navigate to="/admin-login" /> // Redirect to login otherwise
    )
  );
};

export default PrivateRoute;
