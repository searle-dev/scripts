function FindProxyForURL(url, host) {
	if(isResolvable("10.0.34.21:8888")){
		console.log('resolvable!');
		if (shExpMatch(host, "*.api.xiaoying.co"))
		{
			return "PROXY 10.0.34.21:8888; DIRECT";
		}
	}else{
	        console.error('unresolvable!');
	}

	if (isInNet(host, "10.0.0.0","255.255.252.0"))
    {
        return "PROXY 10.0.34.21:8888";
    }
    return "DIRECT";
}
