module.exports = {
  images: {
    domains: ["assets.pokemon.com"],
    // Image optimization doesn't work with static pages
    // @Link - https://stackoverflow.com/questions/65487914/error-image-optimization-using-next-js-default-loader-is-not-compatible-with-n
    unoptimized: true,
  },
};
