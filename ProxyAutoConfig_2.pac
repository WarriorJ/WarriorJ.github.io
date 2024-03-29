function FindProxyForURL(url, host)
{
    url  = url.toLowerCase();
    host = host.toLowerCase();

    if (isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0")
      || isInNet(dnsResolve(host), "172.16.0.0",  "255.240.0.0")
      || isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")
      || isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0")
    ) {
		return "DIRECT";
    }

    if (shExpMatch(host,"*twitter*")
      || shExpMatch(host,"*google*")
      || shExpMatch(host,"*facebook*")
      || shExpMatch(host,"*blogspot*")
      || shExpMatch(host,"*youtu*")
      || shExpMatch(host,"*gstatic*")
      || shExpMatch(host,"*ytimg*")
      || shExpMatch(host,"*ggpht*")
      || shExpMatch(host,"*gmail*")
      || shExpMatch(host,"*yahoo*")
    ) {
		return "PROXY 127.0.0.1:9457; SOCKS 127.0.0.1:9155; SOCKS bypass.kozow.com:9155; SOCKS bypass.kozow.com:9151; PROXY 127.0.0.1:8580; DIRECT";
    }
    else {
		return 'DIRECT';
    }
}
