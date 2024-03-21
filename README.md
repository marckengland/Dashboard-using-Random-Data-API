# User Data Fetcher
This program fetches user data from the Random Data API and displays it on the page.

## How it works
The program listens for the `DOMContentLoaded` event on the document and the `load` event on the window. When these events are fired, it calls the `fetchData` function.
The `fetchData` function constructs a URL for the Random Data API, with the type set to 'users'. It sets the number of users to display to 15 and the response type to JSON.
The function then fetches the data from the URL. If the response is not ok, it throws an error. If the response is ok, it converts the response to JSON and passes it to the `showUsers` function.
The `showUsers` function is responsible for displaying the user data.

## How to run the program
Open `index.html` in your browser.

## Error handling
If there's an error in fetching the data, the program logs the error to the console.

## Future improvements
- Add error handling for the `showUsers` function.
- Allow the user to specify the number of users to display.
