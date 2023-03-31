module.exports = {
  globDirectory: "build/",
  globPatterns: ["**/*.{json,ico,html,png,txt,css,js}"],
  swDest: "build/sw.js",
  swSrc: "src/sw-template.js", // el generateSW no funciona con esta configuracion
  //   ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
