document.addEventListener("DOMContentLoaded", () => {
    class Page {
      constructor(title) {
        this.title = title;
      }
  
      setTitle() {
        document.title = this.title;
      }
  
      animateIntro() {
        const header = document.querySelector("header");
        if (header) {
          header.classList.add("fade-in");
        }
      }
    }
  
    const themeToggle = document.getElementById("themeToggle");
    const currentTheme = localStorage.getItem("theme");
  
    // Theme from Local Storage
    if (currentTheme === "dark") {
      document.body.classList.add("dark");
      if (themeToggle) themeToggle.textContent = "🌞";
    }
  
    // Toggle Theme Button
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");
        themeToggle.textContent = isDark ? "🌞" : "🌙";
        localStorage.setItem("theme", isDark ? "dark" : "light");
      });
    }
  
    // Animate Header
    const page = new Page("Thanapat | Portfolio");
    page.setTitle();
    page.animateIntro();
  });
  