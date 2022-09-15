import refundContract from "../utils/refundContract";
import { getUserAddress } from "./web3Actions";
import web3 from "../web3";

export const sendRefund = async (tokenIds) => {
  const userAddress = await getUserAddress();
  await refundContract.methods
    .refund([tokenIds])
    .send({ from: userAddress, gas: 210000, gasPrice: 20000000000 });
};

export const onPreSaleMint = async (quantity, proof) => {
  const userAddress = await getUserAddress();
  await refundContract.methods.preSaleMint(quantity, proof).send({
    from: userAddress,
    value: web3.utils.toWei("0.01", "ether") * quantity,
    gas: 210000 * quantity,
    gasPrice: 20000000000,
  });
};
export const onPublicSaleMint = async (quantity) => {
  const userAddress = await getUserAddress();
  await refundContract.methods.publicSaleMint(quantity).send({
    from: userAddress,
    value: web3.utils.toWei("0.01", "ether") * quantity,
    gas: 210000 * quantity,
    gasPrice: 20000000000,
  });
};
