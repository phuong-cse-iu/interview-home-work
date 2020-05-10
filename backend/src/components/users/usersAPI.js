import express from 'express';
import users from '../../data/users.json';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(users);
});

export default router;