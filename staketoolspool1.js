const contractAddressB = "0x9768E642A7Dc053cda11e8F3362C5E276b64D288";
const contractABIB = [{ "inputs": [{ "internalType": "address", "name": "_tools", "type": "address" }, { "internalType": "address", "name": "_toolsLP", "type": "address" }, { "internalType": "uint256", "name": "_feeOnStake", "type": "uint256" }, { "internalType": "uint256", "name": "_feeOnUnstake", "type": "uint256" }, { "internalType": "uint256", "name": "_minimumStake", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tax", "type": "uint256" }], "name": "OnStake", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tax", "type": "uint256" }], "name": "OnUnstake", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "OnWithdrawal", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_to", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [], "name": "BLOCKTOOLS", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TOOLS_LP", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "active", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "changePoolStatus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_stakeholder", "type": "address" }], "name": "checkEarnings", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "claimEarnings", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "feeOnStake", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "feeOnUnstake", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minimumStake", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "referralCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "referralRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "rescueLP", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "rescueTools", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "rewardPool", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_feeOnStake", "type": "uint256" }], "name": "setFeeOnStake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_feeOnUnstake", "type": "uint256" }], "name": "setFeeOnUnstake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_minimumStake", "type": "uint256" }], "name": "setMinimumStake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "stakeRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "stakeTools", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "stakes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalStaked", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "unstakeTools", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];


const contractAddressA = '0xc14B4d4CA66f40F352d7a50fd230EF8b2Fb3b8d4';
const contractABIA = [{ "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "address", "name": "_rescueAddress", "type": "address" }, { "internalType": "address", "name": "_liquifyProtocolAddress", "type": "address" }, { "internalType": "uint256", "name": "totalSupply", "type": "uint256" }, { "internalType": "uint256", "name": "_buyProtocolFee", "type": "uint256" }, { "internalType": "uint256", "name": "_sellProtocolFee", "type": "uint256" }, { "internalType": "uint256", "name": "_quickSellProtocolFee", "type": "uint256" }, { "internalType": "uint256", "name": "_buyLiquidityFee", "type": "uint256" }, { "internalType": "uint256", "name": "_sellLiquidityFee", "type": "uint256" }, { "internalType": "uint256", "name": "_quickSellLiquidityFee", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "isExcluded", "type": "bool" }], "name": "ExcludeFromFees", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "pair", "type": "address" }, { "indexed": true, "internalType": "bool", "name": "value", "type": "bool" }], "name": "SetAutomatedMarketMakerPair", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "tokensSwapped", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "ethReceived", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokensIntoLiquidity", "type": "uint256" }], "name": "SwapAndLiquify", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "newAddress", "type": "address" }, { "indexed": true, "internalType": "address", "name": "oldAddress", "type": "address" }], "name": "UpdateUniswapV2Router", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_isExcludedMaxTradeAmount", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "automatedMarketMakerPairs", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bool", "name": "excluded", "type": "bool" }], "name": "excludeFromFees", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "updAds", "type": "address" }, { "internalType": "bool", "name": "isEx", "type": "bool" }], "name": "excludeFromMaxTrade", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isExcludedFromFees", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "removeLimits", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "rescueAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "rescueTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "pair", "type": "address" }, { "internalType": "bool", "name": "value", "type": "bool" }], "name": "setAutomatedMarketMakerPair", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "onoff", "type": "bool" }], "name": "setQuickSell", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startTrading", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "swapAllowed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "taxShortTermTraders", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "uniswapV2Pair", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "uniswapV2Router", "outputs": [{ "internalType": "contract IUniswapV2Router02", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_protocolFee", "type": "uint256" }, { "internalType": "uint256", "name": "_liquidityFee", "type": "uint256" }, { "internalType": "uint256", "name": "_quickSellLiquidityFee", "type": "uint256" }, { "internalType": "uint256", "name": "_quickSellProtocolFee", "type": "uint256" }], "name": "updateExitFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_ProtocolFee", "type": "uint256" }, { "internalType": "uint256", "name": "_liquidityFee", "type": "uint256" }], "name": "updateQuickBuyFees", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "enabled", "type": "bool" }], "name": "updateSwapAllowed", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];

