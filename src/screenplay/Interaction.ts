import { Actor } from '../actors/Actor';
import { PerformsAction } from './PerformsAction';

export interface Interaction extends PerformsAction {
    performAs(actor: Actor): Promise<void>;
}
