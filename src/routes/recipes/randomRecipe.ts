import GetRequestMixin from "../../GetRequestMixin"; // todo: configure aliases to use it as 'services/recepies/random'
import BaseRequest from "../../baseRequest";

class RandomRecipe extends GetRequestMixin(BaseRequest) {
  protected endpointPath: string;

  constructor() {
    super();
    this.endpointPath = '/recipes/random';
  }
}

export default RandomRecipe;
