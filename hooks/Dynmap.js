const portListen = /^\[.*\].*\[dynmap\].*\s+(([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+|[a-zA-Z0-9:]+):([0-9]+))/;
module.exports.platforms = ["spigot", "paper"];
module.exports.scriptName = "Dynmap";
module.exports.register = function (actions) {
  actions.on("data", line => {
    if (portListen.test(line)) {
      const dynmapPort = line.match(portListen);
      let [,, host, port] = dynmapPort;
      if (host === "*"||!host) host = "127.0.0.1";
      return actions.emit("portListening", {
          port: parseInt(port),
          type: "UDP",
          host: host,
          protocol: /::/.test(host?.trim())?"IPv6":/[0-9]+\.[0-9]+/.test(host?.trim())?"IPv4":"IPV4/IPv6",
          plugin: "geyser"
      });
    }
  });
}
