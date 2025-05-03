import { useCallback } from "react";
import useContractInstance from "./useContractInstance";
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";
import { toast } from "react-toastify";
import { ErrorDecoder } from "ethers-decode-error";
import abi from '../constants/abi.json'
import { SUPPORTED_CHAIN } from "../connection";

const useCreateThrift = () => {
  const contract = useContractInstance(true);
  const { address } = useAppKitAccount();
  const chainId = SUPPORTED_CHAIN;
  const errorDecoder = ErrorDecoder.create([abi]);

  return useCallback(
    async (
      goalName,
      goalAmount,
      frequency,
      vaultAddress,
      startTime,
      endTime,
      platformFee,
      emergencyFee,
      participant
    ) => {
      if (
        !goalName ||
        !goalAmount ||
        frequency === "" ||
        !vaultAddress ||
        !startTime ||
        !endTime ||
        !platformFee ||
        !emergencyFee ||
        participant === null || participant === undefined
      ) {
        toast.error("Invalid Input");
        return;
      }

      if (!address) {
        toast.error("Please connect your wallet");
        return;
      }

      if (!contract) {
        toast.error("Contract not found");
        return;
      }

      if (!chainId) {
        toast.error("You're not connected to Pharos Devnet");
        return;
      }

      try {
        const tx = await contract.createThrift(
          goalName,
          goalAmount,
          frequency,
          vaultAddress,
          startTime,
          endTime,
          platformFee,
          emergencyFee,
          participant
        );
        console.log(tx);
        const receipt = await tx.wait();
        console.log(receipt);

        if (receipt.status === 1) {
          toast.success("New module creation Successful");
          return;
        }

        toast.error("New module creation failed");
        return;
      } catch (err) {
        const decodedError = await errorDecoder.decode(err);
        toast.error(`New module creation failed - ${decodedError.reason}`, {
          position: "top-center",
        });
      }
    },
    [contract, address, chainId]
  );
};

export default useCreateThrift;
