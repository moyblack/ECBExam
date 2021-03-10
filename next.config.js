const debug = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: !debug ? 'https://www.opto-plataforma.pw/' : '',
  basePath: !debug ? '/' : '',
}