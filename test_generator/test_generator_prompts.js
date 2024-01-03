import { PromptTemplate } from "langchain/prompts";
export const persona1 = `The analyzed persona is someone who is thoughtful and considerate when making decisions.
They are open to seeking help from friends when making decisions, but they don't take too long to choose their favorite snack. 
They prefer to follow rules while playing games and think about how their choices impact others. 
They are also good at thinking about potential outcomes of a certain choice and take their time when choosing a book, exploring all options before making a decision. 
They also like to create a plan before deciding what to do and think it's important to consider others' opinions before making a choice. 
This person is someone who is organized and takes their time to make sure they make the best decision for themselves and those around them. 
They are reliable and take into account the feelings of others when making decisions.`
export const persona2 = `The analyzed persona is someone who is thoughtful and considerate when making decisions. 
They are a 5 on seeking help from friends when making decisions, a 4 on how long it takes to choose their favorite snack,
 a 6 on following rules while playing games, 
 a 7 on considering how their choices impact others, a 7 on thinking about potential outcomes of a certain choice, 
 a 5 on thinking about how fun it will be to read when choosing a book, a 4 on exploring all options before making a choice, 
 a 6 on creating a plan before deciding what to do, 
 and a 7 on thinking it's important to consider others' opinions before making a choice. 
 This person is likely to take their time when making decisions, as they like to explore all options and think about potential outcomes. 
 They are also likely to seek advice from friends and consider how their choices will affect others.
They are organized and like to create a plan before deciding what to do. 
They are also likely to take into account the opinions of others before making a decision. 
This person is likely to be a good listener and take their time to make sure they make the best decision possible.`
const template = `Given the two user's personas , persona number 1:{persona1}//
persona number 2: {persona2}.//
Provide an example of an dramatized and realistic script of a 16 sentence engaging 
conversation between the two personas as well as the  affinity score and answers between these two users using realistic language that would have occurred in a chance meeting for both relaxed on the topic of discussion.
Dramatize this conversation into a social media post for a new social media platform that posts conversation between two users with bold emotional turns and entertaining twists in the conversation.
`

export let prompt_template = new PromptTemplate({
    inputVariables: ["persona1", "persona2"],
    template: template,
});

