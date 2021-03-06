import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { contexts } from '@oyster/common';
import { MetaProvider } from './contexts';
import { AppLayout } from './components/Layout';

import {
  ArtCreateView,
  ArtistsView,
  ArtistView,
  ArtView,
  AuctionCreateView,
  AuctionView,
  HomeView,
  ArtworksView,
} from './views';
import { UseWalletProvider } from 'use-wallet';
import { CoingeckoProvider } from './contexts/coingecko';
import { BillingView } from './views/auction/billing';
import { AdminView } from './views/admin';
import { Dashboard, Actions } from './views/fractionalize';
const { WalletProvider } = contexts.Wallet;
const { ConnectionProvider } = contexts.Connection;
const { AccountsProvider } = contexts.Accounts;

export function Routes() {
  return (
    <>
      <HashRouter basename={'/'}>
        <ConnectionProvider>
          <WalletProvider>
            <UseWalletProvider chainId={5}>
              <AccountsProvider>
                <CoingeckoProvider>
                  <MetaProvider>
                    <AppLayout>
                      <Switch>
                        {/* <Route
                          exact
                          path="/admin"
                          component={() => <AdminView />}
                        />
                        <Route
                          exact
                          path="/artworks/:id?"
                          component={() => <ArtworksView />}
                        />
                        <Route
                          exact
                          path="/art/:id"
                          component={() => <ArtView />}
                        />
                        <Route
                          exact
                          path="/artists/:id"
                          component={() => <ArtistView />}
                        />
                        <Route
                          exact
                          path="/artists"
                          component={() => <ArtistsView />}
                        />
                        <Route
                          exact
                          path="/auction/create/:step_param?"
                          component={() => <AuctionCreateView />}
                        />
                        <Route
                          exact
                          path="/auction/:id"
                          component={() => <AuctionView />}
                        />
                        <Route
                          exact
                          path="/auction/:id/billing"
                          component={() => <BillingView />}
                        /> */}
                        <Route
                          exact
                          path="/proko_fractionalize/"
                          component={() => <Dashboard />}
                        />
                        <Route
                          exact
                          path="/proko_fractionalize/art/create/:step_param?"
                          component={() => <ArtCreateView />}
                        />
                        <Route
                          exact
                          path="/proko_fractionalize/sell/:step_param?"
                          component={() => <Actions />}
                        />
                        <Redirect from="/" to="/proko_fractionalize/" />
                        {/* <Route path="/" component={() => <HomeView />} /> */}
                      </Switch>
                    </AppLayout>
                  </MetaProvider>
                </CoingeckoProvider>
              </AccountsProvider>
            </UseWalletProvider>
          </WalletProvider>
        </ConnectionProvider>
      </HashRouter>
    </>
  );
}
