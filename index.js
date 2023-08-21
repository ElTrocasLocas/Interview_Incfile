const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({
        headless: false
        //defaultViewport: null //(I cant use this feature because I have puppeteer v 1.0.0 and I don't know how to change it yet)
        // going to ask Rene how to change on Monday lmao
    });
    const page = await browser.newPage();
    await page.goto('https://trello.com/b/QvHVksDa/personal-work-goals');
    const texto1 = await page.$eval('#board > div:nth-child(1) > div > div.list-cards.u-fancy-scrollbar.js-list-cards.has-margin-bottom > a:nth-child(1) > div.list-card-details.js-card-details > span', element => element.textContent);
    const texto2 = await page.$eval('#board > div:nth-child(1) > div > div.list-cards.u-fancy-scrollbar.js-list-cards.has-margin-bottom > a:nth-child(2) > div.list-card-details.js-card-details > span', element => element.textContent);
    const texto3 = await page.$eval('#board > div:nth-child(1) > div > div.list-cards.u-fancy-scrollbar.js-list-cards.has-margin-bottom > a:nth-child(3) > div.list-card-details.js-card-details > span', element => element.textContent);
    const texto4 = await page.$eval('#board > div:nth-child(1) > div > div.list-cards.u-fancy-scrollbar.js-list-cards.has-margin-bottom > a:nth-child(4) > div.list-card-details.js-card-details > span', element => element.textContent);
    const texto5 = await page.$eval('#board > div:nth-child(2) > div > div.list-cards.u-fancy-scrollbar.js-list-cards.has-margin-bottom > a:nth-child(1) > div.list-card-details.js-card-details > span', element => element.textContent);
    await page.waitForTimeout(3069);
     await page.goto('https://todoist.com/auth/login');
    await page.waitForTimeout(2000);
    await page.type('#element-0','ElTrocasLocas@hotmail.com');
    await page.waitForTimeout(1000);
    await page.type('#element-3','ContrasenaCreativa@!lmao');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Enter')
    await page.waitForTimeout(5000); 
    await page.keyboard.press('q');
    await page.type('.ProseMirror',texto1);
    await page.waitForTimeout(2000); 
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    await page.keyboard.press('q');
    await page.type('.ProseMirror',texto2);
    await page.waitForTimeout(2000); 
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    await page.keyboard.press('q');
    await page.type('.ProseMirror',texto3);
    await page.waitForTimeout(2000); 
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    await page.keyboard.press('q');
    await page.type('.ProseMirror',texto4);
    await page.waitForTimeout(2000); 
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    await page.keyboard.press('q');
    await page.type('.ProseMirror',texto5);
    await page.waitForTimeout(2000); 
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000); 
}
   )();