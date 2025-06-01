import { Interaction } from '../screenplay/Interaction';
import { Actor } from '../actors/Actor';
import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class Type implements Interaction {
  static theText(value: string) {
    return {
      into: (selector: string) => new Type(value, selector),
    };
  }

  constructor(private readonly value: string, private readonly selector: string) { }

  async performAs(actor: Actor): Promise<void> {
    const page = actor.abilityTo(BrowseTheWeb).getPage();
    await page.fill(this.selector, this.value);
  }
}
