import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FormationListPage from './pages/FormationListPage';
import FormationDetailPage from './pages/FormationDetailPage';
import CoachingPage from './pages/CoachingPage';
import CoachingDetails from './pages/CoachingDetails';
import DashboardPage from './pages/DashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

export default function App(){
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/formations" element={<FormationListPage/>} />
            <Route path="/formations/:id" element={<FormationDetailPage/>} />
            <Route path="/coaching" element={<CoachingPage/>} />
            <Route path="/coaching/:id" element={<CoachingDetails />} />
            <Route path="/coaching" element={<CoachingDetails />} />
            <Route path="/dashboard" element={<DashboardPage/>} />
            <Route path="/admin" element={<AdminDashboardPage/>} />
            <Route path="/blog" element={<BlogPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
