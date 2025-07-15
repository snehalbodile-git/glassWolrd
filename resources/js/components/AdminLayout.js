// components/AdminLayout.js

function AdminLayout({ children }) {
  return (
    <div className="wrapper">
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <span className="navbar-brand">AdminLTE</span>
      </nav>

      {/* Sidebar */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/" className="brand-link">
          <span className="brand-text font-weight-light">My Panel</span>
        </a>
        <div className="sidebar">
          {/* Sidebar Menu */}
        </div>
      </aside>

      {/* Content */}
      <div className="content-wrapper">
        {children}
      </div>
    </div>
  );
}
