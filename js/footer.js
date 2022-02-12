class Footer extends HTMLElement{
    constructor() {
        super ();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div>
                <div>
                    <p>Social Icon</p>
                </div>
                <div>
                    <p>Social Icon</p>
                </div>
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
        </footer>
        `;
    }
}

customElements.define('footer-custom-element', Footer);