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
		return "SOCKS5 free.mooo.info:9151; SOCKS5 free.mooo.info:9155; PROXY 127.0.0.1:8580; PROXY 127.0.0.1:9457; DIRECT";
    }

    return 'DIRECT';
}
