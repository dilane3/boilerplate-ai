import { Configuration, OpenAIApi } from "openai";

// Settings
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || "";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// Some helper functions

/**
 * Generate a letter based on a prompt
 * @param prompt string
 * @returns
 */
export const generateLetter = async (
  configuration: { role: "user"; content: string }[]
) => {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "you are an expert in writing letters",
      },
      ...configuration,
    ],
    temperature: 1,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  if (response.status === 200) {
    return {
      success: true,
      data: response.data.choices[0],
    };
  }

  return {
    success: false,
    error: "Something went wrong",
  };
};

/**
 * Transalte a prompt to a language
 * @param prompt string
 * @param language string
 * @returns
 */
export const translate = async (prompt: string, language: string) => {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "you are an expert in translating",
      },
      {
        role: "user",
        content: `Translate the text below into ${language}`,
      },
      {
        role: "user",
        content: `Here is the text: "${prompt}"`,
      }
    ],
    temperature: 1,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  if (response.status === 200) {
    return {
      success: true,
      data: response.data.choices[0],
    };
  }

  return {
    success: false,
    error: "Something went wrong",
  };
};

export const regenerateSentence = async (prompt: string, history: any) => {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "you are an expert in writing letters",
      },
      ...history,
      {
        role: "user",
        content: `Please rewrite the following sentence: "${prompt}" base on the previous conversation`,
      },
    ],
  });

  if (response.status === 200) {
    return {
      success: true,
      data: response.data.choices[0],
    };
  }

  return {
    success: false,
    error: "Something went wrong",
  };
};
