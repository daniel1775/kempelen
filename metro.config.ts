const { withRozenite } = require('@rozenite/metro');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

config.resolver.unstable_enablePackageExports = true;
config.resolver.unstable_enableSymlinks = true;

module.exports = withRozenite(withNativeWind(config, { input: './src/global.css' }), {
	enabled: true,
});