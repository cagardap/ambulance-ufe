import { newSpecPage } from '@stencil/core/testing';
import { PcAmbulanceWlApp } from '../pc-ambulance-wl-app';

describe('pc-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [PcAmbulanceWlApp],
      html: `<pc-ambulance-wl-app base-path="/"></pc-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("pc-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [PcAmbulanceWlApp],
      html: `<pc-ambulance-wl-app base-path="/ambulance-wl/"></pc-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("pc-ambulance-wl-list");
  });
});