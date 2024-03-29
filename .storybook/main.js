module.exports = {
  stories: [
    "../stories/components/**/*.stories.mdx",
    "../stories/pages/**/*.stories.mdx",
    "../stories/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/pages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
