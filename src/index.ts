module.exports = class LessPluginFn {
  argv: Record<string, any>;
  constructor() {}
  setOptions(args: string) {
    console.log("setOptions", args);
    // this.argv = yargs(args);
  }
  printUsage() {
    console.log("less-plugin-fn options:");
    console.log(JSON.stringify(this.argv));
  }
  install(less, pluginMenager, a) {
    console.log("install", less, pluginMenager, a);
  }
};
