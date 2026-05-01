import "../dashboard.css";

function Dashboard() {
  return (
    <div className="container">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>EmailBot</h2>

        <p className="menu-title">MENU</p>

        <ul>
          <li className="active">Dashboard</li>
          <li>Send Email</li>
          <li>Templates</li>
          <li>Schedule</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main */}
      <div className="main">

        {/* Topbar */}
        <div className="topbar">
          <h3>Email Bot Dashboard</h3>

          <div className="nav">
            <span>Home</span>
            <span className="active">Dashboard</span>
            <span>Templates</span>
            <span>Schedule</span>
            <span>Login</span>
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

            <div className="card">
              <p>Templates</p>
              <h2>8</h2>
            </div>

            <div className="card">
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