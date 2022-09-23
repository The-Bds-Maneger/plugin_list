const portListen = /^\[.*\].*Geyser.*\s+(([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+|[a-zA-Z0-9:]+):([0-9]+))/;
module.exports.platforms = ["spigot", "paper"];
module.exports.scriptName = "Geyser";
module.exports.register = function (actions) {
  actions.on("data", line => {
    if (portListen.test(line)) {
      const geyserPort = line.match(geyserPortListen);
      let [,, host, port] = geyserPort;
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
