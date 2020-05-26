import GetMixin from "src/requestMixins/GetRequestMixin";
import BaseRequest from "src/baseRequest";
import { applyMixins } from "src/utils/applyMixins";

const RANDOM_RECIPE_PATH = '/recipes/random';

class RandomRecipe extends BaseRequest {}

interface RandomRecipe extends BaseRequest, GetMixin {}
applyMixins(RandomRecipe, [GetMixin]);

export const randomRecipe = new RandomRecipe(RANDOM_RECIPE_PATH);
