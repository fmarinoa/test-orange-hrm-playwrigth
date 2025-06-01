import { Actor } from '../actors/Actor';
import { Type } from '../interactions/Type';
import { Click } from '../interactions/Click';
import { LoginPage } from '../pages/LoginPage';

export class Login {
  static withCredentials(username: string, password: string) {
    return new Login(username, password);
  }

  constructor(private username: string, private password: string) {}

  async performAs(actor: Actor) {
    await actor.attemptsTo(
      Type.theText(this.username).into(LoginPage.usernameField),
      Type.theText(this.password).into(LoginPage.passwordField),
      Click.on(LoginPage.loginButton)
    );
  }
}
