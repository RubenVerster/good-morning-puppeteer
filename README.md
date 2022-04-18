## Setting up Chrome to use your local data

First run this in Linux to get a websocket id

```
 /usr/bin/google-chrome-stable --remote-debugging-port=9222 --no-first-run --no-default-browser-check --user-data-dir=remote-profile

```

Copy that iws connection string and paste it in the browserWSEndpoint value in the puppeteer.connect() function.

Go to the Slack chat you want to send the message in and paste the URL for that chat in the page.goto() function

You will have to log into your sessions for this to work. But it's a once-off thing

## Adjusting the time you want to send the good morning message to

```
  //cronological message sends based off of a certain time of day
  //  # ┌────────────── second (optional)
  //  # │ ┌──────────── minute
  //  # │ │ ┌────────── hour
  //  # │ │ │ ┌──────── day of month
  //  # │ │ │ │ ┌────── month
  //  # │ │ │ │ │ ┌──── day of week
  //  # │ │ │ │ │ │
  //  # │ │ │ │ │ │
  //  # * * * * * *
  // https://www.npmjs.com/package/node-cron
```
