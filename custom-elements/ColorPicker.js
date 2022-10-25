export default class ColorPicker extends HTMLElement {
    constructor() {
      super();
      // Get template
      const template = document.getElementById('color-picker-template');
      // Get template content
      const templateContent = template.content;
      // Attach shadow DOM to DOM
      const shadowRoot = this.attachShadow({mode: 'open'});
      // Append a deep clone of the template content to the shadow root
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
}