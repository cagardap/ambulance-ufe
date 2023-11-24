import { newSpecPage } from '@stencil/core/testing';
import { PcAmbulanceWlList } from '../pc-ambulance-wl-list';

describe('pc-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PcAmbulanceWlList],
      html: `<pc-ambulance-wl-list></pc-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <pc-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pc-ambulance-wl-list>
    `);
  });
});
