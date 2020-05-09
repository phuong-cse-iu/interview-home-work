import express from 'express';
import loaders from './src/loaders';

const app = express();
(async () => await loaders(app))();
// app.listen(PORT, () => console.log('Server is listening on port', PORT));
export default app;
