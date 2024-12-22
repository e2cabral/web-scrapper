import {httpClient, URL} from "./infra/http";
import {getElementAttribute, getElementText} from "./infra/scrapper";

const app = async () => {
  const response = await httpClient(URL.cnnBrasil).get('/economia');

  const titles = getElementText<string>('h3.block__news__title', response.data);
  const images = getElementAttribute<string>(
    'figure.block__news__thumb > img',
    response.data,
    'src'
  );

  console.log('#### TITLES:', titles);
  console.log('#### IMGS:', images);
}

app().then();