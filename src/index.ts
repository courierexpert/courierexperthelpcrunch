import { registerPlugin } from '@capacitor/core';

import type { HelpcrunchPlugin } from './definitions';

const Helpcrunch = registerPlugin<HelpcrunchPlugin>('Helpcrunch', {
  web: () => import('./web').then(m => new m.HelpcrunchWeb()),
});

export * from './definitions';
export { Helpcrunch };
