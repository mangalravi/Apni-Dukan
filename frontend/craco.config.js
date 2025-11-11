module.exports = {
  eslint: {
    enable: true,
    mode: "extends",
    configure: {
      rules: {
        "no-console": "off",
        "no-unused-vars": "off",
      },
    },
  },
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
