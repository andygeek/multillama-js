import OpenAI from 'openai';
import 'dotenv/config';

const apiKey = process.env.OPENAI_API_KEY;
const client = new OpenAI({ apiKey });

export default client;