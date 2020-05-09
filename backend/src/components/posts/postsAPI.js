import express from 'express';
import posts from '../../data/posts.json';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('posts', posts);
  res.send(posts);
});

export default router;