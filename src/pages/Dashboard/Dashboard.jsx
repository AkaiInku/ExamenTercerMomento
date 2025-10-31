import React, { useState } from 'react';
import Botton from '../../components/Botton/Botton';
import './Dashboard.css';

const Dashboard = () => {
  const [userName] = useState('NombreApp');

  const stats = [
    { title: 'Proyectos Activos', value: '12' },
    { title: 'Tareas Completadas', value: '86' },
    { title: 'Alertas', value: '3' },
    { title: 'Miembros del equipo', value: '8' }
  ];

  const notifications = [
    {
      title: 'Actualización del sistema programada',
      description: 'El mantenimiento se realizará el 25 de Diciembre a las 10 PM.'
    },
    {
      title: 'Nueva factura disponible',
      description: 'Tu factura de Noviembre ya está lista para descargar.'
    },
    {
      title: 'Recordatorio de reunión',
      description: 'Tienes una reunión de equipo hoy a las 3 PM.'
    }
  ];

  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <div className="app-logo">N</div>
          <h2 className="app-name">{userName}</h2>
        </div>

        <nav className="sidebar-nav">
          <a href="#" className="nav-item active">Dashboard</a>
          <a href="#" className="nav-item">Perfil</a>
          <a href="#" className="nav-item">Configuración</a>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn">Cerrar Sesión</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <h1 className="welcome-text">Bienvenido de nuevo</h1>
          <div className="user-avatar">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" alt="User" />
          </div>
        </header>

        {/* Content */}
        <div className="dashboard-content">
          <section className="panel-section">
            <h2 className="section-title">Panel de Control</h2>
            <p className="section-subtitle">Un resumen de la actividad de tu cuenta.</p>

            {/* Stats Grid */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <h3 className="stat-title">{stat.title}</h3>
                  <p className="stat-value">{stat.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Two Column Layout */}
          <div className="dashboard-columns">
            {/* Notifications */}
            <section className="notifications-section">
              <h3 className="column-title">Notificaciones</h3>
              <div className="notifications-list">
                {notifications.map((notification, index) => (
                  <div key={index} className="notification-item">
                    <h4 className="notification-title">{notification.title}</h4>
                    <p className="notification-description">{notification.description}</p>
                  </div>
                ))}
              </div>
              <a href="#" className="view-all-link">Ver todas las notificaciones</a>
            </section>

            {/* Quick Actions */}
            <section className="actions-section">
              <h3 className="column-title">Accesos Directos</h3>
              <div className="actions-list">
                <Botton text="Crear Nuevo Proyecto" size="medium" variant="primary" />
                <Botton text="Añadir Tarea" size="medium" variant="secondary" />
                <Botton text="Invitar Miembro" size="medium" variant="secondary" />
                <Botton text="Generar Reporte" size="medium" variant="secondary" />
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;