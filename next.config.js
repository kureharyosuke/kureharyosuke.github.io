module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  output: 'export',
  // GitHub Pages serves directory URLs with a trailing slash; generate
  // links and canonicals in the same shape to avoid redirect hops.
  trailingSlash: true,
};