let contract;
let contractA;


async function init() {
  // Check if MetaMask is installed
  if (typeof window.ethereum === 'undefined') {
    alert("Please install MetaMask to use this application");
    return;
  }

  // Connect MetaMask if not already connected
  if (window.ethereum.selectedAddress === null) {
    try {
      await ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      alert("Failed to connect MetaMask. Please try again or check your MetaMask setup.");
      return;
    }
  }

  // Initialize web3 instance with MetaMask provider
  web3 = new Web3(window.ethereum);
  contract = new web3.eth.Contract(contractABIB, contractAddressB);
  contractA = new web3.eth.Contract(contractABIA, contractAddressA);
}


async function fetchBalance() {
  const userAddress = ethereum.selectedAddress; // Get the user's Ethereum address
  const contractAddressB = "0xc14B4d4CA66f40F352d7a50fd230EF8b2Fb3b8d4"; // Address of the token contract
  const apiKey = "13QFDKK6C31W8A4JIPH8GMVVHRHKBE1H5T";
  const decimalFactor = 10 ** 18;

  try {
    const response = await fetch(`https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${contractAddressB}&address=${userAddress}&tag=latest&apikey=${apiKey}`);
    const data = await response.json();
    const balanceWei = data.result; // The available balance of the user
    const balanceEther = balanceWei / decimalFactor; // Convert balance from Wei to Ether

    document.getElementById("approveValue").value = balanceEther;

  } catch (error) {
    console.error(error);
    alert('Failed to fetch the balance. Please try again.');
  }
}
window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('balance');
  button.addEventListener('click', fetchBalance);
});

