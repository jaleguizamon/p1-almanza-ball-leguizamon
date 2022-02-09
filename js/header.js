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
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Menu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Catering</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Join our team</a>
                     </li>
                </ul>
            </div>
        </header>
        `;
    }
}

customElements.define('header-custom-element', Header);