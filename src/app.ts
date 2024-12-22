import * as cheerio from 'cheerio';
import {httpClient, URL} from "./infra/http";

const app = async () => {
  const response = await httpClient(URL.cnnBrasil).get('/economia');

  const titles = [];
  const imgs = [];

  const $ = cheerio.load(response.data);

  $('h3.block__news__title').each((i, el) => {
    titles.push($(el).text());
  });

  $('figure.block__news__thumb > img').each((i, el) => {
    imgs.push($(el).attr('src'));
  });

  console.log('#### TITLES:', titles);
  console.log('#### IMGS:', imgs);
}

app().then();