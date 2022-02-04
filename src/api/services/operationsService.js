const { balanceClient, getClient } = require('../models/clientModel');

const depositService = async (cpf, quantity) => {
  try {
    const client = await getClient(cpf);
    const { balance } = client[0];
    const newCurrency = balance + Number(quantity);
    const depositing = await balanceClient(cpf, newCurrency);
    return depositing;
  } catch (error) {
    return error;
  }
};

const transferService = async ({ cpf }, targetCpf, quantity) => {
    const qty = Number(quantity);
    const loggedClient = await getClient(cpf);
    const targetClient = await getClient(targetCpf);

    if (!targetClient) throw new Error('Target user not found');

    const { balance: balanceLogged } = loggedClient[0]; //balance do cliente logado
    const { balance: balanceTarget, fullName } = targetClient[0]; // balance do cliente target

    if (balanceLogged < qty) throw new Error('You don"t have enough money to transfer');

    const newCurrencyLogged = balanceLogged - qty;
    const newCurrencyTarget = balanceTarget + qty;

    await balanceClient(cpf, newCurrencyLogged);
    await balanceClient(targetCpf, newCurrencyTarget);

    return { newCurrency: newCurrencyLogged, moneyTransfered: qty, to: fullName };
};

module.exports = { depositService, transferService };
