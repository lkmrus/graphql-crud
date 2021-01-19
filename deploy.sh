#!/usr/bin/env bash
su safeuser
cd /srv/graphql-crud/
git stash
git pull
npm i
npm i knex -g
#npm i pm2@latest -g
#pm2 update
cd src/
npm run migration:up
# npm run seed
# pm2 restart all

