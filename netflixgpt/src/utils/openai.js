import OpenAI from "openai";
import { openAiKey } from "./constants";

const openai = new OpenAI({
  apiKey: process.env[openAiKey], // This is the default and can be omitted
});

export default openai;
