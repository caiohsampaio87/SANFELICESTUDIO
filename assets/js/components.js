// Shared site components: loads the navbar and footer into every page,
// marks the current page in the navbar and wires up the newsletter form.
// Needs a web server (e.g. Live Server) — fetch() does not work on file://.

// Which navbar link is active on each page
const NAV_BY_PAGE = {
  "aboutme.html": "aboutme",
  "contact.html": "contact",
  "portraits.html": "gallery",
  "editorials.html": "gallery",
  "projects.html": "gallery",
};

// Replace a placeholder <div id="..."> with the component's HTML
async function loadComponent(placeholderId, url) {
  const placeholder = document.getElementById(placeholderId);
  if (!placeholder) return;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const template = document.createElement("template");
    template.innerHTML = await response.text();
    placeholder.replaceWith(template.content);
  } catch (error) {
    console.error(`Could not load ${url}:`, error);
  }
}

// Navbar: aria-current="page" on the link for the current page
function markCurrentPage() {
  const page = location.pathname.split("/").pop() || "index.html";
  const key = NAV_BY_PAGE[page];
  if (!key) return;
  document.querySelector(`.site-nav [data-nav="${key}"]`)?.setAttribute("aria-current", "page");
}

// Footer: Substack signup confirmation message
function initNewsletter() {
  const form = document.querySelector(".footer-substack__form");
  const message = document.querySelector(".footer-substack__message");
  if (!form || !message) return;

  form.addEventListener("submit", () => {
    form.hidden = true;
    message.textContent = "Almost done — check your inbox to confirm.";
    message.hidden = false;
  });
}

Promise.all([
  loadComponent("site-navbar", "components/navbar.html"),
  loadComponent("site-footer", "components/footer.html"),
]).then(() => {
  markCurrentPage();
  initNewsletter();
});
