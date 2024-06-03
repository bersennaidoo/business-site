module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("node_modules");
  return {
    dir: {
      input: "src",
      includes: "_includes",
    },
  };
};
