import { Actor } from '../actors/Actor';
import { PerformsAction } from './PerformsAction';

export interface Task extends PerformsAction {
    performAs(actor: Actor): Promise<void>;
}
