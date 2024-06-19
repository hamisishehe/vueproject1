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
        <h2>Add Bus</h2>

        <!-- Success Message -->
        <div v-if="successMessage" class="alert alert-success">
          {{ successMessage }}
        </div>

        <form @submit.prevent="handleSubmit" class="form-container">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" class="form-control" required>
          </div>

          <div class="form-group">
            <label for="numberPlate">Number Plate:</label>
            <input type="text" id="numberPlate" v-model="numberPlate" class="form-control" required>
          </div>

          <div class="form-group">
            <label for="capacity">Capacity:</label>
            <input type="number" id="capacity" v-model.number="capacity" class="form-control" required>
          </div>

          <button type="submit" class="btn-submit">Add Bus</button>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "AdminDashboard",
  data() {
    return {
      name: "",
      numberPlate: "",
      capacity: 0,
      successMessage: "", // Add success message state
    };
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

    async handleSubmit() {
      const busData = {
        name: this.name,
        numberPlate: this.numberPlate,
        capacity: this.capacity,
      };

      try {
        const response = await axios.post('http://localhost:3000/api/buses', busData);
        console.log("Bus added successfully:", response.data);

        // Display success message
        this.successMessage = "Bus added successfully!";

        // Optionally, reset the form fields
        this.name = "";
        this.numberPlate = "";
        this.capacity = 0;
      } catch (error) {
        console.error("Error adding bus:", error);
        this.successMessage = ""; // Clear success message in case of error
      }
    },
    handleLogout() {
      localStorage.removeItem('token'); // Remove token from localStorage
      this.$router.push('/'); // Redirect to login page or homepage
    }
  },
};
</script>

<style scoped>
.admin-dashboard {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;/* Sidebar width adjusted to 25% */
  background: #333;
  color: #fff;
  padding: 20px;
}

.sidebar-header {
  text-align: center;
  margin-bottom: 20px;
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
  flex: 1; /* Main content flex to take remaining space */
  width: 75%; /* Main content width adjusted to 75% */
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

.form-container {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  color: black;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-submit {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #0056b3;
}

.alert {
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
}

.label{
  color: black;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
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
