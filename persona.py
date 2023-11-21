from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from apikey import apikey
from langchain.chains import LLMChain
from langchain.callbacks import StdOutCallbackHandler

llm = OpenAI(openai_api_key=apikey)

prompt = """\
On a scale from 1-10 my Persona is a {input_1} about enjoying seeking help from friends when making decisions
On a scale from 1-10 my Persona is a {input_2} about how long it take a long time to choose their favorite snack
On a scale from 1-10 my Persona is a {input_3} about prefering to follow rules while playing games	
On a scale from 1-10 my Persona is a {input_4} about considering how their choices impact others		
On a scale from 1-10 my Persona is a {input_5} on thinking about potential outcomes of a certain choice	
On a scale from 1-10 my Persona is a {input_6} about prefering making decisions quickly or taking their time
When choosing a book, on a scale from 1-10 my Persona is a {input_7} on thinking about how fun it will be to read	
On a scale from 1-10 my Persona is a {input_8} about likeing to explore all options before making a choice
On a scale from 1-10 my Persona is a {input_9} about prefering creating a plan before deciding what to do	
On a scale from 1-10 my Persona is a {input_10} about thinking it's important to consider others' opinions before making a choice
Based on these statements what job title best fits?
"""

prompt_template = PromptTemplate(
    input_variables=["input_1", "input_2","input_3","input_4","input_5","input_6","input_7","input_8","input_9","input_10",],
    template=prompt
)   

handler = StdOutCallbackHandler()

question_chain = LLMChain(llm=llm, prompt=prompt_template, callbacks=[handler])
values = []
i = 0
while(i < 10):
    values.append(input("Enter your value: "))
    i += 1

question_out = question_chain.run(
    input_1=values[0], 
    input_2=values[1], 
    input_3=values[2], 
    input_4=values[3],
    input_5=values[4],
    input_6=values[5],
    input_7=values[6],
    input_8=values[7],
    input_9=values[8],
    input_10=values[9],
)
print(question_out)
