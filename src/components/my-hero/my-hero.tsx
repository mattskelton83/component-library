import { Component, h, Prop } from '@stencil/core';

interface MyHeroI {
  heroTitle: string;
  heroSubtitle: string;
  heroClass: string;
  heroContentClass: string;
  heroTitleClass: string;
  heroSubTitleClass: string
}

@Component({
  tag: 'my-hero',
  styleUrl: 'my-hero.css',
  shadow: true,
})
export class MyHero implements MyHeroI {

  @Prop() heroTitle: string;
  @Prop() heroSubtitle: string;

  @Prop() heroClass: string;
  @Prop() heroContentClass: string;
  @Prop() heroTitleClass: string;
  @Prop() heroSubTitleClass: string;


  render() {
    return (
      <div class={`hero ${this.heroClass}`}>
        <div class={`hero__content ${this.heroContentClass}`}>
          <h1 class={`hero__title ${this.heroTitleClass}`}>{this.heroTitle}</h1>
          <p class={`hero__subtitle ${this.heroSubTitleClass}`}>{this.heroSubtitle}</p>
        </div>
      </div>
    );
  }

}
