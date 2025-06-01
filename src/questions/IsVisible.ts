import { Actor } from '../actors/Actor';
import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class IsVisible {
  static of(selector: string) {
    return new IsVisible(selector);
  }

  constructor(private selector: string) {}

  async answeredBy(actor: Actor): Promise<boolean> {
    const page = actor.abilityTo(BrowseTheWeb).getPage();
    return page.isVisible(this.selector);
  }
}
