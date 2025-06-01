import { Task } from '../screenplay/Task';
import { Actor } from '../actors/Actor';
import { Type } from '../interactions/Type';
import { Click } from '../interactions/Click';
import { LoginPage } from '../pages/LoginPage';

export class Login implements Task {
  static withCredentials(username: string, password: string): Task {
    return new Login(username, password);
  }

  constructor(private readonly username: string, private readonly password: string) {}

  async performAs(actor: Actor): Promise<void> {
    await actor.attemptsTo(
      Type.theText(this.username).into(LoginPage.usernameField),
      Type.theText(this.password).into(LoginPage.passwordField),
      Click.on(LoginPage.loginButton)
    );
  }
}
