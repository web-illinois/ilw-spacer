import { LitElement, html } from 'lit';

class Spacer extends LitElement {

    static get properties() {
        return {
            height: { type: String, attribute: true }
        };
    }

    constructor() {
        super();
        this.height = '20px';
    }

    render() {
        return html`
      <div role="presentation" style="padding: 0 0 ${this.height} 0; margin: 0; background-color: transparent; visibility: hidden;"></div>
    `;
    }
}

customElements.define('ilw-spacer', Spacer);