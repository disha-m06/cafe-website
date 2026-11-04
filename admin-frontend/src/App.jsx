
import { useState } from "react";
import "./App.css";

const API = "http://localhost:5000/api";

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [section, setSection] = useState("Dashboard");

  const [orders, setOrders] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (data.user.role !== "admin") {
        throw new Error("Admin access only.");
      }

      setUser(data.user);
      await loadData();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadData = async () => {
    try {
      const [ordersRes, reservationsRes, menuRes] = await Promise.all([
        fetch(`${API}/orders`),
        fetch(`${API}/reservations`),
        fetch(`${API}/menu`),
      ]);

      if (!ordersRes.ok || !reservationsRes.ok || !menuRes.ok) {
        throw new Error("Unable to load dashboard data.");
      }

      setOrders(await ordersRes.json());
      setReservations(await reservationsRes.json());
      setMenuItems(await menuRes.json());
    } catch (err) {
      setError(err.message);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(`${API}/orders/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error("Could not update order status.");
      }

      setOrders((items) =>
        items.map((item) =>
          item.id === id ? { ...item, status } : item
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = () => {
    setUser(null);
    setEmail("");
    setPassword("");
    setSection("Dashboard");
  };

  if (!user) {
    return (
      <div className="login-page">
        <form className="login-card" onSubmit={login}>
          <div className="brand-icon">☕</div>
          <h1>Brew & Bean</h1>
          <p>Admin Portal</p>

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Admin email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />

          {error && <p className="error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <h2>☕ Brew & Bean</h2>
        <p className="sidebar-label">ADMIN PANEL</p>

        {["Dashboard", "Orders", "Reservations", "Menu"].map((item) => (
          <button
            key={item}
            className={section === item ? "nav-active" : "nav-button"}
            onClick={() => setSection(item)}
          >
            {item}
          </button>
        ))}

        <button className="logout-button" onClick={logout}>
          Logout
        </button>
      </aside>

      <main className="admin-main">
        <header className="topbar">
          <div>
            <h1>{section}</h1>
            <p>Welcome, {user.name}</p>
          </div>
          <button className="refresh-button" onClick={loadData}>
            Refresh
          </button>
        </header>

        {error && <p className="error">{error}</p>}

        {section === "Dashboard" && (
          <div className="stats-grid">
            <Stat title="Total Orders" value={orders.length} />
            <Stat title="Reservations" value={reservations.length} />
            <Stat title="Menu Items" value={menuItems.length} />
          </div>
        )}

        {section === "Orders" && (
          <DataTable
            title="Customer Orders"
            headers={["ID", "Customer", "Phone", "Amount", "Status"]}
            rows={orders.map((order) => [
              `#${order.id}`,
              order.customer_name,
              order.phone,
              `₹${order.total_amount}`,
              <select
                value={order.status}
                onChange={(e) => updateStatus(order.id, e.target.value)}
                key={order.id}
              >
                {["Pending", "Preparing", "Completed", "Cancelled"].map(
                  (status) => (
                    <option key={status}>{status}</option>
                  )
                )}
              </select>,
            ])}
          />
        )}

        {section === "Reservations" && (
          <DataTable
            title="Customer Reservations"
            headers={["ID", "Name", "Phone", "Date", "Time", "Guests"]}
            rows={reservations.map((item) => [
              `#${item.id}`,
              item.name,
              item.phone,
              item.date,
              item.time,
              item.guests,
            ])}
          />
        )}

        {section === "Menu" && (
          <DataTable
            title="Cafe Menu"
            headers={["ID", "Item", "Category", "Price", "Available"]}
            rows={menuItems.map((item) => [
              `#${item.id}`,
              item.name,
              item.category,
              `₹${item.price}`,
              item.available ? "Yes" : "No",
            ])}
          />
        )}
      </main>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="stat-card">
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}

function DataTable({ title, headers, rows }) {
  return (
    <section className="table-card">
      <h2>{title}</h2>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length ? (
              rows.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={headers.length}>No data available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default App;
