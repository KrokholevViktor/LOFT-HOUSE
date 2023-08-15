const config = {
	mode: 'production',
	entry: {
		main: './src/js/main.js',
		// youtubeLightbox: './src/js/youtubeLightbox.js',
		// about: './src/js/about.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;
