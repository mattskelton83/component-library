import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-first-component',
  styleUrl: 'my-first-component.css',
  shadow: true,
})
export class MyFirstComponent {
  @Prop() blockTitle: string;

  @Prop() blockIntro: string;

  render() {
    return (
      <div>
        <h1>{this.blockTitle}</h1>
        <p>{this.blockIntro}</p>
      </div>
    );
  }
}
