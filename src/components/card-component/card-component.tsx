import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'card-component',
  styleUrl: 'card-component.css',
  shadow: false,
})
export class CardComponent {
  @Prop() cardTitle: string | null = null;
  @Prop() cardClass: string = '';
  @Prop() cardHeaderClass: string = '';

  render() {
    return (
      <div class={`card p-2 ${this.cardClass}`}>
        {this.cardTitle && (
          <div class={`card__header ${this.cardHeaderClass}`}>
            <h3>{this.cardTitle}</h3>
          </div>
        )}
        <slot></slot>
      </div>
    );
  }
}
