let global: any = typeof window !== 'undefined' ? window : self;
global.config = {
	nodeList: [
		{ owner: "node-00", node: "http://139.180.184.63:8197"},
		{ owner: "node-06", node: "http://139.180.184.63:8197"}
	],
	nodeUrl: "http://139.180.184.63:8197/",
	electionApiUrl: "https://voting.qwertycoin.org/api",
	mainnetExplorerUrl: "http://149.28.21.176/",
	mainnetExplorerUrlHash: "http://149.28.21.176/?hash={ID}#blockchain_transaction",
	mainnetExplorerUrlBlock: "http://149.28.21.176/?hash={ID}#blockchain_block",
	testnet: false,
	coinUnitPlaces: 8,
	coinDisplayUnitPlaces: 2,
	txMinConfirms: 10,
	txCoinbaseMinConfirms: 10,
	addressPrefix: 0x11ce1,
	integratedAddressPrefix: 0x11ce1,
	subAddressPrefix: 0x11ce1,
	coinFee: new JSBigInt('100000000'),
	feePerKB: new JSBigInt('100000000'),
	dustThreshold: new JSBigInt('100000'), //used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 0, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'EKO',
	openAliasPrefix: "eko",
	coinName: 'ekoin',
	coinUriPrefix: 'ekoin:',
	avgBlockTime: 90,
	maxBlockNumber: 500000000,
	remoteNodeFee: 0.25,
	devFee: 1,
	devAddress: "QWC1Dx9NNGkHCkgRgeF9fhEskhg5ddiDJGVXdGBwqW7CXqKHZe6gzxuhLzWZwBVTbeAofBPe6mSkeedRuFuxRwunAG7KBLYTgB"
};
