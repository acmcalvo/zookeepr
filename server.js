const app = express();

// Now we just need to use one method to make our server listen. We're going to chain the listen() method onto our server to do it. To do that, add the following code to the end of server.js:
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });