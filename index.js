const puppeteer = require('puppeteer');
require('dotenv').config();
try {
    (async() => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const usuario = process.env.USUARIO;
    const contrasena = process.env.CONTRASENA;
//Copiar datos de trello
    const page = await browser.newPage();
    await page.goto('https://trello.com/b/QvHVksDa/personal-work-goals');
    const texto1 = await page.$eval('#board > div:nth-child(1) > div > div.list-cards.u-fancy-scrollbar.js-list-cards.has-margin-bottom > a:nth-child(1) > div.list-card-details.js-card-details > span', element => element.textContent);
    const texto2 = await page.$eval('#board > div:nth-child(1) > div > div.list-cards.u-fancy-scrollbar.js-list-cards.has-margin-bottom > a:nth-child(2) > div.list-card-details.js-card-details > span', element => element.textContent);
    const texto3 = await page.$eval('#board > div:nth-child(1) > div > div.list-cards.u-fancy-scrollbar.js-list-cards.has-margin-bottom > a:nth-child(3) > div.list-card-details.js-card-details > span', element => element.textContent);
    const texto4 = await page.$eval('#board > div:nth-child(1) > div > div.list-cards.u-fancy-scrollbar.js-list-cards.has-margin-bottom > a:nth-child(4) > div.list-card-details.js-card-details > span', element => element.textContent);
    const texto5 = await page.$eval('#board > div:nth-child(2) > div > div.list-cards.u-fancy-scrollbar.js-list-cards.has-margin-bottom > a:nth-child(1) > div.list-card-details.js-card-details > span', element => element.textContent);
    const textos = [texto1, texto2, texto3, texto4, texto5];
    await page.waitForTimeout(3000);

//Iniciar sesion en todoist
    await page.goto('https://todoist.com/auth/login');
    await page.waitForTimeout(2000);
    await page.type('#element-0',(`${usuario}`));
    await page.waitForTimeout(1000);
    await page.type('#element-3',(`${contrasena}`));
    await page.waitForTimeout(1000);
    await page.keyboard.press('Enter')
    await page.waitForTimeout(5000); 

//pegar la informacion
  for (const texto of textos) {
  await page.keyboard.press('q');
  await page.type('.ProseMirror', texto);
  await page.waitForTimeout(2000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
}
}
)();
} catch (error) {
    console.error('Error:', error.message);
}
