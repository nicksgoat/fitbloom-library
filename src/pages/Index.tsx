
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';

const Index = () => {
  // Redirect to Explore page as the main entry point
  return (
    <MainLayout>
      <Navigate to="/explore" replace />
    </MainLayout>
  );
};

export default Index;
