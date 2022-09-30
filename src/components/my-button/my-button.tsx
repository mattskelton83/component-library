import { Component, h, Prop } from '@stencil/core';

interface ButtonI {
  text: string;
  appearance: string;
}

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton implements ButtonI {

  @Prop() text: string;
  @Prop() appearance: string;

  render() {
    return (
      <button class={`btn ${this.appearance}`} type='button'>
        {this.text}
      </button>
    );
  }

}
