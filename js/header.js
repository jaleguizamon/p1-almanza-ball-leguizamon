class Header extends HTMLElement{
    constructor() {
        super ();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="row">
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
        `;
    }
}

customElements.define('header-custom-element', Header);