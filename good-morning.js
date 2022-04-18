const puppeteer = require("puppeteer");
var cron = require("node-cron");

(async () => {
  function delay(time) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time);
    }).catch((err) => {
      console.log(err);
      console.log(`%c Shit went south man`, `color: pink;`);
    });
  }

  const browser = await puppeteer.connect({
    browserWSEndpoint: "YOUR_WS_CONNECTION_FROM_TERMINAL",
  });

  const sendGoodMorning = async () => {
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1111, height: 777 });
      await page.goto("YOUR_CHAT_URL");
      await delay(7777);
      await page.click("[data-qa='message_input']");
      await page.keyboard.type("Top of the morning, gentlemen!");
      await page.click("[aria-label='Send now']");
      await delay(4444);
      await page.close();
    } catch (error) {
      console.log(error);
      console.log(error);
      console.log(`%c Shit went south man`, `color: pink;`);
    }
  };

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
