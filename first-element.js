import { LitElement, html } from "lit";

import './second-element';

export class FirstElement extends LitElement {
    render() {
        return html`
            <p>Ini Element Pertama Saya</p>
            <second-element firstname="Jeremi"></second-element>
        `
    }

}

customElements.define("first-element", FirstElement);