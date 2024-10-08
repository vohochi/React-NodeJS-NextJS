import React from 'react';
import '../../styles/admin/Dashboard.css';
import Navigation from '../../components/admin/Navigation';
import { useNavigate } from 'react-router-dom';
import HeaderAdmin from '../../components/admin/HeaderAdmin';
import Nav from '../../components/admin/Nav';
import Main from '../../components/admin/Main';

interface Props {
  // define your props here
}

const Dashboard: React.FC<Props> = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <>
      {/* Hello world */}
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        {/* Vertical Navbar */}
        <Navigation />
        {/* Main content */}
        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          {/* Header */}
          <HeaderAdmin handleNavigate={handleNavigate} />
          {/* Main */}
          <main className="py-6 bg-surface-secondary">
            <div className="container-fluid">
              {/* Card stats */}
              <Nav />
              <Main />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
