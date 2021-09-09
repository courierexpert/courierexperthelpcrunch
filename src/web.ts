import { WebPlugin } from '@capacitor/core';

import type { HelpcrunchPlugin } from './definitions';

export class HelpcrunchWeb extends WebPlugin implements HelpcrunchPlugin {
  async initialise(): Promise<any> {

    return new Promise( (resolve) => {
      resolve("Not implemented")
    });

  }
  async show(): Promise<any> {

    return new Promise( (resolve) => {
      resolve("Not implemented")
    });

  }
}
