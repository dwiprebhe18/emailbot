import "../dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1000,
          padding: '8px 12px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '18px',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        ←
      </button>
      
      {/* Sidebar */}
      <div className="sidebar">
        <h2>EmailBot</h2>
        <p className="menu-title">MENU</p>
        <ul>
          <li className="active">Dashboard</li>
          <li>Send Email</li>
          <li onClick={() => navigate("/templates")} style={{cursor:"pointer"}}>Templates</li>
         <li onClick={() => window.open("/schedule.html", "_blank")} style={{cursor:"pointer"}}>Schedule</li>
          <li>Settings</li>
        </ul>
      </div>
      {/* Main */}
      <div className="main">
        {/* Topbar */}
        <div className="topbar">
          <h3>Email Bot Dashboard</h3>
          <div className="nav">
            <span onClick={() => navigate("/")} style={{cursor:"pointer"}}>Home</span>
            <span className="active">Dashboard</span>
            <span onClick={() => navigate("/templates")} style={{cursor:"pointer"}}>Templates</span>
            <span onClick={() => navigate("/schedule")} style={{cursor:"pointer"}}>Schedule</span>
            <span onClick={() => navigate("/login")} style={{cursor:"pointer"}}>Login</span>
          </div>
        </div>
        {/* Content */}
        <div className="content">
          <h1>Dashboard</h1>
          <p className="sub">Welcome back! Here's what's happening.</p>
          {/* Cards */}
          <div className="cards">
            <div className="card">
              <p>Emails Sent</p>
              <h2>120</h2>
            </div>
            <div className="card" onClick={() => navigate("/templates")} style={{cursor:"pointer"}}>
              <p>Templates</p>
              <h2>8</h2>
            </div>
            <div className="card" onClick={() => navigate("/schedule")} style={{cursor:"pointer"}}>
              <p>Scheduled</p>
              <h2>5</h2>
            </div>
          </div>
          {/* Form */}
          <div className="form-box">
            <h2>Send Bulk Email</h2>
            <input placeholder="Enter emails (comma separated)" />
            <input placeholder="Subject" />
            <textarea placeholder="Write your email..."></textarea>
            <button>Send Email</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;