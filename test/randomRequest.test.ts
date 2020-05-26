import axios, { AxiosRequestConfig } from 'axios';
import { requestMethods } from 'src/baseRequest'
import { randomRecipe } from 'routes/recipes/randomRecipe';
import appConfig from 'src/config'

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
const returnRequestConfig = (config: AxiosRequestConfig) => Promise.resolve({config});

mockedAxios.request.mockImplementation(returnRequestConfig);

describe('Method get in RandomRecipe class', () => {
  it('has configured correct HTTP method', () => {
    return randomRecipe.get().then(({config}) => {
      expect(config.method).toBe(requestMethods.GET);
    })
  });

  it('has configured correct URL address', () => {
    return randomRecipe.get().then(({config}) => {
      const expectedUrl = `https://api.spoonacular.com/recipes/random`;
      expect(config.url).toBe(expectedUrl);
    })
  });

  it('uses correct API key to make a request', () => {
    return randomRecipe.get().then(({config}) => {
      expect(config.params.apiKey).toBe(appConfig.API_KEY);
    })
  })
});
