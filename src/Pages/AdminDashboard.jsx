import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  const [showOrders, setShowOrders] = useState(false);
  const [showReservations, setShowReservations] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const ordersResponse = await fetch(
        "http://localhost:5000/api/orders"
      );

      const reservationsResponse = await fetch(
        "http://localhost:5000/api/reservations"
      );

      const menuResponse = await fetch(
        "http://localhost:5000/api/menu"
      );

      const ordersData = await ordersResponse.json();
      const reservationsData = await reservationsResponse.json();
      const menuData = await menuResponse.json();

      setOrders(ordersData);
      setReservations(reservationsData);
      setMenuItems(menuData);
    } catch (error) {
      console.error("Dashboard error:", error);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/orders/${orderId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update status");
      }

      // Update the order immediately on screen
      setOrders((currentOrders) =>
        currentOrders.map((order) =>
          order.id === orderId
            ? { ...order, status: newStatus }
            : order
        )
      );

    } catch (error) {
      console.error("Status update error:", error);

      alert("Unable to update order status.");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  const todaysOrders = orders.filter((order) =>
    order.created_at?.toString().startsWith(today)
  );

  const showOnlyOrders = () => {
    setShowOrders(true);
    setShowReservations(false);
    setShowMenu(false);
  };

  const showOnlyReservations = () => {
    setShowOrders(false);
    setShowReservations(true);
    setShowMenu(false);
  };

  const showOnlyMenu = () => {
    setShowOrders(false);
    setShowReservations(false);
    setShowMenu(true);
  };

  return (
    <div className="admin-page">

      {/* HEADER */}

      <div className="admin-header">

        <div>
          <h1>☕ Cafe Admin Dashboard</h1>
          <p>Manage your cafe website</p>
        </div>

        <Link to="/" className="admin-home">
          Home
        </Link>

      </div>


      {/* SUMMARY */}

      <div className="dashboard-summary">

        <div className="summary-card">
          <h2>📦</h2>
          <h3>Total Orders</h3>
          <strong>{orders.length}</strong>
        </div>

        <div className="summary-card">
          <h2>🛍️</h2>
          <h3>Today's Orders</h3>
          <strong>{todaysOrders.length}</strong>
        </div>

        <div className="summary-card">
          <h2>📅</h2>
          <h3>Total Reservations</h3>
          <strong>{reservations.length}</strong>
        </div>

        <div className="summary-card">
          <h2>🍔</h2>
          <h3>Menu Items</h3>
          <strong>{menuItems.length}</strong>
        </div>

      </div>


      {/* MAIN CARDS */}

      <div className="dashboard-cards">

        <div className="dashboard-card">

          <h2>📦</h2>

          <h3>Orders</h3>

          <p>
            View orders and change order status.
          </p>

          <button onClick={showOnlyOrders}>
            View Orders
          </button>

        </div>


        <div className="dashboard-card">

          <h2>📅</h2>

          <h3>Reservations</h3>

          <p>
            View customer reservations.
          </p>

          <button onClick={showOnlyReservations}>
            View Reservations
          </button>

        </div>


        <div className="dashboard-card">

          <h2>🍔</h2>

          <h3>Menu</h3>

          <p>
            View available menu items.
          </p>

          <button onClick={showOnlyMenu}>
            Manage Menu
          </button>

        </div>

      </div>


      {/* ORDERS */}

      {showOrders && (
        <div className="admin-data-section">

          <div className="data-section-header">

            <h2>📦 Customer Orders</h2>

            <button onClick={() => setShowOrders(false)}>
              Close
            </button>

          </div>

          <div className="table-container">

            <table>

              <thead>

                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Phone</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>

              </thead>

              <tbody>

                {orders.map((order) => (

                  <tr key={order.id}>

                    <td>#{order.id}</td>

                    <td>{order.customer_name}</td>

                    <td>{order.phone}</td>

                    <td>₹{order.total_amount}</td>

                    <td>

                      <select
                        value={order.status}
                        onChange={(event) =>
                          updateOrderStatus(
                            order.id,
                            event.target.value
                          )
                        }
                      >

                        <option value="Pending">
                          Pending
                        </option>

                        <option value="Preparing">
                          Preparing
                        </option>

                        <option value="Completed">
                          Completed
                        </option>

                        <option value="Cancelled">
                          Cancelled
                        </option>

                      </select>

                    </td>

                    <td>
                      {order.created_at
                        ? new Date(
                            order.created_at
                          ).toLocaleDateString()
                        : "-"}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>
      )}


      {/* RESERVATIONS */}

      {showReservations && (
        <div className="admin-data-section">

          <div className="data-section-header">

            <h2>📅 Customer Reservations</h2>

            <button
              onClick={() => setShowReservations(false)}
            >
              Close
            </button>

          </div>

          <div className="table-container">

            <table>

              <thead>

                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Guests</th>
                </tr>

              </thead>

              <tbody>

                {reservations.map((reservation) => (

                  <tr key={reservation.id}>

                    <td>#{reservation.id}</td>

                    <td>{reservation.name}</td>

                    <td>{reservation.phone}</td>

                    <td>{reservation.date}</td>

                    <td>{reservation.time}</td>

                    <td>{reservation.guests}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>
      )}


      {/* MENU */}

      {showMenu && (
        <div className="admin-data-section">

          <div className="data-section-header">

            <h2>🍔 Cafe Menu</h2>

            <button onClick={() => setShowMenu(false)}>
              Close
            </button>

          </div>

          <div className="table-container">

            <table>

              <thead>

                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Available</th>
                </tr>

              </thead>

              <tbody>

                {menuItems.map((item) => (

                  <tr key={item.id}>

                    <td>#{item.id}</td>

                    <td>{item.name}</td>

                    <td>{item.category}</td>

                    <td>₹{item.price}</td>

                    <td>
                      {item.available ? "Yes" : "No"}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>
      )}


      {/* ADMIN ACTIONS */}

      <div className="admin-actions">

        <h2>Admin Actions</h2>

        <button onClick={showOnlyOrders}>
          View Orders
        </button>

        <button onClick={showOnlyReservations}>
          View Reservations
        </button>

        <button onClick={showOnlyMenu}>
          Manage Menu
        </button>

      </div>

    </div>
  );
}

export default AdminDashboard;