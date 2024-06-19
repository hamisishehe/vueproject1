<template>
  <div class="admin-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <h2>Admin Dashboard</h2>
      </div>
      <nav class="sidebar-nav">
        <router-link to="/admin/adminroute" class="nav-link">Add Route</router-link>
        <router-link to="/admin/adminbus" class="nav-link">Add Bus</router-link>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: "AdminLayout",
};
</script>

<style scoped>
.admin-layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
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

.nav-link:hover {
  background-color: #555;
}

.main-content {
  flex: 1;
  padding: 20px;
}
</style>
