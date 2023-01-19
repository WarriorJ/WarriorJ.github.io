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

    if (shExpMatch(host,"*zaobao*")
      || shExpMatch(host,"*baidu*")
      || shExpMatch(host,"*bing*")
      || shExpMatch(host,"*cmbchina*")
      || shExpMatch(host,"*icbc*")
      || shExpMatch(host,"*ccb*")
      || shExpMatch(host,"*spdb*")
      || shExpMatch(host,"*pingan*")
      || shExpMatch(host,"*sina*")
      || shExpMatch(host,"*aws*")
      || shExpMatch(host,"*amazon*")
      || shExpMatch(host,"*oracle*")
      || shExpMatch(host,"*euserv*")
      || shExpMatch(host,"*ntppool*")
      || shExpMatch(host,"*outlook*")
      || shExpMatch(host,"*office365*")
      || shExpMatch(host,"*skype*")
      || shExpMatch(host,"*21cn*")
      || shExpMatch(host,"*yeah*")
      || shExpMatch(host,"*163*")
      || shExpMatch(host,"*189*")
      || shExpMatch(host,"*10086*")
      || shExpMatch(host,"*jianguoyun*")
      || shExpMatch(host,"*qunar*")
      || shExpMatch(host,"*taobao*")
      || shExpMatch(host,"*alipay*")
      || shExpMatch(host,"*qq*")
      || shExpMatch(host,"*tencent*")
      || shExpMatch(host,"*microsoft*")
      || shExpMatch(host,"*localhost*")
      || shExpMatch(host,"*yandex*")
      || shExpMatch(host,"*vfemail*")
      || shExpMatch(host,"*aol*")
      || shExpMatch(host,"*21cn*")
      || shExpMatch(host,"*inbox*")
    ) {
	    return 'DIRECT';
    }
    else {
	    return "PROXY 127.0.0.1:9457; SOCKS 127.0.0.1:9155; SOCKS free.mx21.tk:9155; SOCKS free.mx21.tk:9151; PROXY 127.0.0.1:8580; DIRECT";
    }
}
