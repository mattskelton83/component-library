import { newSpecPage } from '@stencil/core/testing';
import { InputAlert } from '../input-alert';

describe('input-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputAlert],
      html: `<input-alert></input-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <input-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-alert>
    `);
  });
});
