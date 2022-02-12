class Header extends HTMLElement{
    constructor() {
        super ();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <div>
                <p>Logo goes here</p>
            </div>
            <div>
                <ul class="nav justify-content-end">
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