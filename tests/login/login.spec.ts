import { test, expect } from '@playwright/test';
import { Actor } from '../../src/actors/Actor';
import { BrowseTheWeb } from '../../src/abilities/BrowseTheWeb';
import { Login } from '../../src/tasks/Login';
import { IsVisible } from '../../src/questions/IsVisible';
import { Wait } from '../../src/utils/Wait';

test('Login fallido', async ({ page }) => {
    // Configura el actor con la habilidad de navegar
    const actor = new Actor('Usuario').whoCan(BrowseTheWeb.using(page));

    // Navega a la página de login
    await page.goto('/');

    // Intenta hacer login con credenciales incorrectas
    await actor.attemptsTo(
        Login.withCredentials('usuario_invalido', 'clave_incorrecta')
    );

    await Wait.for(2000);

    // Verifica que el mensaje de error sea visible
    const errorSelector = 'div.oxd-alert-content--error';
    const esVisible = await actor.asks(IsVisible.of(errorSelector));
    console.log(`El mensaje de error es visible: ${esVisible}`);
    expect(esVisible).toBeTruthy(); 
});
