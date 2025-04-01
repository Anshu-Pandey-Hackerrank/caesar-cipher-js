module.exports = {
  testEnvironment: "node",
  testMatch: [
    "**/caesar_cipher_tests.js",
    "**/caesar_cipher_more_tests.js"
  ],
  verbose: true,
  reporters: [
    "default",
    ["jest-junit", {
      outputDirectory: ".",
      outputName: "report.xml",
      ancestorSeparator: " › ",
      uniqueOutputName: false,
      suiteNameTemplate: "{filepath}",
      classNameTemplate: "{classname}",
      titleTemplate: "{title}"
    }]
  ]
}; 