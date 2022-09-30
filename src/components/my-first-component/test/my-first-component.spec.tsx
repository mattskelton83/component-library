import { newSpecPage } from '@stencil/core/testing';
import { MyFirstComponent } from '../my-first-component';

describe('my-first-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyFirstComponent],
      html: `<my-first-component></my-first-component>`,
    });
    expect(page.root).toEqualHtml(`
      <my-first-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-first-component>
    `);
  });
});
