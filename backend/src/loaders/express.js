import bodyParser from 'body-parser';
import cors from 'cors';
import postsRoute from '../components/posts/postsAPI';

export default async app => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.use('/api/v1/posts', postsRoute);

  app.get('/', (req, res) => res.send('Hello word!!!'));
  return app;
};
