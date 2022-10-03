import { Component, Host, h, Listen } from '@stencil/core';

@Component({
  tag: 'input-alert',
  styleUrl: 'input-alert.css',
  shadow: true,
})
export class InputAlert {
  message: string = 'test';

  @Listen('inputChange')
  inputChangedHandler(event: CustomEvent) {
    this.message = event.detail;
  }

  clickHandler = () => {
    alert(this.message);
  }

  render() {
    return (
      <Host>
        <my-input></my-input>
        <my-button text="Click me" onClick={this.clickHandler}></my-button>
      </Host>
    );
  }
}
