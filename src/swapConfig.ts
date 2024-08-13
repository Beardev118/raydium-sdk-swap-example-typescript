export const swapConfig = {
    executeSwap: false, // Send tx when true, simulate tx when false
    useVersionedTransaction: true,
    tokenAAmount: 0.1,
    tokenAAddress: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", // USDC mainnet address
    // tokenAAddress: "So11111111111111111111111111111111111111112", // Token to swap for the other, SOL in this case
    // tokenBAddress: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", // USDT mainnet address
    tokenBAddress: "So11111111111111111111111111111111111111112", // wrapped SOL address
    maxLamports: 1500000, // Micro lamports for priority fee
    direction: "in" as "in" | "out", // Swap direction: 'in' or 'out'
    liquidityFile: "trimmed_mainnet.json",
    maxRetries: 20,
};
