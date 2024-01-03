import { newE2EPage } from '@stencil/core/testing';

describe('pc-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pc-ambulance-wl-app></pc-ambulance-wl-app>');

    const element = await page.find('pc-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
