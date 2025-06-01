import { Actor } from '../actors/Actor';
import { AnsweredBy } from './AnsweredBy';

export interface Question<T> extends AnsweredBy<T> {
    answeredBy(actor: Actor): Promise<T> | T;
}
