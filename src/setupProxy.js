const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		createProxyMiddleware('/', {
			target: 'https://localhost:8080',
			changeOrigin: true
			//해당하는 요청하는 경로에서 "/api" 없애기
			//pathRewrite: {"/api": "/"}
		})
	)
};