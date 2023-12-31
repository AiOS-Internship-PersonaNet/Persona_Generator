from apikey import apikey
from prompts import *

from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.callbacks import StdOutCallbackHandler


llm = OpenAI(temperature=0, openai_api_key=apikey)

handler = StdOutCallbackHandler()

values = []
i = 0
while(i < 10):
    values.append(input("Enter your value: "))
    i += 1

chain_list = []
questionnaire_chain = LLMChain(llm=llm, prompt=questionnaire_prompt_template, verbose=True)
persona = questionnaire_chain.run(
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

print(persona)
