import GetMixin from "../../requestMixins/GetRequestMixin";
import BaseRequest from "../../baseRequest";
import { applyMixins } from "../../utils/applyMixins";

const RANDOM_RECIPE_PATH = '/recipes/random';

class RandomRecipe extends BaseRequest {}

interface RandomRecipe extends BaseRequest, GetMixin {}
applyMixins(RandomRecipe, [GetMixin]);

export const randomRecipe = new RandomRecipe(RANDOM_RECIPE_PATH);
