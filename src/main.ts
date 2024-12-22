import axios from 'axios';
import * as cheerio from 'cheerio';

const main = async () => {
  const response = await axios.get('https://www.cnnbrasil.com.br/economia/');

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

main().then();