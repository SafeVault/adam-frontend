export const transactions = [
  {
    type: "Withdraw",
    date: "02/03/25",
    amount: "$2,458,663.88",
    from: "0xfc60D4d6A9416aD3a2C2Eb8259fCE2aD4C650625",
    to: "0xfc60D4d6A9416aD3a2C2Eb8259fCE2aD4C650625",
    department: "Marketing",
    status: "Failed",
  },
  {
    type: "Deposit",
    date: "02/03/25",
    amount: "$2,458,663.88",
    from: "0xfc60D4d6A9416aD3a2C2Eb8259fCE2aD4C650625",
    to: "0xfc60D4d6A9416aD3a2C2Eb8259fCE2aD4C650625",
    department: "Marketing",
    status: "Successful",
  },
  {
    type: "Deposit",
    date: "02/03/25",
    amount: "$2,458,663.88",
    from: "0xfc60D4d6A9416aD3a2C2Eb8259fCE2aD4C650625",
    to: "0xfc60D4d6A9416aD3a2C2Eb8259fCE2aD4C650625",
    department: "Marketing",
    status: "Pending",
  },
];

export const truncAddress = (
  addy: string,
  startLength = 4,
  endLength = 6
) => {
  if (!/^0x[a-fA-F0-9]{40}$/.test(addy)) {
    throw new Error("Invalid address");
  }
  return `${addy.slice(0, startLength)}....${addy.slice(-endLength)}`;
};
