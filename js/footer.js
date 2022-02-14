class Footer extends HTMLElement{
    constructor() {
        super ();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="row desktopFooter">
            <div class="col-2 socialDiv">
                <div>
                    <a href="https://www.facebook.com/theharveybakeryokc" target="_blank"><img src="img/facebookIcon.png" alt="Facebook" class="img-fluid"></a>
                </div>
                <div>
                    <a href="http://instagram.com/theharveybakery" target="_blank"><img src="img/instagramIcon.png" alt="Instagram" class="img-fluid"></a>
                </div>
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
        </footer>
        <footer class="row mobileFooter">
            <div class="col-4 socialDiv">
                <a href="index.html"><img src="img/logo2.png" alt="Harvey Logo" class="img-fluid"></a>
            </div>
            <div class="col-8 navDiv">
                <ul class="nav flex-column">
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