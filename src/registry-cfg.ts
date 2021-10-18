import { ContractKit } from "@celo/contractkit"
import { SavingsCELOAddressMainnet } from "@terminal-fi/savingscelo"
import { PairSavingsCELO } from "./pairs/savingscelo"
import { PairStableSwap } from "./pairs/stableswap"
import { RegistryAave } from "./registries/aave"
import { RegistryMento } from "./registries/mento"
import { RegistryStatic } from "./registries/static"
import { RegistryUniswapV2 } from "./registries/uniswapv2"

export const mainnetRegistryMoola =
	(kit: ContractKit) => new RegistryAave(kit, "0x7AAaD5a5fa74Aec83b74C2a098FBC86E17Ce4aEA")
export const mainnetRegistryUbeswap =
	(kit: ContractKit) => new RegistryUniswapV2(kit, "0x62d5b84bE28a183aBB507E125B384122D2C25fAE")
export const mainnetRegistrySushiswap =
	(kit: ContractKit) => new RegistryUniswapV2(kit, "0xc35DADB65012eC5796536bD9864eD8773aBc74C4")
export const mainnetRegistryMobius =
	(kit: ContractKit) => new RegistryStatic([
		// Source: https://github.com/mobiusAMM/mobiusV1
		new PairStableSwap(kit, "0x0ff04189Ef135b6541E56f7C638489De92E9c778"), // cUSD <-> bUSDC
		new PairStableSwap(kit, "0xdBF27fD2a702Cc02ac7aCF0aea376db780D53247"), // cUSD <-> cUSDT
		new PairStableSwap(kit, "0xE0F2cc70E52f05eDb383313393d88Df2937DA55a"), // cETH <-> WETH
		new PairStableSwap(kit, "0x19260b9b573569dDB105780176547875fE9fedA3"), //  BTC <-> WBTC
		new PairStableSwap(kit, "0xA5037661989789d0310aC2B796fa78F1B01F195D"), // cUSD <-> USDC
		new PairStableSwap(kit, "0x2080AAa167e2225e1FC9923250bA60E19a180Fb2"), // cUSD <-> pUSDC
		new PairStableSwap(kit, "0x63C1914bf00A9b395A2bF89aaDa55A5615A3656e"), // cUSD <-> asUSDC
	])
export const mainnetRegistrySavingsCELO =
	(kit: ContractKit) =>  new RegistryStatic([
		new PairSavingsCELO(kit, SavingsCELOAddressMainnet),
	])

export const mainnetRegistriesAll = (kit: ContractKit) => ([
	new RegistryMento(kit),
	mainnetRegistryMoola(kit),
	mainnetRegistryUbeswap(kit),
	mainnetRegistrySushiswap(kit),
	mainnetRegistryMobius(kit),
	mainnetRegistrySavingsCELO(kit),
])