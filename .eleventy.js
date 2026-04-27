module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("statusBox", function(status) {
    return `<div class="status-box">
      <strong>Status:</strong> ${status}
    </div>`;
  });
};