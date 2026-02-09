git pull
pm2 delete novabroker
npm install
npm run build
pm2 start ecosystem.config.cjs