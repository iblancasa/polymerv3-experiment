'use strict';

import {
	Element as PolymerElement
} from '@polymer/polymer/polymer-element.js';

export class Iblancasa extends PolymerElement {
	static get properties() {
		return {
			to: {
				type: String,
				value: 'kill me'
			}
		}
	}

	static get template() {
		return `
			<style>
				h1 {color: red;};
			</style>
      <h1>Please, [[to]]!</h1>
    `;
	}
}

customElements.define('iblancasa-component', Iblancasa);
