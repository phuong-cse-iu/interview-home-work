import express from 'express';
import comments from '../../data/comments.json';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(comments);
});

export default router;