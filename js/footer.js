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
        </footer>
        `;
    }
}

customElements.define('footer-custom-element', Footer);