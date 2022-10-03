import { newE2EPage } from '@stencil/core/testing';

describe('input-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-alert></input-alert>');

    const element = await page.find('input-alert');
    expect(element).toHaveClass('hydrated');
  });
});
