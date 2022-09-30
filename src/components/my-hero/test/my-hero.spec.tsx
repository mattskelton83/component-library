import { newSpecPage } from '@stencil/core/testing';
import { MyHero } from '../my-hero';

describe('my-hero', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyHero],
      html: `<my-hero></my-hero>`,
    });
    expect(page.root).toEqualHtml(`
      <my-hero>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-hero>
    `);
  });
});
