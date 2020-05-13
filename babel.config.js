const plugins = [
  ["module-resolver", {
    "root": ["./"],
    "alias": {
      "app": "./app",
      "underscore": "lodash"
    }
  }]
];

if(process.env.NODE_ENV === 'production'){
}

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: plugins
};
