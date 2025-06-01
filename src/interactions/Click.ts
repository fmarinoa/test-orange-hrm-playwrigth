import { Interaction } from '../screenplay/Interaction';
import { Actor } from '../actors/Actor';
import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class Click implements Interaction {
    static on(selector: string) {
        return new Click(selector);
    }

    constructor(private readonly selector: string) {}

    async performAs(actor: Actor): Promise<void> {
        const page = actor.abilityTo(BrowseTheWeb).getPage();
        await page.click(this.selector);
    }
}
