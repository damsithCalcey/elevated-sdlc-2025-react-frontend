const Sidebar = () => {
  const handleNavClick = (e) => {
    const items = document.querySelectorAll(".nav-section li");
    items.forEach((item) => item.classList.remove("active"));
    e.currentTarget.classList.add("active");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="user-profile">
          <div className="avatar">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
              alt="Nancy Martins"
            />
          </div>
          <div className="user-info">
            <span className="user-name">Nancy Martins</span>
            <span className="user-role">Manager</span>
          </div>
          <i className="fas fa-chevron-down user-dropdown"></i>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <h3>DASHBOARDS</h3>
          <ul>
            <li onClick={handleNavClick}>
              <i className="fas fa-inbox"></i> Inbox{" "}
              <span className="count">8</span>
            </li>
            <li onClick={handleNavClick}>
              <i className="fas fa-folder"></i> Drive Files{" "}
              <span className="count">435</span>
            </li>
            <li onClick={handleNavClick} className="active">
              <i className="fas fa-columns"></i> Boards{" "}
              <span className="count">9</span>
            </li>
            <li onClick={handleNavClick}>
              <i className="fas fa-sync"></i> Updates
            </li>
            <li onClick={handleNavClick}>
              <i className="fas fa-chart-line"></i> Analytics{" "}
              <span className="count">2</span>
            </li>
            <li onClick={handleNavClick}>
              <i className="fas fa-tachometer-alt"></i> CRM Dashboard{" "}
              <span className="count">7</span>
            </li>
            <li onClick={handleNavClick}>
              <i className="fas fa-shopping-cart"></i> Ecommerce
            </li>
            <li onClick={handleNavClick}>
              <i className="fas fa-coins"></i> Cryptocurrency
            </li>
            <li onClick={handleNavClick}>
              <i className="fas fa-project-diagram"></i> Projects
            </li>
            <li onClick={handleNavClick}>
              <i className="fas fa-store"></i> NFT Marketplace
            </li>
            <li onClick={handleNavClick}>
              <i className="fas fa-cog"></i> Settings{" "}
              <span className="count">3</span>
            </li>
          </ul>
        </div>

        <div className="nav-section">
          <h3>PROJECTS</h3>
          <ul>
            <li onClick={handleNavClick}>
              <i className="fas fa-calendar-plus"></i> Additional Calendar{" "}
              <span className="count">8</span>
            </li>
            <li onClick={handleNavClick}>
              <i className="fas fa-palette"></i> Brand Logo Design{" "}
              <span className="count">11</span>
            </li>
            <li onClick={handleNavClick}>
              <i className="fas fa-search"></i> User Research
            </li>
            <li onClick={handleNavClick}>
              <i className="fas fa-chart-bar"></i> Marketing Sales{" "}
              <span className="count">22</span>
            </li>
            <li onClick={handleNavClick}>
              <i className="fas fa-folder-plus"></i> New Project Template{" "}
              <span className="count">2</span>
            </li>
            <li className="add-project" onClick={handleNavClick}>
              <i className="fas fa-plus"></i> Add New Project
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