async function approve() {
  if (typeof web3 === 'undefined' || typeof ethereum === 'undefined' || typeof ethereum.selectedAddress === 'undefined') {
    // Prompt the user to connect their MetaMask account
    try {
      await ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.error(error);
      alert("Failed to connect MetaMask. Please try again or check your MetaMask setup.");
      return;
    }
  }

  const tokenToApprove = "0x9768E642A7Dc053cda11e8F3362C5E276b64D288"; // Address of the token to approve
  const approvalAmountEther = document.getElementById("approveValue").value; // Get value from input field in Ether

  try {
    const amountInWei = web3.utils.toWei(approvalAmountEther, 'ether'); // Convert approval amount from Ether to Wei
    await contractA.methods.approve(tokenToApprove, amountInWei).send({ from: ethereum.selectedAddress });
    console.log(result); // Display the transaction result
  } catch (error) {
    console.error(error);
    if (error.message.includes('User denied transaction signature')) {
      // User rejected the transaction
      return;
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('approveStake');
  button.addEventListener('click', approve);
});

window.addEventListener('DOMContentLoaded', init);

async function getETHPrice() {
  const apiURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum";
  const response = await fetch(apiURL);
  const data = await response.json();

  // Extract the WETH price in USD
  const ethPrice = data[0]["current_price"];

  return ethPrice;
}

function populateData() {
  const yourPoolInput = document.getElementById("stakes");
  const totalStakedInput = document.getElementById("totalStaked");
  const poolValueInput = document.getElementById("poolValue");
  const earningsInput = document.getElementById("lpearnings");


  // Call contract methods to fetch the data and update the input values
  // Example code:
  // You'll need to replace `contractAddress` with the actual contract address
  const contract = new web3.eth.Contract(contractABIB, contractAddressB);

  // Fetch the data using contract methods (replace `ethereum.selectedAddress` with the actual Ethereum address)
  const getYourPoolPromise = contract.methods.stakes(ethereum.selectedAddress).call();
  const getTotalStakedPromise = contract.methods.totalStaked().call();

  // Fetch the reward pool value using contract method
  const getPoolValuePromise = contract.methods.rewardPool().call();

  contract.methods.checkEarnings(ethereum.selectedAddress).call()
    .then(earnings => {
      // Divide the wei value by 10^18 to convert to ether
      const earningsInEther = earnings / (10 ** 18);

      // Update the input value with the earnings in ether
      earningsInput.value = earningsInEther;
    })

  // Fetch the contract balance using API
  const apiURL = "https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0xDaE6d9662C4904026AC311a5fDc8917FDc51971A&apikey=BB8JV33ED15VA4ZU1MRC4WWIG1TBT2V86V";
  const getContractBalancePromise = fetch(apiURL)
    .then(response => response.json())
    .then(data => data.result)
    .catch(error => {
      console.error("Error occurred while fetching total supply:", error);
    });

  const wethApiURL = "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2&address=0xDaE6d9662C4904026AC311a5fDc8917FDc51971A&tag=latest&apikey=13QFDKK6C31W8A4JIPH8GMVVHRHKBE1H5T";
  const getWethBalancePromise = fetch(wethApiURL)
    .then(response => response.json())
    .then(data => data.result)
    .catch(error => {
      console.error("Error occurred while fetching WETH balance:", error);
    });

  let lpValue;
  const lpValueInput = document.getElementById('lpValue');

  // Update the input values when all promises resolve
  Promise.all([getYourPoolPromise, getTotalStakedPromise, getPoolValuePromise, getContractBalancePromise, getWethBalancePromise])
    .then(([yourPool, totalStaked, poolValue, contractBalance, wethBalance]) => {
      // Divide the wei values by 10^18 to convert to ether
      yourPoolInput.value = (yourPool / (10 ** 18)).toFixed(4);
      totalStakedInput.value = (totalStaked / (10 ** 18)).toFixed(2);

      // Calculate the pool value as a percentage of the contract balance
      const poolValuePercentage = (poolValue / contractBalance) * 100;
      const poolValueInWETH = (poolValuePercentage * wethBalance) / 100 / (10 ** 18);


      // Get the current value of "totalStaked" converted to ether
      const totalStakedEther = (totalStaked / (10 ** 18)).toFixed(2);

      // Fetch the tools price from CoinGecko API
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=blocktools')
        .then(response => response.json())
        .then(data => {
          const toolsPrice = data[0]["current_price"];

          // Calculate the USD value of TOOLS staked
          const toolsStakedValue = totalStakedEther * toolsPrice;

          // Display the USD value in the "toolsstValue" input
          const toolsStakedValueInput = document.getElementById('toolsstValue');
          toolsStakedValueInput.value = toolsStakedValue.toFixed(2); // Round to 2 decimal places
        })

      getETHPrice().then(ethPrice => {
        // Calculate the pool value in USD
        const poolValueInUSD = poolValueInWETH * ethPrice;

        // Update the input value with the pool value in USD
        poolValueInput.value = `${poolValueInUSD.toFixed(2) * 2} USD`;
        lpValue = (wethBalance * ethPrice * 2) / contractBalance;
        lpValueInput.value = lpValue.toFixed(2);
      });
    })
    .catch((error) => {
      console.error("Error occurred while fetching data:", error);
    });
}


// Call the populateData function initially on page load
window.addEventListener("load", populateData);

// Call the populateData function every 30 seconds using setInterval
setInterval(populateData, 10000);

async function claimEarnings() {

  if (typeof web3 === 'undefined' || typeof ethereum === 'undefined' || typeof ethereum.selectedAddress === 'undefined') {
    // Prompt the user to connect their MetaMask account
    try {
      await ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.error(error);
      alert("Failed to connect MetaMask. Please try again or check your MetaMask setup.");
      return;
    }
  }

  try {
    // Call the contract's claimEarnings function
    const result = await contract.methods.claimEarnings().send({ from: ethereum.selectedAddress });
    console.log(result); // Display the transaction result
  } catch (error) {
    console.error(error);
  }
}
window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('claimEarnings');
  button.addEventListener('click', claimEarnings);
});

window.addEventListener('DOMContentLoaded', init);

