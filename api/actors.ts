import express = require('express');

let router = express.Router();

let actors = [
  {firstName: 'Forest', lastName: 'Whittaker'},
  {firstName: 'Samuel', lastName: 'Jackson'},
  {firstName: 'Denzel', lastName: 'Washington'}
];

// get all actors
router.get('/', (req, res) => {
  res.json(actors);
});

// post a new actor
router.post('/', (req, res) => {
  let newActor = req.body;
  actors.push(newActor);
  res.sendStatus(201);
});

export default router;

// api/actors.ts
