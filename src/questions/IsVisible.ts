import { Question } from '../screenplay/Question';
import { Actor } from '../actors/Actor';
import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class IsVisible implements Question<boolean> {
  static of(selector: string): Question<boolean> {
    return new IsVisible(selector);
  }

  constructor(private readonly selector: string) {}

  async answeredBy(actor: Actor): Promise<boolean> {
    const page = actor.abilityTo(BrowseTheWeb).getPage();
    return page.isVisible(this.selector);
  }
}
