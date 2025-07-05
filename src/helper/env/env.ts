import dotenv from 'dotenv';
import path from 'path';

export const getEnv = () => {
    dotenv.config({
        override: true,
        path: path.resolve(__dirname, `./.env.${process.env.ENVIRONMENT}`)
    });
};