import { newE2EPage } from '@stencil/core/testing';

describe('pc-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pc-ambulance-wl-list></pc-ambulance-wl-list>');

    const element = await page.find('pc-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
