# multillama js

`multillama.js` is a lightweight Node.js library that lets you connect to various LLM (Large Language Model) providers. Currently, it supports **Ollama** and **OpenAI** directly. You can import each provider from `multillama` and use their native methods as needed.

## Installation

Install with npm:

```bash
npm install multillama
```

## Usage

After installation, you can import the providers and use their native methods:

### Ollama

```javascript
import { Ollama } from 'multillama';

Ollama.chat({
  model: 'default-model',
  messages: [{ role: 'user', content: 'Hello!' }],
}).then(response => {
  console.log(response.message.content.trim());
});
```

### OpenAI

```javascript
import { OpenAI } from 'multillama';

OpenAI.chat.completions.create({
  messages: [{ role: 'user', content: 'What can you do?' }],
  model: 'gpt-3.5-turbo',
}).then(response => {
  console.log(response.choices[0].message.content);
});
```

## Configuration

For OpenAI, you need to set an environment variable for the API key. Create a `.env` file in your project root:

```plaintext
OPENAI_API_KEY=your_openai_api_key_here
```

## Supported Providers

- **Ollama**: Access and interact with Ollama models.
- **OpenAI**: Use OpenAI GPT models.
