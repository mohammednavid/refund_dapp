import refundContract from "../utils/refundContract";
import { getUserAddress } from "./web3Actions";

export const sendRefund = async (tokenIds) => {
  const userAddress = await getUserAddress();
  await refundContract.methods
    .refund([tokenIds])
    .send({ from: userAddress, gas: 2100000, gasPrice: 8000000000 });
};

export const onPreSaleMint = async (quantity, proof) => {
  const userAddress = await getUserAddress();
  await refundContract.methods
    .preSaleMint(quantity, proof)
    .send({ from: userAddress, gas: 2100000, gasPrice: 8000000000 });
};
export const onPublicSaleMint = async (quantity) => {
  const userAddress = await getUserAddress();
  await refundContract.methods
    .publicSaleMint(quantity)
    .send({ from: userAddress, gas: 2100000, gasPrice: 8000000000 }); 
};
