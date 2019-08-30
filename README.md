This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Code Challenge

Base API 
##### `https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency`

Expected Outcome
##### `--data '{ "requests" :[{ "indexName" : "ikea" , "params" : "query=cheese&hitsPerPage=16" }]}'`

Create the following JavaScript application:
1. On the top we have a text input field which takes the query param.
2. Below that we display a list or grid of products with their image and name.
3. When I type in the search field, the following should happen.
4. After there is a change in the field, wait for 200ms.
5. If there is another change in that timeframe, reset the time counter and start it again.
6. If there are no more changes in the timeframe, fire off an Ajax call to load the data (with the text from the field as query param).
7. If the input changes again during the runtime of the Ajax call, cancel it. Go to step 1 (i.e. Wait for 200ms etc).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
