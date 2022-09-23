const portListen = /^\[.*\].*Geyser.*\s+(([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+|[a-zA-Z0-9:]+):([0-9]+))/;
export function register(actions) {
  actions.on("data", line => {
    if (portListen.test(line)) {
      const geyserPort = data.match(geyserPortListen);
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
