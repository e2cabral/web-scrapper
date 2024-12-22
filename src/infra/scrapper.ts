import {load} from 'cheerio';

export const buildScrapper = (data: unknown) => {
  return load(data);
}

export const getElementText = <T>(tag: string, data: unknown): Array<T> => {
  const $ = buildScrapper(data)
  const text = []

  $(tag).each((i, el) => {
    text.push($(el).text());
  });

  return text;
}

export const getElementAttribute = <T>(tag: string, data: unknown, attr: string): Array<T> => {
  const $ = buildScrapper(data)
  const attrs = []

  $(tag).each((i, el) => {
    attrs.push($(el).attr(attr));
  });

  return attrs;
}