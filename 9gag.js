const puppeteer = require("puppeteer");
var cron = require("node-cron");
console.clear();
(async () => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: "YOUR_WS_LINK_FROM_TERMINAL",
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1111, height: 777 });
    await page.goto("YOUR_9GAG_COMMENT_URL");
    await page.waitForTimeout(5555);
    await page.click("div.comment-list-item__text");
    for (let i = 0; i < 20; i++) {
      await page.keyboard.press("Backspace", { delay: 777 });
    }
    await page.keyboard.type("Top of the morning, gentlemen! :)", {
      delay: 1111,
    });
    await page.waitForTimeout(4444);
    const btnList = await page.$$(
      "button.comment-input-area-footer__actions-area_action.post"
    );
    await btnList[1].click();
    await page.waitForTimeout(22222);
    await page.close();
  } catch (error) {
    console.error(error);
    console.error(error);
    console.error(`%c Shit went south man`, `color: pink;`);
  }

  // M H D M W
  cron.schedule(
    "11 1 * * *",
    async () => {
      await sendGoodMorning();
    },
    {
      scheduled: true,
      timezone: "Africa/Windhoek",
    }
  );
})();
