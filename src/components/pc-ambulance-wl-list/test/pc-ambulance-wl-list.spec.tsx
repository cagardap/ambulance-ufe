import { newSpecPage } from '@stencil/core/testing';
import { PcAmbulanceWlList } from '../pc-ambulance-wl-list';

describe('pc-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PcAmbulanceWlList],
      html: `<pc-ambulance-wl-list></pc-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as PcAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
