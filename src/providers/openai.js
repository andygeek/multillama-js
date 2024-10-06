import OpenAI from 'openai';

const openai = (apiKey) => {
  if (!apiKey) {
    throw new Error('API Key is missing. Please provide it as an argument.');
  }

  return new OpenAI({ apiKey });
};

export default openai;