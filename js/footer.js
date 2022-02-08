class Footer extends HTMLElement{
    constructor() {
        super ();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <h1>Test Custom Reusable Footer</h1>
        </footer>
        `;
    }
}

customElements.define('footer-custom-element', Footer);