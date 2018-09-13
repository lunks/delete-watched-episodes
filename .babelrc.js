module.exports = {
  "presets": [
    ["@babel/preset-env", { "targets": { "node": "current" } }],
    "@babel/typescript"
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }]
  ]
}
