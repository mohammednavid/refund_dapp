import refundContract from "../utils/refundContract";
import { getUserAddress } from "./web3Actions";
import web3 from "../web3";

export const sendRefund = async (tokenIds) => {
  const userAddress = await getUserAddress();
  await refundContract.methods
    .refund([tokenIds])
    .send({ from: userAddress, gas: 21000});
};

export const onPreSaleMint = async (quantity, proof) => {
  const userAddress = await getUserAddress();
  await refundContract.methods.preSaleMint(quantity, proof).send({
    from: userAddress,
    value: web3.utils.toWei("0.01", "ether") * quantity,
    gas: 2100 * quantity,
  });
};
export const onPublicSaleMint = async (quantity) => {
  const userAddress = await getUserAddress();
  await refundContract.methods.publicSaleMint(quantity).send({
    from: userAddress,
    value: web3.utils.toWei("0.01", "ether") * quantity,
    gas: 2100 * quantity,
  });
};
