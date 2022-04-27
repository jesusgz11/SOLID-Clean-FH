(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement

  class InputElement {
    html: HtmlElement;
    attributes: InputAttributes;
    inputEvents: InputEvents = new InputEvents();

    constructor(value: string, placeholder: string, id: string) {
      this.html = new HtmlElement(id, 'input');
      this.attributes = new InputAttributes(value, placeholder);
    }
  }

  const nameField = new InputElement('Jesus', 'Enter first name', 'txtName');

  console.log({ nameField });
})();
