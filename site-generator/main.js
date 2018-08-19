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

var REDIRECT_TO = "http://localhost:4000/blog";

function promptForDeposit(callback) {
  web3.eth.sendTransaction(
    {
      to: DESTINATION_ADDRESS,
      value: DEFAULT_DOWNVOTE_DEPOSIT
    },
    callback
  );
}

function storeOnIPFS(value) {
  node.files.add(Buffer.from(value), function(err, res) {
    if (err || !res) {
      return console.error("ipfs add error", err, res);
    }

    res.forEach(function(file) {
      if (file && file.hash) {
        console.log("successfully stored", file.hash);
        display(file.hash);
      }
    });
  });
}

function display(hash) {
  // buffer: true results in the returned result being a buffer rather than a stream
  node.files.cat(hash, function(err, data) {
    if (err) {
      return console.error("ipfs cat error", err);
    }

    document.getElementById("hash").innerText = hash;
    $("#content").html(
      $("<div />")
        .html(data)
        .text()
    );
  });
}

document.addEventListener("DOMContentLoaded", function() {
  $(".deposit-btn").click(function() {
    promptForDeposit(function(err, hash) {
      if (!err) {
        window.location = REDIRECT_TO;
      }
    });
  });
});

function startApp() {
  // $(".deposit-btn").click(handleDepositButtonClick);
}
