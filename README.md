# [rewrite AI](http://rewrite-ai.vercel.app)

This project rewrites pieces of text for you using AI. It is currently a WIP. This repo is based on [a template by @Nutlope](https://github.com/Nutlope/twitterbio)


## How it works

This project uses the [ChatGPT API](https://openai.com/api/) and the [Vercel AI SDK](https://sdk.vercel.ai/docs) with streaming. It constructs a prompt based on the form and user input, sends it to the ChatGPT API with a Vercel Edge Function, then streams the response back to the application UI.

## Running Locally

After cloning the repo, go to [OpenAI](https://beta.openai.com/account/api-keys) to make an account and put your API key in a file called `.env`.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
pnpm run dev
```
