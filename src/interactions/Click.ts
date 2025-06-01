import { Actor } from '../actors/Actor';
import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class Click {
  static on(selector: string) {
    return new Click(selector);
  }

  constructor(private selector: string) {}

  async performAs(actor: Actor) {
    const page = actor.abilityTo(BrowseTheWeb).getPage();
    await page.click(this.selector);
  }
}
