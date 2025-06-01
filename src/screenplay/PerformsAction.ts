import { Actor } from '../actors/Actor';

export interface PerformsAction {
  performAs(actor: Actor): Promise<void>;
}
