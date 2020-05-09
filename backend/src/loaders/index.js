import expressLoader from './express';
import mongoDbLoader from './mongo';

export default async (expressApp) => {
    mongoDbLoader();
    expressLoader(expressApp);
};