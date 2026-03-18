const { createDefaultPreset } = require('ts-jest');

const tsJestTransformCfg = createDefaultPreset().transform;

module.exports = {
	preset: 'react-native',
	transform: {
		...tsJestTransformCfg,
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
	},
};
