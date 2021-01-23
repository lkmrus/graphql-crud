#!/usr/bin/env bash
# cd /srv/graphql-crud/
# git stash
# git pull
npm i
npm i knex -g
knex migration:up
knex seed:up
npm install --production
NODE_ENV=production npm run dev

