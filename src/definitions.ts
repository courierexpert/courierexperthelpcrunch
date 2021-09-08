export interface HelpcrunchPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
