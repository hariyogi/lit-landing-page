import { LitElement, html } from "lit";

export class SecondElement extends LitElement {

    static properties = {
        firstName: {type: String},
        _sex: {type: Boolean, state: true, reflect: true}
    }

    constructor() {
        super();
        this.firstName = "";
        this.mode = "";
        this._sex = false;
    }

    render() {
        return html`
            <p>My Name is ${this.firstName} dan saya ${this._sex ? "Cewek" : "Cowok"}</p>
            <button @click="${() => (this._sex = !this._sex)}">Pence Saya</button>
        `;
    }
}

customElements.define("second-element", SecondElement);