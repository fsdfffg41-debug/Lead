// Admin Dashboard JavaScript

const ADMIN_PASSWORD = 'Admin2026';
let isLoggedIn = false;

// Login Handler
function handleLogin(e) {
  e.preventDefault();
  const password = document.getElementById('passwordInput').value;
  
  if (password === ADMIN_PASSWORD) {
    isLoggedIn = true;
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('adminContainer').classList.add('show');
    updateTime();
    setInterval(updateTime, 1000);
    
    // Set active section
    showSection('dashboard');
  } else {
    showError('Invalid password');
    document.getElementById('passwordInput').value = '';
  }
}

// Error Handler
function showError(msg) {
  const errorEl = document.getElementById('errorMessage');
  if (errorEl) {
    errorEl.textContent = msg;
    errorEl.classList.add('show');
    setTimeout(() => errorEl.classList.remove('show'), 3000);
  }
}

// Logout Handler
function handleLogout() {
  if (confirm('Are you sure you want to logout?')) {
    isLoggedIn = false;
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('adminContainer').classList.remove('show');
    document.getElementById('passwordInput').value = '';
  }
}

// Section Navigation
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.dashboard-section').forEach(el => {
    el.classList.remove('active');
  });
  
  // Show selected section
  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.add('active');
  }

  // Update menu links
  document.querySelectorAll('.menu-link').forEach(el => {
    el.classList.remove('active');
  });
  
  const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  // Update header title
  const titles = {
    dashboard: 'Dashboard',
    users: 'Users',
    leads: 'Leads Data',
    subscriptions: 'Subscriptions',
    content: 'Content',
    pages: 'Pages',
    analytics: 'Analytics',
    settings: 'Settings'
  };
  
  const titleEl = document.getElementById('sectionTitle');
  if (titleEl) {
    titleEl.textContent = titles[sectionId] || 'Dashboard';
  }
}

// Modal Management
function openModal(modalType) {
  const modalId = modalType + 'Modal';
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(event, modalType) {
  // Allow closing by clicking outside or on close button
  if (event && event.target.id !== modalType + 'Modal') {
    return;
  }
  
  const modalId = modalType + 'Modal';
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
}

// Close modal when clicking outside
document.addEventListener('click', function (event) {
  if (event.target.classList && event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    const modals = document.querySelectorAll('.modal.show');
    modals.forEach(modal => {
      modal.classList.remove('show');
    });
    document.body.style.overflow = 'auto';
  }
});

// User Management
function handleAddUser(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  // Simulate API call
  alert('User "' + formData.get('name') + '" added successfully!');
  closeModal(null, 'addUser');
  e.target.reset();
}

function editUser(btn) {
  const row = btn.closest('tr');
  const userName = row.querySelector('td:nth-child(1)').textContent;
  alert('Edit user: ' + userName);
}

// Content Management
function handleEditContent(e) {
  e.preventDefault();
  alert('Content updated successfully!');
  closeModal(null, 'editContent');
  e.target.reset();
}

// Page Management
function handleCreatePage(e) {
  e.preventDefault();
  alert('Page created successfully!');
  closeModal(null, 'createPage');
  e.target.reset();
}

function editPage() {
  alert('Edit page functionality');
}

// Leads Management
function handleImportLeads(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  alert('Leads from ' + formData.get('country') + ' imported successfully!');
  closeModal(null, 'importLeads');
  e.target.reset();
}

// Time Update
function updateTime() {
  const now = new Date();
  const timeEl = document.getElementById('currentTime');
  if (timeEl) {
    timeEl.textContent = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  }
}

// Data Refresh Functions
function refreshDashboard() {
  // Simulate data refresh
  console.log('Dashboard data refreshed');
}

function exportData(format) {
  alert('Exporting data as ' + format.toUpperCase());
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
  // Set initial state
  const loginScreen = document.getElementById('loginScreen');
  const adminContainer = document.getElementById('adminContainer');
  
  if (loginScreen && adminContainer) {
    loginScreen.style.display = 'flex';
    adminContainer.classList.remove('show');
  }
});

// Export functions for HTML onclick handlers
window.handleLogin = handleLogin;
window.showError = showError;
window.handleLogout = handleLogout;
window.showSection = showSection;
window.openModal = openModal;
window.closeModal = closeModal;
window.handleAddUser = handleAddUser;
window.editUser = editUser;
window.handleEditContent = handleEditContent;
window.handleCreatePage = handleCreatePage;
window.editPage = editPage;
window.handleImportLeads = handleImportLeads;
window.updateTime = updateTime;
window.refreshDashboard = refreshDashboard;
window.exportData = exportData;
