export interface HelpcrunchPlugin {
  initialise(): Promise<any>;
  show(): Promise<any>;
}
