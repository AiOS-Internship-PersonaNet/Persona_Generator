import { OpenAI } from "langchain/llms/openai";
import { LLMChain } from "langchain/chains";

import { apikey } from "./apikey.js"
import { questionnaire_template} from "./prompt.js"
// const { apikey } = require('./utility.js')
// const { questionnaire_template}  = require('./prompt.js');

const llm = new OpenAI({
    openAIApiKey: apikey,
});

const num_questions = 10;
let values = [];
for(let i = 0; i < num_questions; i++){
    values.push(Math.floor(Math.random() * 10) + 1); 
}

// let chain_list = []
const chainA = new LLMChain({ llm: llm, prompt: questionnaire_template,});

const persona = await chainA.call({ 
    input_1: values[0], 
    input_2: values[1], 
    input_3: values[2], 
    input_4: values[3],
    input_5: values[4],
    input_6: values[5],
    input_7: values[6],
    input_8: values[7],
    input_9: values[8],
    input_10: values[9],
 });

 console.log({ persona });