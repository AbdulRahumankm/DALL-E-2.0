import express from 'express';
import * as dotenv from 'dotenv';
/* import { Configuration , OpenAIApi } from 'openai'; */ 
import OpenAI from 'openai';



dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

/* const configuration= new OpenAIApi(Configuration); */

router.route('/').get((req, res) => {
  res.send('Hello from DELL-E')
});

export default router