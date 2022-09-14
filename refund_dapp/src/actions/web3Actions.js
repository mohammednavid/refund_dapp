export const getUserAddress = async () => {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const accountAddress = accounts[0];
  return accountAddress;
};
