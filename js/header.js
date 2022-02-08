class Header extends HTMLElement{
    constructor() {
        super ();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <h1>Test Custom Reusable Header</h1>
        </header>
        `;
    }
}

customElements.define('header-custom-element', Header);