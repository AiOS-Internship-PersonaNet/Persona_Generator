import { PromptTemplate } from "langchain/prompts";

let questionnaire_prompt = `This program asks questions and based on the responses the program will output a persona based on the responses.
Each persona should be specific to each set of responses.
RESPONSES:
On a scale from 1-10 the persona is a {input_1} about enjoying seeking help from friends when making decisions
On a scale from 1-10 the persona is a {input_2} about how long it take a long time to choose their favorite snack
On a scale from 1-10 the persona is a {input_3} about preferring to follow rules while playing games	
On a scale from 1-10 the persona is a {input_4} about considering how their choices impact others		
On a scale from 1-10 the persona is a {input_5} on thinking about potential outcomes of a certain choice	
On a scale from 1-10 the persona is a {input_6} about preferring making decisions quickly or taking their time
When choosing a book, on a scale from 1-10 the persona is a {input_7} on thinking about how fun it will be to read	
On a scale from 1-10 the persona is a {input_8} about liking to explore all options before making a choice
On a scale from 1-10 the persona is a {input_9} about preferring creating a plan before deciding what to do	
On a scale from 1-10 the persona is a {input_10} about thinking it's important to consider others' opinions before making a choice
Develop a persona based on their responses to 10 specific decision-making and preference questions, each rated on a scale from 1-10. This analysis should focus on identifying key personality traits, values, emotional tendencies, social compatibility, and long-term goals. Based on these insights, the program will create a detailed, conversation-capable persona.

For instance, a high score in seeking help from friends (input_1) may indicate a persona that is collaborative and sociable, whereas a low score could suggest a more independent and self-reliant character. Similarly, a high score in considering how choices impact others (input_4) suggests a persona that is empathetic and considerate in conversations.

The generated persona should realistically reflect the user's personality profile, enabling it to engage in dynamic, contextually relevant conversations. This includes inferring additional traits that logically align with the given responses, thereby enhancing the persona's depth and realism. Additionally, the persona should demonstrate adaptability, altering its conversational style and responses based on the context of the interaction, mirroring real-world human behavior and thought processes.`

export let questionnaire_template = new PromptTemplate({
    inputVariables: ["input_1", "input_2","input_3","input_4","input_5","input_6","input_7","input_8","input_9","input_10",],
    template: questionnaire_prompt,
});

