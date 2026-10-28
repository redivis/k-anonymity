import postcssPresetEnv from 'postcss-preset-env';
import postcssPxToRem from 'postcss-pxtorem';

export default {
	plugins: [
		postcssPresetEnv({
			stage: 1,
		}),
		postcssPxToRem({
			rootValue: 16,
			unitPrecision: 5,
			propList: ['*'],
		}),
	],
};
