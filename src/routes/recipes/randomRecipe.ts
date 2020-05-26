import GetMixin from "src/GetRequestMixin";
import BaseRequest from "src/baseRequest";

class RandomRecipe extends GetMixin(BaseRequest) {
  protected endpointPath: string;

  constructor() {
    super();
    this.endpointPath = '/recipes/random';
  }
}

export const randomRecipe =  new RandomRecipe;
