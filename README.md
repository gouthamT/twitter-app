## About the app
Actually, there are two separated apps. The Client which serves the FrontEnd (using React), and the API (in Node & Express).

## How to run the API
1. In your terminal, navigate to the `api` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app.
4. Run `npm run dev` to start the app with watch task.

## How to run the Client

```
prerequisite -> make sure to update twitterClient consumer and keys @ api\common\twitterClient.js to connect to twitter account
```

1. In another terminal, navigate to the `client` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app
4. Run `npm run build` to build the app.
5. Run `npm test` to test the app.

## Launch the app & api together
1. Start the api -  [How to run the API](https://github.com/gouthamT/twitter-app#how-to-run-the-api).
2. Open browser and launch `http://localhost:9000/` url.
