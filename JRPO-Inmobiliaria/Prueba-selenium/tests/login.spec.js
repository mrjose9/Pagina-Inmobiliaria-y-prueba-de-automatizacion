// Importar las bibliotecas necesarias
const { Builder, By } = require("selenium-webdriver");  // Importar clases y métodos de selenium-webdriver
const fs = require("fs");  // Importar el módulo File System de Node.js

// Define la suite de pruebas con Mocha
describe('Login', () => { 

    // Define una prueba utilizando el bloque "it"
    it('Login with standard_user credential', async () => {  

        // Crea una instancia del controlador (driver) para el navegador Chrome
        let driver = new Builder().forBrowser('chrome').build(); 

        try {
            // Abre la página de inicio de sesión en el navegador
            await driver.get('file:///C:/Users/G/Desktop/JRPO-Inmobiliaria/log-reg.html') 
            
            //---
            await driver.findElement(By.css('[data-test="login-button-emp"]')).click();

            // Encuentra el elemento de nombre de usuario mediante su id y envia la palabra "usuario" al input.
            await driver.findElement(By.id('login-email')).sendKeys('admin@example.com') 

            // Encuntra el elemento de contraseña mediante su id y envia la palabra "102030" al input.
            await driver.findElement(By.id('login-password')).sendKeys('1234') 

            // Encontra el botón de inicio de sesión por su selector CSS y hace clic en él
            await driver.findElement(By.css('[data-test="login-button"]')).click(); 

            // Hace una captura de pantalla utilizando la función takeScreenshot()
            const screenshotData = await driver.takeScreenshot();
            
            // Guarda los datos de la captura de pantalla en un archivo llamado "screenshot.png"
            fs.writeFileSync("screenshot.png", screenshotData, "base64");

            // Esperar 5 segundos (5000 milisegundos)
            await driver.sleep(5000);
        } finally {
            // Cerrar la instancia del controlador y finalizar la prueba
            await driver.quit(); 
        }
    }); 
});
