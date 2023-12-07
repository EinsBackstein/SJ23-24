/*
Project: Classes - Bank Accounts
Author:  nottj
Date:  uebung06_bank_accounts
*/

'use strict';

const appName = 'Bankkonten';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading1').innerText = appName;

//Here are all the inputs defined

const inBankName = document.getElementById('inBankName');
const inAccountNumber = document.getElementById('inAccountNumber');
const inBankNumber = document.getElementById('inBankNumber');
const inFirstName = document.getElementById('inFirstName');
const inLastName = document.getElementById('inLastName');
const inBankBalance = document.getElementById('inBankBalance');
const inAccountToSearch = document.getElementById('inAccountToSearch');
const inOverdraftLimit = document.getElementById('inOverdraftLimit');

//Here are all the buttons defined

const btnAddCustomer = document.getElementById('btnAddCustomer');
const btnSearchAccount = document.getElementById('btnSearchAccount');
const btnShowAll = document.getElementById('btnShowAll');

//And here the output is defined

const outputInfos = document.getElementById('outputInfos');

// Definition of class BankAccount
class BankAccount {
  constructor(
    firstName,
    lastName,
    bankNumber,
    bankName,
    accountNumber,
    bankBalance,
    overdraftLimit
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.bankNumber = bankNumber;
    this.bankName = bankName;
    this.accountNumber = accountNumber;
    this.bankBalance = bankBalance;
    this.overdraftLimit = overdraftLimit;
  }

  getAccountInfo() {
//Here all the parameters with their values are getting put into an array and then returned
    return Array(
      String('Vorname: ' + this.firstName),
      String(' Nachname: ' + this.lastName),
      String(' Bankleitzahl: ' + this.bankNumber),
      String(' Banknahme: ' + this.bankName),
      String(' Kontostand: ' + this.bankBalance),
      String(' Kontonummer: ' + this.accountNumber),
      String(' Überzugsrahmen: ' + this.overdraftLimit)
    );
  }

  deposit(amount) {
    //This method is used to deposit any amount up to 5000€ into an account
    if (amount > 0) {
      if (amount > 5000) {
        this.bankBalance += 5000;
      } else {
        this.bankBalance += amount;
      }
      return true;
    }
    return false;
  }

  withdraw(amount) {
    //This method is used to withdraw any ammount up to 400€ from an account
    if (
      amount > 0 &&
      amount < Number(this.bankBalance) + Number(this.overdraftLimit) &&
      amount < 400 &&
      amount % 10 == 0
    ) {
      this.bankBalance -= amount;
      return true;
    }
    return false;
  }
  review() {
    //This method is used to judge someone
    if (this.bankBalance == 0) {
      return 'oje, pleite!';
    } else if (this.bankBalance <= 100) {
      return 'sehr wenig Geld';
    } else if (this.bankBalance <= 500) {
      return 'wenig Geld';
    } else if (this.bankBalance <= 2000) {
      return 'Kontostand ok';
    } else if (this.bankBalance <= 3000) {
      return 'Kontostand gut';
    } else if (this.bankBalance > 3000) {
      return 'Kontostand sehr gut';
    }
  }
}

//This function is used to add X amount of money to every account

function everythingPlusX(amount, bankArray) {
  for (let account of bankArray) {
    account.bankBalance += amount;
  }
}

//This function is used to delete every account registered with a certain bank

function deleteAccountsOfBank(bankName, bankArray) {
  for (let i = 0; i < bankArray.length; i++) {
    if (account.bankName == bankName) {
      bankArray.splice(i, 1);
    }
  }
}

// Main Program

// Definition of an array of bankAccounts
let bankAccounts = [];

//create a new BankAccount Object and add it to the array (with check if account-number already exists)
btnAddCustomer.onclick = function () {
  let accountNum = inAccountNumber.value;
  let hasBeenFound = false;
  for (let account of bankAccounts) {
    if (account.accountNumber == accountNum) {
      hasBeenFound = true;
    }
  }
  if (hasBeenFound == false) {
    bankAccounts.push(
      new BankAccount(
        inFirstName.value,
        inLastName.value,
        inBankNumber.value,
        inBankName.value,
        inAccountNumber.value,
        inBankBalance.value,
        inOverdraftLimit.value
      )
    );
  } else {
    outputInfos.innerHTML = '';
    outputInfos.innerHTML = 'Kontonummer existiert bereits';
  }
};

//shows all accounts in the array

btnShowAll.onclick = function () {
  outputInfos.innerHTML = '';
  let output = '';
  for (let account of bankAccounts) {
    output = output + '<br>' + account.getAccountInfo();
  }
  outputInfos.innerHTML = output;
};

//searches for an account and shows it, if it exists

btnSearchAccount.onclick = function () {
  outputInfos.innerHTML = '';
  let accountToSearch = inAccountToSearch.value;
  for (const account of bankAccounts) {
    if (accountToSearch == account.accountNumber) {
      outputInfos.innerHTML = account.getAccountInfo();
      return;
    }
  }
  outputInfos.innerHTML = 'Kontonummer konnte nicht gefunden werden';
};
