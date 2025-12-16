import { LitElement, html } from 'lit';
import { customElement, property } from "lit/decorators.js";

@customElement('ilw-spacer')
export default class Spacer extends LitElement {
    @property() 
    height: string = '20px';

    constructor() {
        super();
        this.height = '20px';
    }

    render() {
        return html`
        <div role="presentation" style="box-sizing: border-box; display: block; padding: 0 0 ${this.height} 0; margin: 0; background-color: transparent; visibility: hidden;"></div>
    `;
    }
}

declare global {
interface HTMLElementTagNameMap {
    "ilw-spacer": Spacer;
  }
}