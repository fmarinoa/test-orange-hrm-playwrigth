export class Actor {
  private name: string;
  private abilities: Map<Function, any> = new Map();

  constructor(name: string) {
    this.name = name;
  }

  whoCan(...abilities: any[]) {
    for (const ability of abilities) {
      this.abilities.set(ability.constructor, ability);
    }
    return this;
  }

  abilityTo<T>(ability: new (...args: any[]) => T): T {
    const found = this.abilities.get(ability);
    if (!found) {
      throw new Error(`Actor ${this.name} does not have ability: ${ability.name}`);
    }
    return found;
  }

  attemptsTo(...tasks: any[]) {
    return tasks.reduce((promise, task) => {
      return promise.then(() => task.performAs(this));
    }, Promise.resolve());
  }

  asks(question: any) {
    return question.answeredBy(this);
  }
}
