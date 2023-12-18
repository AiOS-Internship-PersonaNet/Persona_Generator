import { OpenAI } from "langchain/llms/openai";
import { LLMChain } from "langchain/chains";

import { apikey } from "./apikey.js"
import { prompt_template, persona1, persona2} from "./test_generator_prompts.js"

const llm = new OpenAI({
    openAIApiKey: apikey,
    verbose: true,
    temperature: 0.4,
});

const llm_chain = new LLMChain({ llm: llm, prompt: prompt_template,});

const persona = await llm_chain.call({ 
    persona1: persona1, 
    persona2: persona2, 
 });

 console.log({ persona });