import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const quotesUrl = `${baseUrl}/quotes`;
const quoteUrl = (id: number) => `${quotesUrl}/${id}`;

export const getQuotes = async () => {
  return await axios.get(quotesUrl);
};

export const getQuote = async (id: number) => {
  return await axios.get(quoteUrl(id));
};

export const createQuote = async (content: string, authorName: string) => {
  return await axios.post(quotesUrl, { content, authorName });
};

export const editQuote = async (
  id: number,
  content: string,
  authorName: string
) => {
  return await axios.put(quoteUrl(id), { content, authorName });
};

export const deleteQuote = async (id: number) => {
  return await axios.delete(quoteUrl(id));
};
