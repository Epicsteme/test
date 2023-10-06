//add header navigation
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <div class="container-lg d-flex flex-column" id="header">

        <nav class="navbar navbar-expand-lg  m-0">

            <a href="./"
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
                           href="./"> Home </a>
                    </li>
                    <li class="ms-3">
                        <a class="nav-link"
                           href="blog.html"> Blog </a>
                    </li>
                    <li class="ms-3">
                    <a class="nav-link"
                    href="movies.html"> Movies </a>
                    </li>
                    <li class="ms-3">
                    <a class="nav-link"
                    href="paintings.html"> Paintings </a>
                    </li>
                    <li class="ms-3">
                    <a class="nav-link"
                    href="eggshells.html"> Eggshells </a>
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

    <div class="my-2">
    <a href="home.html"> Home </a>
    </div>

    <div class="my-2">
    <a href="blog.html"> Blog </a>
    </div>

    <div class="my-2">
    <a href="movies.html"> Movies </a>
    </div>

    <div class="my-2">
    <a href="paintings.html"> Paintings </a>
    </div>

    <div class="my-2">
    <a href="eggshells.html"> Eggshells </a>
    </div>

    <div class="my-2">
    <a href="literature.html"> Literature </a>
    </div>

    <div class="my-2">
    <a href="3d-models.html"> 3D Models </a>
    </div>
    
    <div class="my-2">
    <a href="photography.html"> Photography </a>
    </div>

</div>
`
    }
}
//implement function
customElements.define('footer-nav', FooterNav)


