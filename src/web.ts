import { WebPlugin } from '@capacitor/core';

import type { HelpcrunchPlugin } from './definitions';

export class HelpcrunchWeb extends WebPlugin implements HelpcrunchPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
