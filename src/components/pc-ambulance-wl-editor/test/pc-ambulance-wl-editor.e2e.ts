import { newE2EPage } from '@stencil/core/testing';

describe('pc-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pc-ambulance-wl-editor></pc-ambulance-wl-editor>');

    const element = await page.find('pc-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
