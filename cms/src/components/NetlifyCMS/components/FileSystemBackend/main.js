let Web3 = require("web3");
let web3 = new Web3(Web3.currentProvider);
const buffer = require("buffer");
const Buffer = buffer.Buffer;

window.addEventListener("load", function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== "undefined") {
    // Use Mist/MetaMask's provider
    web3 = new Web3(window.web3.currentProvider);
  } else {
    console.log("No web3? You should consider trying MetaMask!");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }
});

// METAMASK

const DESTINATION_ADDRESS = "0x4b43dc3d49476dfc4f49151dd72e9fee07ccb9de";

const DEFAULT_POST_DEPOSIT = web3.utils.toWei("1", "ether");
const DEFAULT_DOWNVOTE_DEPOSIT = web3.utils.toWei("0.001", "ether");

export function triggerMetamaskForDeposit(cb) {
  web3.eth.sendTransaction(
    {
      from: window.web3.eth.defaultAccount,
      to: DESTINATION_ADDRESS,
      value: DEFAULT_POST_DEPOSIT
    },
    cb
  );
}
