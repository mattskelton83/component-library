import { newE2EPage } from '@stencil/core/testing';

describe('my-hero', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-hero></my-hero>');

    const element = await page.find('my-hero');
    expect(element).toHaveClass('hydrated');
  });
});
