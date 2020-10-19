import axios, { AxiosResponse } from "axios";
import { Quote } from "../types";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const quotesUrl = `${baseUrl}/quotes`;
const quoteUrl = (id: number | string) => `${quotesUrl}/${id}`;

export type RequestResult<T> =
  | ({ success: true } & { data: T })
  | ({ success: false } & { message: string });

const processRequest = async <T>(
  responsePromise: Promise<AxiosResponse<T>>
): Promise<RequestResult<T>> => {
  try {
    const response = await responsePromise;
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.message ?? error.message,
    };
  }
};

export const getQuotes = async (): Promise<
  RequestResult<{ quotes: Quote[] }>
> => {
  return await processRequest(axios.get(quotesUrl));
};

export const getQuote = async (
  id: number | string
): Promise<RequestResult<{ quote: Quote }>> => {
  return await processRequest(axios.get(quoteUrl(id)));
};

export const createQuote = async (
  content: string,
  authorName: string
): Promise<RequestResult<{ quote: Quote }>> => {
  return await processRequest(axios.post(quotesUrl, { content, authorName }));
};

export const editQuote = async (
  id: number | string,
  content: string,
  authorName: string
): Promise<RequestResult<{ quote: Quote }>> => {
  return await processRequest(axios.put(quoteUrl(id), { content, authorName }));
};

export const deleteQuote = async (
  id: number | string
): Promise<RequestResult<void>> => {
  return processRequest(axios.delete(quoteUrl(id)));
};
