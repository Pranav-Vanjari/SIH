import "./header.css";

const Header = ({ text,handleNavClick, active}) => {

  return (
    <header className="header">
      {/* Left Section */}
      <div className="header-left">
        <h1 className="header-title">{text}</h1>
        <p className="header-subtitle">Welcome back, Mansi Shinde !</p>
      </div>

      {/* Middle Nav */}
      <div className="header-nav">
        <a
          className={`nav-link ${active === "Posts" ? "active" : ""}`}
          onClick={() => handleNavClick("Posts")}
        >
          Posts
        </a>
        <a
          className={`nav-link ${active === "Comments" ? "active" : ""}`}
          onClick={() => handleNavClick("Comments")}
        >
          My Comments
        </a>
      </div>

      {/* Right Section */}
      <div className="header-right">
        <button className="btn primary-btn">
          <span className="icon">▶</span> File a New Form
        </button>
        <button className="btn secondary-btn">
          <span className="icon">💰</span> Pay Fees
        </button>
      </div>
    </header>
  );
};

export default Header;
