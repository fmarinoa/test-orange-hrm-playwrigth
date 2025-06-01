import { Actor } from '../actors/Actor';
import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class Type {
  static theText(value: string) {
    return {
      into: (selector: string) => new Type(value, selector),
    };
  }

  constructor(private value: string, private selector: string) { }

  async performAs(actor: Actor) {
    const page = actor.abilityTo(BrowseTheWeb).getPage();
    await page.fill(this.selector, this.value);
  }
}
