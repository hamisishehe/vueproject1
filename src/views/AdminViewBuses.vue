<template>

  <header class="header">
    <div class="header-logo">
      <h2><img src="@/assets/ts.png" width="70" height="70" alt="" srcset=""></h2>
    </div>
    <div class="header-links">
      <router-link to="/profile" class="profile-link">Profile</router-link>
      <a href="#" class="logout-link" @click="handleLogout">Logout</a>
    </div>
  </header>


  <div class="admin-dashboard">
    <!-- Sidebar -->
    <aside class="sidebar">

      <nav class="sidebar-nav">
        <router-link to="/admin/dashboard" class="nav-link">
          <i class="fas fa-chart-line"></i> Dashboard
        </router-link>
        <router-link to="/admin/adminroute" class="nav-link">
          <i class="fas fa-plus"></i> Add Route
        </router-link>
        <router-link to="/admin/adminbus" class="nav-link active">
          <i class="fas fa-bus"></i> Add Bus
        </router-link>
        <router-link to="/admin/viewbuses" class="nav-link">
          <i class="fas fa-eye"></i> View Buses
        </router-link>
        <router-link to="/admin/viewroute" class="nav-link">
          <i class="fas fa-map-marked-alt"></i> View Routes
        </router-link>
        <a href="#" class="nav-link" @click="handleLogout">
          <i class="fas fa-sign-out-alt"></i> Logout
        </a>
      </nav>
    </aside>


    <!-- Main Content -->
    <main class="main-content">
      <div class="dashboard-content">
        <h2>View Buses</h2>
        <table class="bus-table">
          <thead>
          <tr>
            <th>Name</th>
            <th>Number Plate</th>
            <th>Capacity</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="bus in buses" :key="bus._id">
            <td>{{ bus.name }}</td>
            <td>{{ bus.numberPlate }}</td>
            <td>{{ bus.capacity }}</td>
            <td>
              <button @click="deleteBus(bus._id)">Delete</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>

  <footer class="footer">
    <p>&copy; 2024 Your Company Name. All rights reserved.</p>
  </footer>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AdminViewBuses',
  data() {
    return {
      buses: [],
    };
  },
  created() {
    this.fetchBuses();
  },
  methods: {
    handleLogout() {
      // Perform logout action here
      // For example, clear local storage, redirect to login page, etc.
      console.log("Logout clicked");
      // Replace the following line with actual logout logic
      // Example: Clear local storage and redirect to login
      localStorage.removeItem("token"); // Example: Clear token from localStorage
      this.$router.push("/"); // Redirect to login page after logout
    },

    async fetchBuses() {
      try {
        const response = await axios.get('http://localhost:3000/api/buses');
        this.buses = response.data;
      } catch (error) {
        console.error('Error fetching buses:', error);
      }
    },
    async deleteBus(busId) {
      try {
        await axios.delete(`http://localhost:3000/api/buses/${busId}`);
        // Remove the deleted bus from the local array
        this.buses = this.buses.filter(bus => bus._id !== busId);
        console.log('Bus deleted successfully');
      } catch (error) {
        console.error('Error deleting bus:', error);
      }
    },
  },
};
</script>

<style scoped>
.admin-dashboard {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px; /* Sidebar width adjusted to 25% */
  background: #333;
  color: #fff;
  padding: 20px;
}

.sidebar-header {
  text-align: center;
  margin-bottom: 20px;
}
.sidebar-nav .nav-link i {
  margin-right: 10px; /* Adjust spacing between icon and text */
}

.sidebar-header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.sidebar-nav {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  margin-bottom: 5px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-link.active {
  background-color: #555;
}

.main-content {
  flex: 1; /* Main content flex to take remaining space */ /* Main content width adjusted to 75% */
  padding: 20px;
  background: #f0f0f0; /* Example background color for main content */
}

.dashboard-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.dashboard-content h2 {
  margin-bottom: 10px;
  color: #333;
}

.bus-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.bus-table th,
.bus-table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}

.bus-table th {
  background-color: cadetblue;
  color: #fff;
}

.bus-table td {
  background-color: #f9f9f9;
}
td{
  color: black;
}

button {
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #c82333;
}


.header {
  background-color: cadetblue;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
}

.header-links {
  display: flex;
  align-items: center;
}

.profile-link,
.logout-link {
  color: #fff;
  text-decoration: none;
  margin-left: 10px;
}

.profile-link:hover,
.logout-link:hover {
  text-decoration: underline;
}


.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
}

</style>
