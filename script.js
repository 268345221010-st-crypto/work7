// Dark Mode
function toggleDarkMode() {

  document.body.classList.toggle("bg-gray-900");
  document.body.classList.toggle("text-white");

}

// Hamburger Menu
function toggleMenu() {

  document
    .getElementById("mobileMenu")
    .classList.toggle("hidden");

}

// Modal
function openModal() {

  document
    .getElementById("modal")
    .classList.remove("hidden");

}

function closeModal() {

  document
    .getElementById("modal")
    .classList.add("hidden");

}

// Toast
function showToast() {

  const toast =
    document.getElementById("toast");

  toast.classList.remove("hidden");

  setTimeout(() => {

    toast.classList.add("hidden");

  }, 3000);

}