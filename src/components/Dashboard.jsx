import React from 'react';
import './Dashboard.css';


function Dashboard() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <i className="fas fa-shield-alt"></i>
          <h1>CIS</h1>
        </div>
        <div className="navbar-right">
          <i className="fas fa-bell"></i>
          <i className="fas fa-user-circle"></i>
        </div>
      </nav>

      <div className="sidebar">
        <div className="menu-item">
          <i className="fas fa-home"></i>
          <span>Dashboard</span>
        </div>
        <div className="menu-item">
          <i className="fas fa-folder"></i>
          <span>Cases</span>
        </div>
        <div className="menu-item">
          <i className="fas fa-archive"></i>
          <span>Evidence</span>
        </div>
        <div className="menu-item">
          <i className="fas fa-exchange-alt"></i>
          <span>Chain of Custody</span>
        </div>
        <div className="menu-item">
          <i className="fas fa-users"></i>
          <span>Personnel</span>
        </div>
        <div className="menu-item">
          <i className="fas fa-chart-bar"></i>
          <span>Reports</span>
        </div>
        <div className="menu-item">
          <i className="fas fa-cog"></i>
          <span>Settings</span>
        </div>
      </div>

      <main className="main-content">
        <div className="dashboard-header">
          <h2>Dashboard Overview</h2>
          <button className="btn btn-primary">
            <i className="fas fa-plus"></i>
            New Case
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon icon-cases">
              <i className="fas fa-folder"></i>
            </div>
            <div>
              <h3>Total Cases</h3>
              <div className="stat-count">248</div>
              <div className="stat-subtext">32 active</div>
            </div>
          </div>

          {/* Repeat similar structure for other stat-cards */}
        </div>

        <div className="grid">
          <div className="card">
            <h3>Recent Cases</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Case ID</th>
                  <th>Title</th>
                  <th>Priority</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CASE-001</td>
                  <td>Security Breach Investigation</td>
                  <td><span className="badge badge-high">High</span></td>
                  <td>Active</td>
                </tr>Dashboard
                {/* Additional rows here */}
              </tbody>
            </table>
          </div>
          
          {/* Repeat similar structure for other cards */}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
