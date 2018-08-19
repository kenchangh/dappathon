window.addEventListener("load", function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== "undefined") {
    // Use Mist/MetaMask's provider
    web3 = new Web3(web3.currentProvider);
  } else {
    console.log("No web3? You should consider trying MetaMask!");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  // Now you can start your app & access web3 freely:
  startApp();
});

var DESTINATION_ADDRESS = "0x4b43dc3d49476dfc4f49151dd72e9fee07ccb9de";

var DEFAULT_POST_DEPOSIT = web3.toWei("1", "ether");
var DEFAULT_DOWNVOTE_DEPOSIT = web3.toWei("0.001", "ether");

function promptForDeposit(callback) {
  web3.eth.sendTransaction(
    {
      from: web3.eth.defaultAccount,
      to: DESTINATION_ADDRESS,
      value: DEFAULT_DOWNVOTE_DEPOSIT
    },
    callback
  );
}

function attachListener() {
  promptForDeposit(function() {});
}

function startApp() {
  $(".upvote-btn").click(attachListener);
  $(".downvote-btn").click(attachListener);
  $(".donate-btn").click(attachListener);
}
