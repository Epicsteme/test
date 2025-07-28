//add header navigation
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header id="header">
        
        <nav class="navbar navbar-expand-lg m-0" aria-label="Primary navigation">
            
            <a href="./" class="navbar-brand" aria-current="page">
                
                <h1 class="text-start m-0" aria-hidden="true">
                    Epicsteme
                </h1>
                
            </a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu" aria-controls="toggleMobileMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="toggleMobileMenu">
                <ul class="navbar-nav ms-auto" role="menubar">
                    <li class="ms-3" role="none">
                        <a class="nav-link" href="./" role="menuitem"> Home </a>
                    </li>
                    <li class="ms-3" role="none">
                        <a class="nav-link" href="blog.html" role="menuitem"> Blog </a>
                    </li>
                    <li class="ms-3" role="none">
                        <a class="nav-link" href="literature.html" role="menuitem"> Literature </a>
                    </li>
                    <li class="ms-3" role="none">
                        <a class="nav-link" href="3d-models.html" role="menuitem"> 3D Models </a>
                    </li>
                    <li class="ms-3" role="none">
                        <a class="nav-link" href="https://pikonparadox.itch.io/" target="_blank" rel="noopener noreferrer" role="menuitem"> Games </a>
                    </li>
                    <li class="ms-3" role="none">
                        <a class="nav-link" href="about.html" role="menuitem"> About </a>
                    </li>
                </ul>
            </div>
        </nav>
        <hr class="mt-0 mb-2">
    </header> `;
  }
}

//implement function header
customElements.define("my-header", MyHeader);

//

//add footer navigation
class FooterNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<footer class="container-lg text-center mb-3" aria-label="Footer navigation">
    <hr class="container-lg">
    <nav aria-label="Footer site links">
        <ul class="list-inline mb-0" role="menubar">
            <li class="list-inline-item" role="none"><a href="./" role="menuitem">Home</a></li>
            <li class="list-inline-item" role="none"><a href="blog.html" role="menuitem">Blog</a></li>
            <li class="list-inline-item" role="none"><a href="literature.html" role="menuitem">Literature</a></li>
            <li class="list-inline-item" role="none"><a href="3d-models.html" role="menuitem">3D Models</a></li>
            <li class="list-inline-item" role="none"><a href="https://pikonparadox.itch.io/" target="_blank" rel="noopener noreferrer" role="menuitem">Games</a></li>
            <li class="list-inline-item" role="none"><a href="about.html" role="menuitem">About</a></li>
        </ul>
    </nav>
</footer>
        `;
  }
}

//implement function footer
customElements.define("footer-nav", FooterNav);

//Load Bootstrap CSS and JS from a CDN
class SiteAssets extends HTMLElement {
  connectedCallback() {
    // Add Bootstrap CSS CDN
    if (!document.getElementById("bootstrap-css-cdn")) {
      const link = document.createElement("link");
      link.id = "bootstrap-css-cdn";
      link.rel = "stylesheet";
      link.href =
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css";
      link.integrity =
        "sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr";
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    }

    // Add Bootstrap JS CDN
    if (!document.getElementById("bootstrap-js-cdn")) {
      const script = document.createElement("script");
      script.id = "bootstrap-js-cdn";
      script.src =
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js";
      script.integrity =
        "sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q";
      script.crossOrigin = "anonymous";
      script.onload = () => {
        // Dispatch a custom event when Bootstrap JS is loaded
        document.dispatchEvent(new Event("bootstrap:loaded"));
      };
      document.head.appendChild(script);
    } else {
      // If already loaded, dispatch immediately
      document.dispatchEvent(new Event("bootstrap:loaded"));
    }
  }
}

// Implement function to load Bootstrap assets
customElements.define("site-assets", SiteAssets);
