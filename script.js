const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}

const copyEmail = document.getElementById("copyEmail");
const copyStatus = document.getElementById("copyStatus");
if (copyEmail) {
  copyEmail.addEventListener("click", async () => {
    const email = "bushrafatima4147@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = "Email copied to clipboard.";
    } catch {
      copyStatus.textContent = "Email: " + email;
    }
  });
}

// Replace these sample values with your real public profile URLs before publishing.
const profileUrls = {
  linkedin: "https://www.linkedin.com/in/bushra-fatima-a442492ab",
  github: "https://github.com/syeda-bushra-fatima-4147/python_project"
};
document.querySelectorAll("[data-placeholder-link]").forEach(link => {
  const key = link.getAttribute("data-placeholder-link");
  if (profileUrls[key]) {
    link.href = profileUrls[key];
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.addEventListener("click", event => {
      event.preventDefault();
      alert("Please add your real " + (key === "linkedin" ? "LinkedIn" : "GitHub") + " profile URL in script.js before publishing.");
    });
  }
});
