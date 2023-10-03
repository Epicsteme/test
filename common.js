//add header navigation
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="header">

        <nav class="navbar navbar-expand-lg  m-0">

            <a href="https://epicsteme.github.io/"
               class="navbar-brand">
                <h1 class="text-start m-0">
                    Aditya
                </h1>
            </a>

            <button class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#toggleMobileMenu"
                    aria-controls="toggleMobileMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation">

                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse "
                 id="toggleMobileMenu">
                <ul class="navbar-nav ms-auto">
                    <li class="ms-3">
                        <a class="nav-link"
                           href="https://epicsteme.github.io/"> Home </a>
                    </li>
                    <li class="ms-3">
                        <a class="nav-link"
                           href="blog.html"> Blog </a>
                    </li>
                    <li class="ms-3">
                    <a class="nav-link"
                    href="literature.html"> Literature </a>
                    </li>
                    <li class="ms-3">
                        <a class="nav-link"
                           href="3d-models.html"> 3D Models </a>
                    </li>
                    <li class="ms-3">
                        <a class="nav-link"
                           href="photography.html"> Photography </a>
                    </li>
                </ul>

            </div>

        </nav>

        <hr class="mt-0 mb-3">
    </div>
        `
    }
}

//implement function
customElements.define('my-header', MyHeader)


//add footer navigation
class FooterNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<div class="container-lg text-center mb-3">
        
<hr class="container-lg">

<a href="https://epicsteme.github.io/"> Home </a>
|
<a href="blog.html"> Blog </a>
|
<a href="literature.html"> Literature </a>
|
<a href="3d-models.html"> 3D Models </a>
|
<a href="photography.html"> Photography </a>

</div>
`
    }
}

//implement function
customElements.define('footer-nav', FooterNav)

