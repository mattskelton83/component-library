import { newE2EPage } from '@stencil/core/testing';

describe('my-first-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-first-component></my-first-component>');

    const element = await page.find('my-first-component');
    expect(element).toHaveClass('hydrated');
  });
});
