class Header extends HTMLElement{
    constructor() {
        super ();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="row desktopHeader">
                <div class="col-2">
                    <a href="index.html"><img src="img/HarveyLogo.png" alt="Harvey Logo" class="img-fluid"></a>
                </div>
                <div class="col-10 navDiv">
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="menu.html">Menu</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="catering.html">Catering</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="join.html">Join our team</a>
                        </li>
                    </ul>
                </div>
        </header>
        <header class="mobileHeader">
            <nav class="navbar row">
        
            <a class="col-3 navbar-brand" href="index.html"><img src="img/HarveyLogo.png" alt="Harvey Logo" class="img-fluid"></a>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMobile"
            aria-controls="navbarMobile" aria-expanded="false" aria-label="Toggle navigation"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg></button>
            
            
            <!-- Collapsible content -->
            <div class="collapse navbar-collapse" id="navbarMobile">
            
                <!-- Links -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="menu.html">Menu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="catering.html">Catering</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="join.html">Join our team</a>
                    </li>
                </ul>
                <!-- Links -->
            
            </div>
            <!-- Collapsible content -->
            
            </nav>
            <!--/.Navbar-->
        </header>
        `;
    }
}

customElements.define('header-custom-element', Header);