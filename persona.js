import { OpenAI } from "langchain/llms/openai";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { LLMChain } from "langchain/chains";

import { apikey } from "./apikey.js"
import { questionnaire_template, fewShotPrompt } from "./prompt.js"

const llm = new OpenAI({
    openAIApiKey: apikey,
    verbose: true,
});
const model = new ChatOpenAI({
    openAIApiKey: apikey,
    verbose: true,
});
const num_questions = 11;
let values = [];
for (let i = 0; i < num_questions; i++) {
    let input = Math.floor(Math.random() * 10) + 1;
    values.push(input);
}

// const chainA = new LLMChain({ llm: llm, prompt: questionnaire_template, });

const input = await questionnaire_template.format({
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
    input_11: "I enjoy art and painting",
});
console.log(input)
console.log("-----------------")
const formattedPrompt = await fewShotPrompt.format({
    input: input,
});

const response = await model.invoke(formattedPrompt);
console.log("-----------------")
console.log( response );
console.log("-----------------")
