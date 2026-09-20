import { Link } from "react-router-dom";

function AdminDashboard() {

  return (
    <div className="admin-page">

      <div className="admin-header">

        <div>
          <h1>☕ Cafe Admin Dashboard</h1>
          <p>Manage your cafe website</p>
        </div>

        <Link to="/" className="admin-home">
          Home
        </Link>

      </div>


      {/* DASHBOARD SUMMARY */}

      <div className="dashboard-summary">

        <div className="summary-card">
          <h2>📦</h2>
          <h3>Total Orders</h3>
          <strong>120</strong>
        </div>

        <div className="summary-card">
          <h2>🛍️</h2>
          <h3>Today's Orders</h3>
          <strong>24</strong>
        </div>

        <div className="summary-card">
          <h2>📅</h2>
          <h3>Total Reservations</h3>
          <strong>35</strong>
        </div>

        <div className="summary-card">
          <h2>🍔</h2>
          <h3>Menu Items</h3>
          <strong>18</strong>
        </div>

      </div>


      {/* ADMIN SECTIONS */}

      <div className="dashboard-cards">

        <div className="dashboard-card">

          <h2>📦</h2>

          <h3>Orders</h3>

          <p>
            View orders and change order status.
          </p>

          <button>
            View Orders
          </button>

        </div>


        <div className="dashboard-card">

          <h2>📅</h2>

          <h3>Reservations</h3>

          <p>
            View customer reservations.
          </p>

          <button>
            View Reservations
          </button>

        </div>


        <div className="dashboard-card">

          <h2>🍔</h2>

          <h3>Menu</h3>

          <p>
            Add, edit and delete menu items.
          </p>

          <button>
            Manage Menu
          </button>

        </div>

      </div>


      {/* ADMIN ACTIONS */}

      <div className="admin-actions">

        <h2>Admin Actions</h2>

        <button>Add Menu Item</button>

        <button>Edit Menu Item</button>

        <button>Delete Menu Item</button>

        <button>View Orders</button>

        <button>Change Order Status</button>

        <button>View Reservations</button>

      </div>

    </div>
  );
}

export default AdminDashboard;