const authenticatedNavTemplate = document.createElement('template');

authenticatedNavTemplate.innerHTML = `
<header>
    <nav class="nav-container">
      <div class="mobile-nav-toggle" aria-controls="nav-link-list" aria-expanded="false">
        <span class="sr-only">Menu</span>
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>

      <div class="nav-logo">
        <a href="/">
          <div class="nav-title">
            <span class="bold-font blue-text">Culer</span><span class="bold-font red-text">Store</span>
          </div>
        </a>
      </div>

      <div class="nav-links">
        <ul class="nav-link-list" id="nav-link-list" data-visible="false">
          <a href="/index.html">
            <li class="nav-link-list-item">Home</li>
          </a>

          <a href="/boots.html">
            <li class="nav-link-list-item">Boots</li>
          </a>

          <a href="/kits.html">
            <li class="nav-link-list-item">Football Kits</li>
          </a>
        </ul>
      </div>

      <div class="search-bar">
        <button class="btn btn-search" type="submit"><i class="far fa-search"></i></button>
        <input type="text" placeholder="Search" id="search-input" class="search-input padding-075-1">
      </div>

      <div class="nav-social-links">
        <ul>

          <li class="social-link-list-items">
            <a href="/login.html"><button class="btn btn-text-primary padding-05-1" id="nav-btn-login">Sign Out</button></a>
          </li>

          <li class="social-link-list-items">
            <a href="/wishlist.html">
              <span>
                <span class="badge-container">
                  <span class="nav-btns" id="nav-wishlist"><i class="material-icons">favorite_border</i></span>
                  <span class="status-badge status-text">5</span>
                </span>
              </span>
            </a>
          </li>

          <li class="social-link-list-items">
            <a href="/cart.html">
              <span class="badge-container">
                <span class="nav-btns"><i class="material-icons">shopping_bag</i></span>
                <span class="status-badge status-text">3</span>
              </span>
            </a>
          </li>

        </ul>
      </div>
    </nav>
  </header>
`;

document.body.appendChild(authenticatedNavTemplate.content);

const navLinks = document.querySelector("#nav-link-list");
const navToggle = document.querySelector(".mobile-nav-toggle");

const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

navToggle.addEventListener("click", () => {
    const visibility = navLinks.getAttribute("data-visible");

    if (visibility === "false") {

        navLinks.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        document.body.style.overflow = "hidden";
        document.body.style.background = " rgba(0, 0, 0, 0.4)";

        line1.classList.add("translate");
        line2.classList.add("rotate-135deg");
        line3.classList.add("rotate-45deg");
    } else {
        navLinks.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        document.body.style.overflow = "visible";
        document.body.style.background = "none";

        line1.classList.remove("translate");
        line2.classList.remove("rotate-135deg");
        line3.classList.remove("rotate-45deg");
    }
});

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
  
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
        clearTimeout(resizeTimer);
    }, 400);
});