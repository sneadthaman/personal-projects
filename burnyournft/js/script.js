if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
}