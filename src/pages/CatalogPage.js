import React from 'react';
import { NavPage } from '../components/NavPage';
import Catalog from '../components/Catalog';
import { LoadMore } from '../components/LoadMore';

export const CatalogPage = () => {
  return (
    <>
        <NavPage name='Catalog' paragraph='View our carefully put together design catalog' elementId='props-filter'/>
        <Catalog />
        <Catalog />
        <Catalog />
        <LoadMore/>

    </>
  )
}
