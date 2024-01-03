import {
    ChatPromptTemplate,
    FewShotChatMessagePromptTemplate,
    PromptTemplate
} from "langchain/prompts";

// let questionnaire_prompt = `This program asks questions and based on the responses the program will output a persona based on the responses.
// Each persona should be specific to each set of responses.
// RESPONSES:
// On a scale from 1-10 the persona is a {input_1} about enjoying seeking help from friends when making decisions.
// On a scale from 1-10 the persona is a {input_2} about how long it take a long time to choose their favorite snack.
// On a scale from 1-10 the persona is a {input_3} about preferring to follow rules while playing games.
// On a scale from 1-10 the persona is a {input_4} about considering how their choices impact others.	
// On a scale from 1-10 the persona is a {input_5} on thinking about potential outcomes of a certain choice.
// On a scale from 1-10 the persona is a {input_6} about preferring making decisions quickly or taking their time.
// On a scale from 1-10 the persona is a {input_7} about how much he like to read. 	
// On a scale from 1-10 the persona is a {input_8} about liking to explore all options before making a choice.
// On a scale from 1-10 the persona is a {input_9} about preferring creating a plan before deciding what to do.
// On a scale from 1-10 the persona is a {input_10} about thinking it's important to consider others' opinions before making a choice.
// Develop a persona based on their responses to 10 specific decision-making and preference questions, each rated on a scale from 1-10. This analysis should focus on identifying key personality traits, values, emotional tendencies, social compatibility, and long-term goals. Based on these insights, the program will create a detailed, conversation-capable persona.

// For instance, a high score in seeking help from friends (input_1) may indicate a persona that is collaborative and sociable, whereas a low score could suggest a more independent and self-reliant character. Similarly, a high score in considering how choices impact others (input_4) suggests a persona that is empathetic and considerate in conversations.

// The generated persona should realistically reflect the user's personality profile, enabling it to engage in dynamic, contextually relevant conversations. This includes inferring additional traits that logically align with the given responses, thereby enhancing the persona's depth and realism. Additionally, the persona should demonstrate adaptability, altering its conversational style and responses based on the context of the interaction, mirroring real-world human behavior and thought processes.`
let questionnaire_prompt = `Responses:
Input_1: Collaborative User Rating: {input_1}
Input_2: Patient User Rating: {input_2}
Input_3: Conventional User Rating: {input_3}
Input_4: Considerate User Rating: {input_4}
Input_5: Strategic User Rating: {input_5}
Input_6: Decisive User Rating: {input_6}
Input_7: Enjoyable User Rating: {input_7}
Input_8: Exploratory User Rating: {input_8}
Input_9: Methodical User Rating: {input_9}
Input_10: Open-minded User Rating: {input_10}
Open_ended_input: {input_11}`


const examples = [
    {
        input: `Responses:
        Input_1: Collaborative User Rating: 1
        Input_2: Patient User Rating: 1
        Input_3: Conventional User Rating: 1
        Input_4: Considerate User Rating: 1
        Input_5: Strategic User Rating: 1
        Input_6: Decisive User Rating: 1
        Input_7: Enjoyable User Rating: 1
        Input_8: Exploratory User Rating: 1
        Input_9: Methodical User Rating: 1
        Input_10: Open-minded User Rating: 1
        Open_ended_input: I have no interests,`,
        output: "This persona is not collaboarative, not patient, not conventional, not considerate, not strategic, not decisive, not enjoyable, not exploratory, not methodical, not open-minded, and has no interest"
    },
    {
        input: `Responses:
        Input_1: Collaborative User Rating: 8
        Input_2: Patient User Rating: 3
        Input_3: Conventional User Rating: 2
        Input_4: Considerate User Rating: 9
        Input_5: Strategic User Rating: 6
        Input_6: Decisive User Rating: 1
        Input_7: Enjoyable User Rating: 10
        Input_8: Exploratory User Rating: 9
        Input_9: Methodical User Rating: 3
        Input_10: Open-minded User Rating: 8
        Open_ended_input: I like to watch sports,`,
        output: "This persona is very collaborative, not very patient, very considerate, somewhat strategic, not decisive, extremely enjoyable, very exploratory, not very methodical, very open-minded, and likes to watch sports."
    },

]
const examplePrompt = ChatPromptTemplate.fromTemplate(`Human: {input}
AI: {output}`);

export const fewShotPrompt = new FewShotChatMessagePromptTemplate({
    prefix:
        "Develop a persona based on these responses to 10 specific decision-making and preference questions, each rated on a scale from 1-10. This analysis should focus on identifying key personality traits, values, emotional tendencies, social compatibility, and long-term goals.",
    suffix: "Human: {input}",
    examplePrompt,
    examples,
    inputVariables: ["input"],
});
export let questionnaire_template = new PromptTemplate({
    inputVariables: ["input_1", "input_2", "input_3", "input_4", "input_5", "input_6", "input_7", "input_8", "input_9", "input_10", "input_11"],
    template: questionnaire_prompt,
});

