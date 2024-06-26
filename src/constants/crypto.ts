export interface Currency {
  name: string;
  symbol: string;
  id: number;
}

export const currenciesForCrypto: Currency[] = [
  { name: "United Arab Emirates Dirham", symbol: "AED", id: 2813 },
  //!   "AFN",
  { name: "Albanian Lek", symbol: "ALL", id: 3526 },
  { name: "Armenian Dram", symbol: "AMD", id: 3527 },
  //! "ANG",
  //! "AOA",
  { name: "Argentine Peso", symbol: "ARS", id: 2821 },
  { name: "Australian Dollar", symbol: "AUD", id: 2782 },
  //! "AWG",
  { name: "Azerbaijani Manat", symbol: "AZN", id: 3528 },
  { name: "Bosnia-Herzegovina Convertible Mark", symbol: "BAM", id: 3529 },
  //! "BBD",
  { name: "Bangladeshi Taka", symbol: "BDT", id: 3530 },
  { name: "Bulgarian Lev", symbol: "BGN", id: 2814 },
  { name: "Bahraini Dinar", symbol: "BHD", id: 3531 },
  // "BIF",
  { name: "Bermudan Dollar", symbol: "BMD", id: 3532 },
  //! "BND",
  // "BOB",
  { name: "Brazilian Real", symbol: "BRL", id: 2783 },
  //! "BSD",
  // "BTN",
  // "BWP",
  // "BYN",
  // "BZD",
  { name: "Canadian Dollar", symbol: "CAD", id: 2784 },
  // "CDF",
  // "CFA",
  { name: "Swiss Franc", symbol: "CHF", id: 2785 },
  // "CKD",
  // "CLP",
  // "CNY",
  // "COP",
  // "CRC",
  // "CUP",
  // "CVE",
  // "CZK",
  // "DJF",
  // "DKK",
  // "DOP",
  // "DZD",
  // "EGP",
  // "ERN",
  // "ETB",
  { name: "Euro", symbol: "EUR", id: 2790 },
  //!   "FJD",
  // "FKP",
  // "FOK",
  { name: "Pound Sterling", symbol: "GBP", id: 2791 },
  // "GEL",
  // "GGP",
  // "GHS",
  // "GIP",
  // "GMD",
  // "GNF",
  // "GTQ",
  // "GYD",
  // "HKD",
  // "HNL",
  // "HTG",
  // "HUF",
  // "IDR",
  // "ILS",
  // "IMP",
  { name: "Indian Rupee", symbol: "INR", id: 2796 },
  // "IQD",
  // "IRR",
  // "ISK",
  // "JEP",
  // "JMD",
  { name: "Jordanian Dinar", symbol: "JOD", id: 3546 },
  // "JPY",
  // "KES",
  // "KGS",
  // "KHR",
  // "KID",
  // "KMF",
  // "KPW",
  // "KRW",
  { name: "Kuwaiti Dinar", symbol: "KWD", id: 3550 },
  //! "KYD",
  // "KZT",
  // "LAK",
  // "LBP",
  // "LKR",
  // "LRD",
  // "LSL",
  // "LYD",
  // "MAD",
  // "MDL",
  // "MGA",
  // "MKD",
  // "MMK",
  // "MNT",
  // "MOP",
  // "MRU",
  // "MUR",
  // "MVR",
  // "MWK",
  // "MXN",
  // "MYR",
  // "MZN",
  // "NAD",
  // "NGN",
  // "NIO",
  // "NOK",
  // "NPR",
  { name: "New Zealand Dollar", symbol: "NZD", id: 2802 },
  { name: "Omani Rial", symbol: "OMR", id: 3562 },
  { name: "Panamanian Balboa", symbol: "PAB", id: 3563 },
  // "PEN",
  // "PGK",
  // "PHP",
  { name: "Pakistani Rupee", symbol: "PKR", id: 2804 },
  // "PLN",
  // "PYG",
  // "QAR",
  // "RON",
  // "RSD",
  // "RUB",
  // "RWF",
  // "SAR",
  // "SBD",
  // "SCR",
  // "SDG",
  // "SEK",
  { name: "Singapore Dollar", symbol: "SGD", id: 2808 },
  // "SHP",
  // "SLL",
  // "SOS",
  // "SRD",
  // "SSP",
  // "STN",
  // "SYP",
  // "SZL",
  // "THB",
  // "TJS",
  // "TMT",
  // "TND",
  // "TOP",
  // "TRY",
  // "TTD",
  // "TVD",
  // "TWD",
  // "TZS",
  // "UAH",
  // "UGX",
  { name: "United States Dollar", symbol: "USD", id: 2781 },
  { name: "Uruguayan Peso", symbol: "UYU", id: 3571 },
  { name: "Uzbekistan Som", symbol: "UZS", id: 3572 },
  { name: "Venezuelan Bolívar", symbol: "VES", id: 3573 },
  { name: "Vietnamese Dong", symbol: "VND", id: 2823 },
  //! "VUV",
  //! "WST",
  //! "XAF",
  //! "XCD",
  //! "XDR",
  //! "XOF",
  //! "XPF",
  //! "YER",
  { name: "South African Rand", symbol: "ZAR", id: 2812 },
  //! "ZMW",
  //! "ZWL",
];

