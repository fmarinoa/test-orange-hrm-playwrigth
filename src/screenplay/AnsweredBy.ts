import { Actor } from '../actors/Actor';

export interface AnsweredBy<T> {
  answeredBy(actor: Actor): Promise<T> | T;
}
