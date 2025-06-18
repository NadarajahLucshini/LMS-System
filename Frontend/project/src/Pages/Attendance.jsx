import React, { useState } from "react";

export default function Attendance() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Sample employee data
  const employees = [
    {
      id: 1,
      name: "Savannah Nguyen",
      role: "Employee",
      avatar:
        "https://placehold.co/40x40/png?text=SN&font=roboto&fontSize=18&bg=acc9b9",
    },
    {
      id: 2,
      name: "Robert Fox",
      role: "Employee",
      avatar:
        "https://placehold.co/40x40/png?text=RF&font=roboto&fontSize=18&bg=d0d0d0",
    },
    {
      id: 3,
      name: "Ronald Richards",
      role: "Employee",
      avatar:
        "https://placehold.co/40x40/png?text=RR&font=roboto&fontSize=18&bg=d0d0d0",
    },
    {
      id: 4,
      name: "Darrell Steward",
      role: "Employee",
      avatar:
        "https://placehold.co/40x40/png?text=DS&font=roboto&fontSize=18&bg=d0d0d0",
    },
    {
      id: 5,
      name: "Jane Cooper",
      role: "Employee",
      avatar:
        "https://placehold.co/40x40/png?text=JC&font=roboto&fontSize=18&bg=d0d0d0",
    },
    {
      id: 6,
      name: "Jacob Jones",
      role: "Employee",
      avatar:
        "https://placehold.co/40x40/png?text=JJ&font=roboto&fontSize=18&bg=d0d0d0",
    },
  ];

  // Sample attendance data
  const attendance = [
    {
      date: "26/10/2022",
      branch: "Firs Cottage, Adams Road, Kirk Langley, DE6 4LW",
      checkIn: "09:00 AM",
      checkOut: "18:00 PM",
      totalHrs: "08:00 Hrs",
    },
    {
      date: "25/10/2022",
      branch: "Firs Cottage, Adams Road, Kirk Langley, DE6 4LW",
      checkIn: "09:00 AM",
      checkOut: "18:00 PM",
      totalHrs: "08:00 Hrs",
    },
    // More rows...
    {
      date: "20/10/2022",
      branch: "Firs Cottage, Adams Road, Kirk Langley, DE6 4LW",
      checkIn: "--:--",
      checkOut: "--:--",
      totalHrs: "--:--",
    },
  ];

  return (
    <>
      <style>{`
        /* Reset and base */
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background-color: #f2f6f3;
          color: #1f2428;
        }
        a {
          text-decoration: none;
          color: inherit;
        }

        /* Layout grid and main wrapper */
        .app-root {
          display: grid;
          grid-template-columns: 280px 1fr 1fr;
          grid-template-rows: auto 1fr auto;
          min-height: 100vh;
          background: transparent;
          gap: 24px;
          padding: 24px;
          max-width: 1440px;
          margin: 0 auto;
        }

        @media (max-width: 1439px) {
          .app-root {
            max-width: 1024px;
          }
          .app-root {
            grid-template-columns: 280px 1fr 1fr;
          }
        }

        @media (max-width: 767px) {
          .app-root {
            display: block;
            padding: 16px;
          }
        }

        /* Sidebar */
        .sidebar {
          background: #e7f0e9;
          border-radius: 28px;
          box-shadow:
            inset 6px 6px 12px #a7b3a6,
            inset -6px -6px 12px #ffffff;
          height: calc(100vh - 48px);
          display: flex;
          flex-direction: column;
          padding: 32px 24px;
          position: sticky;
          top: 24px;
          gap: 32px;
        }

        @media (max-width: 767px) {
          .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 260px;
            transform: translateX(${sidebarOpen ? "0" : "-110%"});
            transition: transform 0.3s ease;
            z-index: 99;
            padding-top: 60px;
            box-shadow: 4px 0 12px rgba(0,0,0,0.1);
          }
        }

        .sidebar-header {
          font-weight: 900;
          font-size: 28px;
          color: #20603d;
          margin-bottom: 16px;
          display:flex;
          align-items:center;
          gap: 8px;
        }
        .sidebar-logo-icon {
          width: 36px;
          height: 36px;
          background:
            linear-gradient(135deg, #20603d, #5aa466);
          mask: url('data:image/svg+xml;utf8,<svg fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.14 12.936l-4.979 4.978a2.25 2.25 0 01-3.181 0l-4.88-4.88a2.25 2.25 0 010-3.183l8.916-8.915a2.25 2.25 0 013.182 3.182l-6.236 6.237 5.263 5.262z"/></svg>') no-repeat center / contain;
        }
        .sidebar-menu {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .sidebar-menu-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 500;
          font-size: 15px;
          padding: 12px 24px;
          border-radius: 12px;
          color: #344433;
          cursor: pointer;
          transition: background-color 0.3s ease;
          user-select:none;
        }
        .sidebar-menu-item.active, 
        .sidebar-menu-item:hover {
          background-color: #20603d;
          color: #f0fbf3;
        }
        .sidebar-menu-item svg {
          font-size: 20px;
        }

        /* Hamburger toggle button on mobile */
        .hamburger-btn {
          display: none;
          position: fixed;
          top: 20px;
          left: 16px;
          z-index: 999;
          background: #20603d;
          border: none;
          border-radius: 8px;
          width: 44px;
          height: 44px;
          color: white;
          font-size: 28px;
          cursor: pointer;
          align-items:center;
          justify-content:center;
        }
        @media (max-width: 767px) {
          .hamburger-btn {
            display: flex;
          }
        }

        /* Header */
        header {
          grid-column: 1/-1;
          position: sticky;
          top: 0;
          background: #f2f6f3;
          height: 60px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0 24px;
          border-radius: 24px;
          box-shadow:
            inset 6px 6px 12px #a7b3a6,
            inset -6px -6px 12px #ffffff;
          z-index: 10;
          margin-bottom: 16px;
        }
        .header-profile {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 600;
          font-size: 14px;
          color: #1f2428;
        }
        .header-profile img {
          border-radius: 50%;
          width: 32px;
          height: 32px;
          border: 2px solid #20603d;
        }

        /* Main content area container */
        .content {
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        @media (max-width: 1439px) {
          .content {
            grid-column: 2 / 4;
          }
        }
        @media (max-width: 767px) {
          .content {
            grid-column: 1 / -1;
          }
        }

        /* Overview cards container */
        .overview-cards {
          display: flex;
          gap: 24px;
          flex-wrap: nowrap;
        }
        @media (max-width: 767px) {
          .overview-cards {
            flex-direction: column;
            gap: 16px;
          }
        }

        /* Each overview card styling */
        .overview-card {
          background: #c7b182;
          border-radius: 18px;
          padding: 24px 32px;
          color: #f6f3e3;
          min-width: 180px;
          flex: 1;
          box-shadow: inset 6px 6px 12px #a09064,
            inset -6px -6px 12px #fff9d7;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          font-size: 16px;
          user-select:none;
        }
        .overview-card .icon {
          font-size: 28px;
          opacity: 0.8;
        }
        .overview-card .value {
          font-size: 28px;
          font-weight: 900;
          line-height: 1;
        }
        /* Cards text container */
        .overview-card-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .overview-card-label {
          font-size: 14px;
          font-weight: 500;
          user-select:none;
          opacity: 0.75;
        }

        /* Section wrapper: Employees + Attendance side by side */
        .details-container {
          display: flex;
          gap: 24px;
          min-height: 450px;
        }
        @media (max-width: 767px) {
          .details-container {
            flex-direction: column;
            gap: 16px;
          }
        }

        /* Employee list panel */
        .employee-list-panel {
          background: #f7faf7;
          border-radius: 20px;
          padding: 24px 16px 24px 24px;
          box-shadow:
            inset 6px 6px 12px #cfdfd5,
            inset -6px -6px 12px #ffffff;
          flex: 1;
          display: flex;
          flex-direction: column;
          max-width: 320px;
        }
        .employee-list-header {
          display: flex;
          align-items: center;
          font-weight: 600;
          font-size: 15px;
          color: #20603d;
          gap: 8px;
          margin-bottom: 16px;
          user-select:none;
        }
        .employee-list-header .icon {
          font-size: 20px;
          opacity: 0.85;
        }
        .employee-search {
          width: 100%;
          padding: 10px 14px;
          border-radius: 12px;
          border: none;
          background: #e7f0e9;
          font-size: 14px;
          margin-bottom: 16px;
          outline-offset: 0;
          outline-color: transparent;
          font-family: 'Poppins', sans-serif;
          transition: outline-color 0.3s ease;
        }
        .employee-search:focus {
          outline-color: #20603d;
          outline-style: solid;
        }
        .employee-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 8px 8px 12px;
          border-radius: 12px;
          cursor: pointer;
          margin-bottom: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #1f2428;
          user-select:none;
          transition: background-color 0.3s ease;
        }
        .employee-item.selected {
          background: #acc9b9;
          font-weight: 700;
          color: #1f2428;
        }
        .employee-item:hover {
          background: #acc9b9aa;
        }
        .employee-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          flex-shrink: 0;
          object-fit: cover;
          border: 1.5px solid #20603d;
        }
        .employee-details {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .employee-name {
          font-weight: 700;
          font-size: 14px;
          user-select:none;
        }
        .employee-subtitle {
          font-size: 11px;
          color: #738276;
          user-select:none;
        }

        /* Attendance panel */
        .attendance-panel {
          background: white;
          border-radius: 20px;
          padding: 24px 28px;
          box-shadow:
            6px 6px 12px #d4dbd7,
            -6px -6px 12px #ffffff;
          flex: 2;
          overflow-x: auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .attendance-header {
          display: flex;
          align-items: center;
          font-weight: 600;
          font-size: 15px;
          color: #1f2428;
          gap: 12px;
          user-select:none;
        }
        .attendance-header .icon {
          font-size: 20px;
          opacity: 0.75;
        }
        .date-selector {
          margin-left: auto;
          background: #f7f9f7;
          border-radius: 12px;
          padding: 4px 12px;
          font-size: 14px;
          color: #4a5a50;
          font-weight: 600;
          border: 1px solid #e7eae7;
          user-select:none;
          cursor: pointer;
          display: flex;
          gap: 8px;
          align-items: center;
          min-width: 110px;
          justify-content:center;
        }
        .date-selector svg {
          height: 18px;
          width: 18px;
          opacity: 0.7;
          stroke-width: 2;
        }

        table.attendance-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
          user-select:none;
        }
        table.attendance-table thead tr {
          background: #0d3828;
          color: white;
          text-align: left;
          font-weight: 600;
          border-radius: 12px 12px 0 0;
          user-select:none;
        }
        table.attendance-table th,
        table.attendance-table td {
          padding: 12px 20px;
          vertical-align: middle;
          border-bottom: 1px solid #eaede9;
          user-select:none;
        }
        table.attendance-table tbody tr:hover {
          background: #ebf6f0;
        }

        /* Breadcrumb on mobile */
        .breadcrumb {
          display: none;
          font-size: 14px;
          margin-bottom: 12px;
          font-weight: 600;
          color: #45513d;
          user-select:none;
        }
        @media (max-width: 767px) {
          .breadcrumb {
            display: block;
          }
        }

        /* Scrollbar styling for employee list and attendance */
        .employee-list-panel::-webkit-scrollbar,
        .attendance-panel::-webkit-scrollbar {
          width: 6px;
          height: 6px;
          user-select:none;
        }
        .employee-list-panel::-webkit-scrollbar-thumb,
        .attendance-panel::-webkit-scrollbar-thumb {
          background: #a3b3a1;
          border-radius: 6px;
        }
        .employee-list-panel::-webkit-scrollbar-track,
        .attendance-panel::-webkit-scrollbar-track {
          background: #eff4e8;
          border-radius: 6px;
        }
      `}</style>

      {/* Hamburger toggle for mobile sidebar */}
      <button
        className="hamburger-btn"
        aria-label="Toggle menu"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span className="material-icons" aria-hidden="true">
          menu
        </span>
      </button>

      <div className="app-root" role="main" aria-label="Space Dashboard Application">
        {/* Sidebar */}
        <nav
          className="sidebar"
          aria-label="Primary Navigation"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="sidebar-header">
            <div className="sidebar-logo-icon" aria-hidden="true"></div>
            SPACE
          </div>
          <div className="sidebar-menu" role="menu">
            <a
              href="#dashboard"
              className="sidebar-menu-item active"
              role="menuitem"
              tabIndex={0}
            >
              <span
                className="material-icons"
                aria-hidden="true"
                title="Dashboard"
              >
                dashboard
              </span>
              Dashboard
            </a>
            <a href="#employees" className="sidebar-menu-item" role="menuitem" tabIndex={0}>
              <span
                className="material-icons"
                aria-hidden="true"
                title="Employees"
              >
                groups
              </span>
              Employees
            </a>
            <a href="#managers" className="sidebar-menu-item" role="menuitem" tabIndex={0}>
              <span
                className="material-icons"
                aria-hidden="true"
                title="Managers"
              >
                group
              </span>
              Managers
            </a>
            <a href="#geofence" className="sidebar-menu-item" role="menuitem" tabIndex={0}>
              <span
                className="material-icons"
                aria-hidden="true"
                title="Geofence"
              >
                location_on
              </span>
              Geofence
            </a>
            <a href="#settings" className="sidebar-menu-item" role="menuitem" tabIndex={0}>
              <span
                className="material-icons"
                aria-hidden="true"
                title="Settings"
              >
                settings
              </span>
              Settings
            </a>
            <a href="#logout" className="sidebar-menu-item" role="menuitem" tabIndex={0}>
              <span
                className="material-icons"
                aria-hidden="true"
                title="Logout"
              >
                logout
              </span>
              Logout
            </a>
          </div>
        </nav>

        {/* Header */}
        <header role="banner" aria-label="Dashboard Header">
          <div className="header-profile" tabIndex={0}>
            <span>Admin</span>
            <img
              src="https://placehold.co/40x40/png?text=AD&font=roboto&fontSize=18&bg=acc9b9"
              alt="Admin Profile Picture"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="content">
          <nav className="breadcrumb" aria-label="Breadcrumb Navigation">
            Dashboard
          </nav>
          <section aria-labelledby="overview-title">
            <h2 id="overview-title" style={{ marginBottom: "20px" }}>
              Overview
            </h2>
            <div className="overview-cards" role="list" aria-label="Overview Statistics">
              <article className="overview-card" role="listitem">
                <div className="overview-card-info">
                  <div className="value" aria-label="28 Total Company Branches">
                    28
                  </div>
                  <div className="overview-card-label">Total Company Branches</div>
                </div>
                <span
                  className="material-icons icon"
                  aria-hidden="true"
                  title="Company Branches"
                >
                  apartment
                </span>
              </article>
              <article className="overview-card" role="listitem">
                <div className="overview-card-info">
                  <div className="value" aria-label="12,567 Total Employees">
                    12,567
                  </div>
                  <div className="overview-card-label">Total Employees</div>
                </div>
                <span
                  className="material-icons icon"
                  aria-hidden="true"
                  title="Employees"
                >
                  groups
                </span>
              </article>
              <article className="overview-card" role="listitem">
                <div className="overview-card-info">
                  <div className="value" aria-label="6,245 Total Managers">
                    6,245
                  </div>
                  <div className="overview-card-label">Total Managers</div>
                </div>
                <span
                  className="material-icons icon"
                  aria-hidden="true"
                  title="Managers"
                >
                  supervisor_account
                </span>
              </article>
            </div>
          </section>

          <section aria-label="Details Section" className="details-container">
            {/* Employees List */}
            <section
              className="employee-list-panel"
              aria-labelledby="employee-list-title"
              tabIndex={-1}
            >
              <h3
                id="employee-list-title"
                className="employee-list-header"
                tabIndex={-1}
              >
                <span
                  className="material-icons icon"
                  aria-hidden="true"
                  title="Employees List"
                >
                  groups
                </span>
                Employees List
              </h3>
              <input
                type="search"
                aria-label="Search Employees"
                placeholder="Search"
                className="employee-search"
                onChange={() => {}}
              />
              <ul role="list" style={{ overflowY: "auto", maxHeight: "calc(100% - 140px)", paddingLeft:0 ,margin:0}}>
                {employees.map((emp, idx) => (
                  <li
                    key={emp.id}
                    className={`employee-item ${idx === 0 ? "selected" : ""}`}
                    tabIndex={0}
                    role="listitem"
                    aria-current={idx === 0}
                  >
                    <img
                      className="employee-avatar"
                      src={emp.avatar}
                      alt={`Profile picture of ${emp.name}`}
                      loading="lazy"
                    />
                    <div className="employee-details">
                      <span className="employee-name">{emp.name}</span>
                      <span className="employee-subtitle">XXXXXXX</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Attendance Details */}
            <section
              className="attendance-panel"
              aria-labelledby="attendance-details-title"
              tabIndex={-1}
            >
              <header className="attendance-header">
                <span
                  className="material-icons icon"
                  aria-hidden="true"
                  title="Attendance Details"
                >
                  event_note
                </span>
                <h3 id="attendance-details-title" style={{ margin: 0 }}>
                  Attendance Details
                </h3>
                <button
                  type="button"
                  aria-label="Previous month"
                  className="date-selector"
                  style={{ marginLeft: "auto", cursor: "default" }}
                >
                  <span className="material-icons" aria-hidden="true">
                    arrow_back_ios
                  </span>
                </button>
                <span className="date-selector" aria-label="Current month">
                  October 2022
                </span>
                <button
                  type="button"
                  aria-label="Next month"
                  className="date-selector"
                  style={{ cursor: "default" }}
                >
                  <span className="material-icons" aria-hidden="true">
                    arrow_forward_ios
                  </span>
                </button>
              </header>

              <table className="attendance-table" role="table">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Branch</th>
                    <th scope="col">Check In</th>
                    <th scope="col">Check Out</th>
                    <th scope="col">Total Hrs</th>
                  </tr>
                </thead>
                <tbody>
                  {attendance.map((item, index) => (
                    <tr key={index}>
                      <td>{item.date}</td>
                      <td>{item.branch}</td>
                      <td>{item.checkIn}</td>
                      <td>{item.checkOut}</td>
                      <td>{item.totalHrs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </section>
        </main>
      </div>
      {/* Material Icons import */}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </>
  );
}