async function fetchStakeBalance() {
  const userAddress = ethereum.selectedAddress; // Get the user's Ethereum address
  const contractAddress = "0xc14B4d4CA66f40F352d7a50fd230EF8b2Fb3b8d4"; // Address of the token contract
  const apiKey = "BB8JV33ED15VA4ZU1MRC4WWIG1TBT2V86V";
  const decimalFactor = 10 ** 18;

  try {
    const response = await fetch(`https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${userAddress}&tag=latest&apikey=${apiKey}`);
    const data = await response.json();
    const balanceWei = data.result; // The available balance of the user
    const balanceEther = balanceWei / decimalFactor; // Convert balance from Wei to Ether

    const truncatedBalance = Math.floor(balanceEther * 100) / 100; // Truncate the balance to two decimal places

    document.getElementById("stakeValue").value = truncatedBalance.toFixed(2);

  } catch (error) {
    console.error(error);
    alert('Failed to fetch the balance. Please try again.');
  }
}
window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toolsBalance');
  button.addEventListener('click', fetchStakeBalance);
});

async function stakeTools() {

  if (typeof web3 === 'undefined' || typeof ethereum === 'undefined' || typeof ethereum.selectedAddress === 'undefined') {
    // Prompt the user to connect their MetaMask account
    try {
      await ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.error(error);
      alert("Failed to connect MetaMask. Please try again or check your MetaMask setup.");
      return;
    }
  }

  const stakeAmount = document.getElementById("stakeValue").value; // Get value from input field in Ether

  try {
    const amountInWei = web3.utils.toWei(stakeAmount, 'ether'); // Convert approval amount from Ether to Wei
    await contract.methods.stakeTools(amountInWei).send({ from: ethereum.selectedAddress });
    console.log(result); // Display the transaction result
  } catch (error) {
    console.error(error);
    if (error.message.includes('User denied transaction signature')) {
      // User rejected the transaction
      return;
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('stakeTools');
  button.addEventListener('click', stakeTools);
});

window.addEventListener('DOMContentLoaded', init);


async function fetchUnstakeBalance() {
  if (
    typeof web3 === 'undefined' ||
    typeof ethereum === 'undefined' ||
    typeof ethereum.selectedAddress === 'undefined'
  ) {
    // Prompt the user to connect their MetaMask account
    try {
      await ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.error(error);
      alert(
        'Failed to connect MetaMask. Please try again or check your MetaMask setup.'
      );
      return;
    }
  }

  try {
    const balance = await contract.methods
      .stakes(ethereum.selectedAddress)
      .call();

    const decimalFactor = 10 ** 18;
    const balanceInEther = balance / decimalFactor; // Convert balance from Wei to Ether

    const roundedBalance = balanceInEther.toFixed(2);

    const unstakeValue = document.getElementById('unstakeValue');
    unstakeValue.value = roundedBalance;
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('unstakeBalance');
  button.addEventListener('click', fetchUnstakeBalance);
});

window.addEventListener('DOMContentLoaded', init);


async function unstakeTools() {

  if (typeof web3 === 'undefined' || typeof ethereum === 'undefined' || typeof ethereum.selectedAddress === 'undefined') {
    // Prompt the user to connect their MetaMask account
    try {
      await ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.error(error);
      alert("Failed to connect MetaMask. Please try again or check your MetaMask setup.");
      return;
    }
  }

  const unstakeAmount = document.getElementById("unstakeValue").value; // Get value from input field in Ether
  const amountUnstake = web3.utils.toWei(unstakeAmount, 'ether'); // Convert approval amount from Ether to Wei

  try {

    await contract.methods.unstakeTools(amountUnstake).send({ from: ethereum.selectedAddress });
    console.log(result); // Display the transaction result
  } catch (error) {
    console.error(error);
    if (error.message.includes('User denied transaction signature')) {
      // User rejected the transaction
      return;
    }
  }
}
window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('unstakeTools');
  button.addEventListener('click', unstakeTools);
});

window.addEventListener('DOMContentLoaded', init);