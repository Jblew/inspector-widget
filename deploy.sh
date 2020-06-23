#!/usr/bin/env bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "${DIR}"
set -e

npm i -g npm
npm i -g firebase firebase-tools
npm --prefix="public/inspector-widget-vue" ci
npm --prefix="public/roles" ci
npm --prefix="firestore" ci
npm --prefix="config" ci

npm --prefix="config" run build
echo "Building inside deployment scripts"

firebase deploy
