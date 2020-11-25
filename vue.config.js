module.exports = {
  lintOnSave: false,
  transpileDependencies: ["vuetify"],
  devServer: {
    disableHostCheck: true,
    proxy: "http://localhost:5002/apibe/"
  },
  publicPath: '/operator-fe/'
};
