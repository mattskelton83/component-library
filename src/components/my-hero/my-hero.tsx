import { Component, h, Prop } from '@stencil/core';

interface MyHeroI {
  title: string;
  subtitle: string;
  heroClass: string;
  heroContentClass: string;
}

@Component({
  tag: 'my-hero',
  styleUrl: 'my-hero.css',
  shadow: true,
})
export class MyHero implements MyHeroI {

  @Prop() title: string;
  @Prop() subtitle: string;

  @Prop() heroClass: string;
  @Prop() heroContentClass: string;
  @Prop() titleClass: string;
  @Prop() subTitleClass: string;


  render() {
    return (
      <div class={`hero ${this.heroClass}`}>
        <div class={`hero__content ${this.heroContentClass}`}>
          <h1 class={`hero__title ${this.titleClass}`}>{this.title}</h1>
          <p class={`hero__subtitle ${this.subTitleClass}`}>{this.subtitle}</p>
        </div>
      </div>
    );
  }

}
