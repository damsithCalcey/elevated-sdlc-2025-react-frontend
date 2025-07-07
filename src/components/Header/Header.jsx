const Header = () => {
  return (
    <header className="main-header">
      <div className="header-left">
        <h1>Task Boards</h1>
      </div>
      <div className="header-right">
        <nav className="top-nav">
          <a href="#" className="nav-link">
            Timeline
          </a>
          <a href="#" className="nav-link">
            Calendar
          </a>
          <a href="#" className="nav-link active">
            Dashboard
          </a>
          <a href="#" className="nav-link">
            Progress
          </a>
          <a href="#" className="nav-link">
            Forms
          </a>
          <a href="#" className="nav-link">
            More
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
