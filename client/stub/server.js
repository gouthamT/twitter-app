const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const db = router.db;
const casual = require('casual');

casual.define('randomToDo', function() {
  return {
    id: casual.integer(1, 1000),
    label: casual.title,
    timeStamp: casual.date('YYYY-MM-DD'),
    completed: casual.boolean
  };
});

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
server.use(jsonServer.bodyParser);

// Add custom routes before JSON Server router
server.get('/ToDos', (req, res) => {
  var result = db.get('toDos').value();
  if (!result || !result.length) {
    result = [1, 2, 3, 4, 5].map(() => casual.randomToDo);
  }
  return res.jsonp(result);
});

// Add custom routes before JSON Server router
server.post('/ToDo', (req, res) => {
  var toDos = db.get('toDos');
  if (!req ||
    !req.body ||
    !req.body.id || 
    !req.body.label) { return res.status(400).jsonp('Bad Request'); }
  
  toDos.push(req.body).write();
  return res.status(200).jsonp('Success');
});

// You can use the one used by JSON Server
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

// Use default router
server.use(router);
server.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('JSON Server is running @ port 3000');
});