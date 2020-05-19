import baseRequest from "../../baseRequest"; // todo: configure aliases to use it as 'services/recepies/random'

class RandomRecipe extends baseRequest {
  constructor() {
    super();
    this.endpointPath = '/recipes/random';
  }
}

export default RandomRecipe;