export const crypto: Currency[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    id: 1,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    id: 1027,
  },
  {
    name: "Tether USDt",
    symbol: "USDT",
    id: 825,
  },
  {
    name: "BNB",
    symbol: "BNB",
    id: 1839,
  },
  {
    name: "Solana",
    symbol: "SOL",
    id: 5426,
  },
  {
    name: "USDC",
    symbol: "USDC",
    id: 3408,
  },
  {
    name: "XRP",
    symbol: "XRP",
    id: 52,
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    id: 74,
  },
  {
    name: "Toncoin",
    symbol: "TON",
    id: 11419,
  },
  {
    name: "Cardano",
    symbol: "ADA",
    id: 2010,
  },
  {
    name: "TRON",
    symbol: "TRX",
    id: 1958,
  },
  {
    name: "Shiba Inu",
    symbol: "SHIB",
    id: 5994,
  },
  {
    name: "Avalanche",
    symbol: "AVAX",
    id: 5805,
  },
  {
    name: "Chainlink",
    symbol: "LINK",
    id: 1975,
  },
  {
    name: "Polkadot",
    symbol: "DOT",
    id: 6636,
  },
  {
    name: "Bitcoin Cash",
    symbol: "BCH",
    id: 1831,
  },
  {
    name: "NEAR Protocol",
    symbol: "NEAR",
    id: 6535,
  },
  {
    name: "Polygon",
    symbol: "MATIC",
    id: 3890,
  },
  {
    name: "Uniswap",
    symbol: "UNI",
    id: 7083,
  },
  {
    name: "Pepe",
    symbol: "PEPE",
    id: 24478,
  },
  {
    name: "Dai",
    symbol: "DAI",
    id: 4943,
  },
  {
    name: "UNUS SED LEO",
    symbol: "LEO",
    id: 3957,
  },
  {
    name: "Litecoin",
    symbol: "LTC",
    id: 2,
  },
  {
    name: "Internet Computer",
    symbol: "ICP",
    id: 8916,
  },
  {
    name: "Kaspa",
    symbol: "KAS",
    id: 20396,
  },
  {
    name: "Ethereum Classic",
    symbol: "ETC",
    id: 1321,
  },
  {
    name: "Aptos",
    symbol: "APT",
    id: 21794,
  },
  {
    name: "Monero",
    symbol: "XMR",
    id: 328,
  },
  {
    name: "Render",
    symbol: "RNDR",
    id: 5690,
  },
  {
    name: "Hedera",
    symbol: "HBAR",
    id: 4642,
  },
  {
    name: "Sweat Economy",
    symbol: "SWEAT",
    id: 21351,
  },
  {
    name: "Cosmos",
    symbol: "ATOM",
    id: 3794,
  },
  {
    name: "Arbitrum",
    symbol: "ARB",
    id: 11841,
  },
  {
    name: "Stellar",
    symbol: "XLM",
    id: 512,
  },
  {
    name: "Stacks",
    symbol: "STX",
    id: 4847,
  },
  {
    name: "Mantle",
    symbol: "MNT",
    id: 27075,
  },
  {
    name: "Filecoin",
    symbol: "FIL",
    id: 2280,
  },
  {
    name: "OKB",
    symbol: "OKB",
    id: 3897,
  },
  {
    name: "Cronos",
    symbol: "CRO",
    id: 3635,
  },
  {
    name: "Immutable",
    symbol: "IMX",
    id: 10603,
  },
  {
    name: "First Digital USD",
    symbol: "FDUSD",
    id: 26081,
  },
  {
    name: "Maker",
    symbol: "MKR",
    id: 1518,
  },
  {
    name: "VeChain",
    symbol: "VET",
    id: 3077,
  },
  {
    name: "Injective",
    symbol: "INJ",
    id: 7226,
  },
  {
    name: "Sui",
    symbol: "SUI",
    id: 20947,
  },
  {
    name: "The Graph",
    symbol: "GRT",
    id: 6719,
  },
  {
    name: "Bittensor",
    symbol: "TAO",
    id: 22974,
  },
  {
    name: "Lido DAO",
    symbol: "LDO",
    id: 8000,
  },
  {
    name: "dogwifhat",
    symbol: "WIF",
    id: 28752,
  },
  {
    name: "Optimism",
    symbol: "OP",
    id: 11840,
  },
  {
    name: "Arweave",
    symbol: "AR",
    id: 5632,
  },
  {
    name: "Ondo",
    symbol: "ONDO",
    id: 21159,
  },
  {
    name: "FLOKI",
    symbol: "FLOKI",
    id: 10804,
  },
  {
    name: "Fantom",
    symbol: "FTM",
    id: 3513,
  },
  {
    name: "Brett (Based)",
    symbol: "BRETT",
    id: 29743,
  },
  {
    name: "Theta Network",
    symbol: "THETA",
    id: 2416,
  },
  {
    name: "Bonk",
    symbol: "BONK",
    id: 23095,
  },
  {
    name: "Notcoin",
    symbol: "NOT",
    id: 28850,
  },
  {
    name: "Bitget Token",
    symbol: "BGB",
    id: 11092,
  },
  {
    name: "JasmyCoin",
    symbol: "JASMY",
    id: 8425,
  },
  {
    name: "THORChain",
    symbol: "RUNE",
    id: 4157,
  },
  {
    name: "Aave",
    symbol: "AAVE",
    id: 7278,
  },
  {
    name: "Fetch.ai",
    symbol: "FET",
    id: 3773,
  },
  {
    name: "Celestia",
    symbol: "TIA",
    id: 22861,
  },
  {
    name: "Core",
    symbol: "CORE",
    id: 23254,
  },
  {
    name: "Pyth Network",
    symbol: "PYTH",
    id: 28177,
  },
  {
    name: "Algorand",
    symbol: "ALGO",
    id: 4030,
  },
  {
    name: "Sei",
    symbol: "SEI",
    id: 23149,
  },
  {
    name: "Jupiter",
    symbol: "JUP",
    id: 29210,
  },
  {
    name: "Flare",
    symbol: "FLR",
    id: 7950,
  },
  {
    name: "Starknet",
    symbol: "STRK",
    id: 22691,
  },
  {
    name: "Flow",
    symbol: "FLOW",
    id: 4558,
  },
  {
    name: "KuCoin Token",
    symbol: "KCS",
    id: 2087,
  },
  {
    name: "Quant",
    symbol: "QNT",
    id: 3155,
  },
  {
    name: "Axie Infinity",
    symbol: "AXS",
    id: 6783,
  },
  {
    name: "Gala",
    symbol: "GALA",
    id: 7080,
  },
  {
    name: "Bitcoin SV",
    symbol: "BSV",
    id: 3602,
  },
  {
    name: "Pendle",
    symbol: "PENDLE",
    id: 9481,
  },
  {
    name: "Ethena",
    symbol: "ENA",
    id: 30171,
  },
  {
    name: "EOS",
    symbol: "EOS",
    id: 1765,
  },
  {
    name: "SingularityNET",
    symbol: "AGIX",
    id: 2424,
  },
  {
    name: "BitTorrent [New]",
    symbol: "BTT",
    id: 16086,
  },
  {
    name: "dYdX (Native)",
    symbol: "DYDX",
    id: 28324,
  },
  {
    name: "Beam",
    symbol: "BEAM",
    id: 28298,
  },
  {
    name: "MultiversX",
    symbol: "EGLD",
    id: 6892,
  },
  {
    name: "Neo",
    symbol: "NEO",
    id: 1376,
  },
  {
    name: "Tezos",
    symbol: "XTZ",
    id: 2011,
  },
  {
    name: "Ethereum Name Service",
    symbol: "ENS",
    id: 13855,
  },
  {
    name: "The Sandbox",
    symbol: "SAND",
    id: 6210,
  },
  {
    name: "ORDI",
    symbol: "ORDI",
    id: 25028,
  },
  {
    name: "Gnosis",
    symbol: "GNO",
    id: 1659,
  },
  {
    name: "Akash Network",
    symbol: "AKT",
    id: 7431,
  },
  {
    name: "USDD",
    symbol: "USDD",
    id: 19891,
  },
  {
    name: "Worldcoin",
    symbol: "WLD",
    id: 13502,
  },
  {
    name: "Ronin",
    symbol: "RON",
    id: 14101,
  },
  {
    name: "GateToken",
    symbol: "GT",
    id: 4269,
  },
  {
    name: "LayerZero",
    symbol: "ZRO",
    id: 26997,
  },
  {
    name: "Chiliz",
    symbol: "CHZ",
    id: 4066,
  },
  {
    name: "Nexo",
    symbol: "NEXO",
    id: 2694,
  },
  {
    name: "Synthetix",
    symbol: "SNX",
    id: 2586,
  },
  {
    name: "Conflux",
    symbol: "CFX",
    id: 7334,
  },
  {
    name: "eCash",
    symbol: "XEC",
    id: 10791,
  },
  {
    name: "Decentraland",
    symbol: "MANA",
    id: 1966,
  },
  {
    name: "BOOK OF MEME",
    symbol: "BOME",
    id: 29870,
  },
  {
    name: "Wormhole",
    symbol: "W",
    id: 29587,
  },
  {
    name: "zkSync",
    symbol: "ZK",
    id: 24091,
  },
  {
    name: "DeXe",
    symbol: "DEXE",
    id: 7326,
  },
  {
    name: "Oasis",
    symbol: "ROSE",
    id: 7653,
  },
  {
    name: "MANTRA",
    symbol: "OM",
    id: 6536,
  },
  {
    name: "Mina",
    symbol: "MINA",
    id: 8646,
  },
  {
    name: "Dog (Runes)",
    symbol: "DOG",
    id: 30933,
  },
  {
    name: "Klaytn",
    symbol: "KLAY",
    id: 4256,
  },
  {
    name: "Safe",
    symbol: "SAFE",
    id: 21585,
  },
  {
    name: "IOTA",
    symbol: "IOTA",
    id: 1720,
  },
  {
    name: "ApeCoin",
    symbol: "APE",
    id: 18876,
  },
  {
    name: "Livepeer",
    symbol: "LPT",
    id: 3640,
  },
  {
    name: "Tether Gold",
    symbol: "XAUt",
    id: 5176,
  },
  {
    name: "PancakeSwap",
    symbol: "CAKE",
    id: 7186,
  },
  {
    name: "AIOZ Network",
    symbol: "AIOZ",
    id: 9104,
  },
  {
    name: "Helium",
    symbol: "HNT",
    id: 5665,
  },
  {
    name: "Mog Coin",
    symbol: "MOG",
    id: 27659,
  },
  {
    name: "Nervos Network",
    symbol: "CKB",
    id: 4948,
  },
  {
    name: "Kava",
    symbol: "KAVA",
    id: 4846,
  },
  {
    name: "Theta Fuel",
    symbol: "TFUEL",
    id: 3822,
  },
  {
    name: "1inch Network",
    symbol: "1INCH",
    id: 8104,
  },
  {
    name: "TrueUSD",
    symbol: "TUSD",
    id: 2563,
  },
  {
    name: "FTX Token",
    symbol: "FTT",
    id: 4195,
  },
  {
    name: "XDC Network",
    symbol: "XDC",
    id: 2634,
  },
  {
    name: "Rocket Pool",
    symbol: "RPL",
    id: 2943,
  },
  {
    name: "ConstitutionDAO",
    symbol: "PEOPLE",
    id: 14806,
  },
  {
    name: "Bitcoin Gold",
    symbol: "BTG",
    id: 2083,
  },
  {
    name: "Terra Classic",
    symbol: "LUNC",
    id: 4172,
  },
  {
    name: "APENFT",
    symbol: "NFT",
    id: 9816,
  },
  {
    name: "BinaryX",
    symbol: "BNX",
    id: 23635,
  },
  {
    name: "PAX Gold",
    symbol: "PAXG",
    id: 4705,
  },
  {
    name: "Aevo",
    symbol: "AEVO",
    id: 29676,
  },
  {
    name: "Trust Wallet Token",
    symbol: "TWT",
    id: 5964,
  },
  {
    name: "WEMIX",
    symbol: "WEMIX",
    id: 7548,
  },
  {
    name: "Blur",
    symbol: "BLUR",
    id: 23121,
  },
  {
    name: "WOO",
    symbol: "WOO",
    id: 7501,
  },
  {
    name: "Memecoin",
    symbol: "MEME",
    id: 28301,
  },
  {
    name: "Compound",
    symbol: "COMP",
    id: 5692,
  },
  {
    name: "Raydium",
    symbol: "RAY",
    id: 8526,
  },
  {
    name: "Curve DAO Token",
    symbol: "CRV",
    id: 6538,
  },
  {
    name: "Arkham",
    symbol: "ARKM",
    id: 27565,
  },
  {
    name: "PayPal USD",
    symbol: "PYUSD",
    id: 27772,
  },
  {
    name: "Axelar",
    symbol: "AXL",
    id: 17799,
  },
  {
    name: "Astar",
    symbol: "ASTR",
    id: 12885,
  },
  {
    name: "MX Token",
    symbol: "MX",
    id: 4041,
  },
  {
    name: "IoTeX",
    symbol: "IOTX",
    id: 2777,
  },
  {
    name: "ssv.network",
    symbol: "SSV",
    id: 12999,
  },
  {
    name: "Ocean Protocol",
    symbol: "OCEAN",
    id: 3911,
  },
  {
    name: "ether.fi",
    symbol: "ETHFI",
    id: 29814,
  },
  {
    name: "Aragon",
    symbol: "ANT",
    id: 1680,
  },
  {
    name: "Golem",
    symbol: "GLM",
    id: 1455,
  },
  {
    name: "Osmosis",
    symbol: "OSMO",
    id: 12220,
  },
  {
    name: "Kusama",
    symbol: "KSM",
    id: 5034,
  },
  {
    name: "GMT",
    symbol: "GMT",
    id: 18069,
  },
  {
    name: "cat in a dogs world",
    symbol: "MEW",
    id: 30126,
  },
  {
    name: "SATS",
    symbol: "1000SATS",
    id: 28683,
  },
  {
    name: "SafePal",
    symbol: "SFP",
    id: 8119,
  },
  {
    name: "dYdX (ethDYDX)",
    symbol: "ETHDYDX",
    id: 11156,
  },
  {
    name: "Echelon Prime",
    symbol: "PRIME",
    id: 23711,
  },
  {
    name: "Manta Network",
    symbol: "MANTA",
    id: 13631,
  },
  {
    name: "Zilliqa",
    symbol: "ZIL",
    id: 2469,
  },
  {
    name: "io.net",
    symbol: "IO",
    id: 29835,
  },
  {
    name: "Terra",
    symbol: "LUNA",
    id: 20314,
  },
  {
    name: "SuperVerse",
    symbol: "SUPER",
    id: 8290,
  },
  {
    name: "Zcash",
    symbol: "ZEC",
    id: 1437,
  },
  {
    name: "Celo",
    symbol: "CELO",
    id: 5567,
  },
  {
    name: "Holo",
    symbol: "HOT",
    id: 2682,
  },
  {
    name: "Ankr",
    symbol: "ANKR",
    id: 3783,
  },
  {
    name: "0x Protocol",
    symbol: "ZRX",
    id: 1896,
  },
  {
    name: "Radix",
    symbol: "XRD",
    id: 11948,
  },
  {
    name: "Jito",
    symbol: "JTO",
    id: 28541,
  },
  {
    name: "Enjin Coin",
    symbol: "ENJ",
    id: 2130,
  },
  {
    name: "Reserve Rights",
    symbol: "RSR",
    id: 3964,
  },
  {
    name: "Illuvium",
    symbol: "ILV",
    id: 8719,
  },
  {
    name: "Convex Finance",
    symbol: "CVX",
    id: 9903,
  },
  {
    name: "Basic Attention Token",
    symbol: "BAT",
    id: 1697,
  },
  {
    name: "Metis",
    symbol: "METIS",
    id: 9640,
  },
  {
    name: "Dymension",
    symbol: "DYM",
    id: 28932,
  },
  {
    name: "SPACE ID",
    symbol: "ID",
    id: 21846,
  },
  {
    name: "Dash",
    symbol: "DASH",
    id: 131,
  },
  {
    name: "Ravencoin",
    symbol: "RVN",
    id: 2577,
  },
  {
    name: "SKALE",
    symbol: "SKL",
    id: 5691,
  },
  {
    name: "Biconomy",
    symbol: "BICO",
    id: 9543,
  },
  {
    name: "JUST",
    symbol: "JST",
    id: 5488,
  },
  {
    name: "OriginTrail",
    symbol: "TRAC",
    id: 2467,
  },
  {
    name: "Arcblock",
    symbol: "ABT",
    id: 2545,
  },
  {
    name: "GMX",
    symbol: "GMX",
    id: 11857,
  },
  {
    name: "Qtum",
    symbol: "QTUM",
    id: 1684,
  },
  {
    name: "Polymesh",
    symbol: "POLYX",
    id: 20362,
  },
  {
    name: "Galxe",
    symbol: "GAL",
    id: 11877,
  },
  {
    name: "aelf",
    symbol: "ELF",
    id: 2299,
  },
  {
    name: "Siacoin",
    symbol: "SC",
    id: 1042,
  },
  {
    name: "Frax Share",
    symbol: "FXS",
    id: 6953,
  },
  {
    name: "RSS3",
    symbol: "RSS3",
    id: 17917,
  },
  {
    name: "Casper",
    symbol: "CSPR",
    id: 5899,
  },
  {
    name: "Tellor",
    symbol: "TRB",
    id: 4944,
  },
  {
    name: "Centrifuge",
    symbol: "CFG",
    id: 6748,
  },
  {
    name: "Ethena USDe",
    symbol: "USDe",
    id: 29470,
  },
  {
    name: "Zeebu",
    symbol: "ZBU",
    id: 27765,
  },
  {
    name: "Fellaz",
    symbol: "FLZ",
    id: 20787,
  },
  {
    name: "Cheelee",
    symbol: "CHEEL",
    id: 23054,
  },
  {
    name: "Fasttoken",
    symbol: "FTN",
    id: 22615,
  },
  {
    name: "Frax",
    symbol: "FRAX",
    id: 6952,
  },
  {
    name: "Popcat (SOL)",
    symbol: "POPCAT",
    id: 28782,
  },
  {
    name: "USDB",
    symbol: "USDB",
    id: 29599,
  },
  {
    name: "IPVERSE",
    symbol: "IPV",
    id: 28367,
  },
  {
    name: "Aerodrome Finance",
    symbol: "AERO",
    id: 29270,
  },
  {
    name: "MAGA",
    symbol: "TRUMP",
    id: 27872,
  },
  {
    name: "PepeCoin",
    symbol: "PEPECOIN",
    id: 24835,
  },
  {
    name: "Turbo",
    symbol: "TURBO",
    id: 24911,
  },
  {
    name: "Orbler",
    symbol: "ORBR",
    id: 17520,
  },
  {
    name: "HEX",
    symbol: "HEX",
    id: 5015,
  },
  {
    name: "Meta Games Coin",
    symbol: "MGC",
    id: 29839,
  },
  {
    name: "Tribe",
    symbol: "TRIBE",
    id: 9025,
  },
  {
    name: "Aethir",
    symbol: "ATH",
    id: 30083,
  },
  {
    name: "Mask Network",
    symbol: "MASK",
    id: 8536,
  },
  {
    name: "EthereumPoW",
    symbol: "ETHW",
    id: 21296,
  },
  {
    name: "Chia",
    symbol: "XCH",
    id: 9258,
  },
  {
    name: "Decred",
    symbol: "DCR",
    id: 1168,
  },
  {
    name: "Loopring",
    symbol: "LRC",
    id: 1934,
  },
  {
    name: "Beldex",
    symbol: "BDX",
    id: 3987,
  },
  {
    name: "Gas",
    symbol: "GAS",
    id: 1785,
  },
  {
    name: "ZetaChain",
    symbol: "ZETA",
    id: 21259,
  },
  {
    name: "Telcoin",
    symbol: "TEL",
    id: 2394,
  },
  {
    name: "Threshold",
    symbol: "T",
    id: 17751,
  },
  {
    name: "Flux",
    symbol: "FLUX",
    id: 3029,
  },
  {
    name: "Rollbit Coin",
    symbol: "RLB",
    id: 15271,
  },
  {
    name: "PAAL AI",
    symbol: "PAAL",
    id: 27178,
  },
  {
    name: "Yield Guild Games",
    symbol: "YGG",
    id: 10688,
  },
  {
    name: "SushiSwap",
    symbol: "SUSHI",
    id: 6758,
  },
  {
    name: "Harmony",
    symbol: "ONE",
    id: 3945,
  },
  {
    name: "Vanar Chain",
    symbol: "VANRY",
    id: 8037,
  },
  {
    name: "Pixels",
    symbol: "PIXEL",
    id: 29335,
  },
  {
    name: "UMA",
    symbol: "UMA",
    id: 5617,
  },
  {
    name: "Amp",
    symbol: "AMP",
    id: 6945,
  },
  {
    name: "Altlayer",
    symbol: "ALT",
    id: 29073,
  },
  {
    name: "Baby Doge Coin",
    symbol: "BabyDoge",
    id: 10407,
  },
  {
    name: "NetMind Token",
    symbol: "NMT",
    id: 29447,
  },
  {
    name: "API3",
    symbol: "API3",
    id: 7737,
  },
  {
    name: "Ontology",
    symbol: "ONT",
    id: 2566,
  },
  {
    name: "VeThor Token",
    symbol: "VTHO",
    id: 3012,
  },
  {
    name: "yearn.finance",
    symbol: "YFI",
    id: 5864,
  },
  {
    name: "ANDY (ETH)",
    symbol: "ANDY",
    id: 29879,
  },
  {
    name: "Audius",
    symbol: "AUDIO",
    id: 7455,
  },
  {
    name: "Moonbeam",
    symbol: "GLMR",
    id: 6836,
  },
  {
    name: "Non-Playable Coin",
    symbol: "NPC",
    id: 27960,
  },
  {
    name: "Delysium",
    symbol: "AGI",
    id: 24007,
  },
  {
    name: "0x0.ai",
    symbol: "0x0",
    id: 23355,
  },
  {
    name: "BounceBit",
    symbol: "BB",
    id: 30746,
  },
  {
    name: "Alchemy Pay",
    symbol: "ACH",
    id: 6958,
  },
  {
    name: "FLEX",
    symbol: "FLEX",
    id: 5190,
  },
  {
    name: "Open Campus",
    symbol: "EDU",
    id: 24613,
  },
  {
    name: "Ondo US Dollar Yield",
    symbol: "USDY",
    id: 29256,
  },
  {
    name: "SwissBorg",
    symbol: "BORG",
    id: 2499,
  },
  {
    name: "Chromia",
    symbol: "CHR",
    id: 3978,
  },
  {
    name: "FINSCHIA",
    symbol: "FNSA",
    id: 4512,
  },
  {
    name: "Balancer",
    symbol: "BAL",
    id: 5728,
  },
  {
    name: "MimbleWimbleCoin",
    symbol: "MWC",
    id: 5031,
  },
  {
    name: "Lista DAO",
    symbol: "LISTA",
    id: 21533,
  },
  {
    name: "Treasure",
    symbol: "MAGIC",
    id: 14783,
  },
  {
    name: "TrueFi",
    symbol: "TRU",
    id: 7725,
  },
  {
    name: "USDJ",
    symbol: "USDJ",
    id: 5446,
  },
  {
    name: "Kadena",
    symbol: "KDA",
    id: 5647,
  },
  {
    name: "Band Protocol",
    symbol: "BAND",
    id: 4679,
  },
  {
    name: "Neutron",
    symbol: "NTRN",
    id: 26680,
  },
  {
    name: "Venom",
    symbol: "VENOM",
    id: 22059,
  },
  {
    name: "Creditcoin",
    symbol: "CTC",
    id: 5198,
  },
  {
    name: "ICON",
    symbol: "ICX",
    id: 2099,
  },
  {
    name: "Apu Apustaja",
    symbol: "APU",
    id: 30008,
  },
  {
    name: "Aleph Zero",
    symbol: "AZERO",
    id: 11976,
  },
  {
    name: "Solar",
    symbol: "SXP",
    id: 4279,
  },
  {
    name: "Decentralized Social",
    symbol: "DESO",
    id: 10442,
  },
  {
    name: "iExec RLC",
    symbol: "RLC",
    id: 1637,
  },
  {
    name: "H2O DAO",
    symbol: "H2O",
    id: 19091,
  },
  {
    name: "Ponke",
    symbol: "PONKE",
    id: 29150,
  },
  {
    name: "LCX",
    symbol: "LCX",
    id: 4950,
  },
  {
    name: "Nosana",
    symbol: "NOS",
    id: 16612,
  },
  {
    name: "Marlin",
    symbol: "POND",
    id: 7497,
  },
  {
    name: "Lisk",
    symbol: "LSK",
    id: 1214,
  },
  {
    name: "COTI",
    symbol: "COTI",
    id: 3992,
  },
  {
    name: "Storj",
    symbol: "STORJ",
    id: 1772,
  },
  {
    name: "Saga",
    symbol: "SAGA",
    id: 30372,
  },
  {
    name: "Propy",
    symbol: "PRO",
    id: 1974,
  },
  {
    name: "IOST",
    symbol: "IOST",
    id: 2405,
  },
  {
    name: "Kujira",
    symbol: "KUJI",
    id: 15185,
  },
  {
    name: "inSure DeFi",
    symbol: "SURE",
    id: 5113,
  },
  {
    name: "Prom",
    symbol: "PROM",
    id: 4120,
  },
  {
    name: "DigiByte",
    symbol: "DGB",
    id: 109,
  },
  {
    name: "Myro",
    symbol: "MYRO",
    id: 28382,
  },
  {
    name: "crvUSD",
    symbol: "CRVUSD",
    id: 24927,
  },
  {
    name: "WAX",
    symbol: "WAXP",
    id: 2300,
  },
  {
    name: "Cartesi",
    symbol: "CTSI",
    id: 5444,
  },
  {
    name: "Coin98",
    symbol: "C98",
    id: 10903,
  },
  {
    name: "NEM",
    symbol: "XEM",
    id: 873,
  },
  {
    name: "Banana Gun",
    symbol: "BANANA",
    id: 28066,
  },
  {
    name: "MAGA",
    symbol: "MAGA",
    id: 31305,
  },
  {
    name: "Pax Dollar",
    symbol: "USDP",
    id: 3330,
  },
];
