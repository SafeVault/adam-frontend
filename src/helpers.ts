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
  