import React from 'react';
import {NavPage} from '../components/NavPage';
import { Wallet } from '../components/Wallet';

export const WalletPage = () => {
  return (
    <>
        <NavPage element='props-search' elementId='props-filter' name='Wallet & Invoices' paragraph='manage your billing information, credits and credit spend'/>
        <Wallet/>
    </>
  )
}
