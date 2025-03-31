const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU2Y7qOBT8F79CX7IRAlJLA2ELCWsWltF9cLBJDNlwnI0W/z4KdKtbI92enjfLicvlqjr1BqKYpFjHFei9gYSSHDJcL1mVYNADg+x0whQ0AYIMgh5Ql1lsw0CfGkJ7Y+Wz1aQ8D/oLq0wsR7l5Ix1XLWe1HcS29gruTZBkbkCO3wAKVl/IuU0sxxJNWsP9fAZvjUmBUBFKpefKx/E+U8uR6hfSK7jXiJBQEnmjxMchpjDQcbWChP6MvjY1b6kmdleGfSgHV1wuB+ktci+TcuSMzpOrm1wvRrGFDv9D+lWo2xeWxrfAzqjSXc5ldCwNSY43Mp2bYbC5kja3b2hWX3vST4kXYaQhHDHCqh/rni29qX8KZD7RvOVa9JRrxp2VzuGsh1Z+pnbhmy3VT4VwG/+M+DIc7hbxSEirleOibcPYY9E2FKc1S+lu7Wp7QT8kaxZSIf5KfEU/snL5P7rrRmK6eFN0uXWjUE/XVmKnse5AKddu01ns7jV+3rnBPnXsn9EflmHZWRBhOu/jjT3UG2g2Q+ZWQSY2TcE1kSx1Hc6UqH38pA9ZRr9jufKWQ/1kdpyGXamSWZBoN5gzYinO+Yr3lJoeH3j5DZs7TvZVadB3ZmduKYQbJRRJNpq0rUiNB+OuNu7GLcdL2GFC++vXx4suuNIQ6PH3JqDYIymjkJE4euwpUhNAlJv4SDF7yAtE2XDk7LSkHmll40VoSO3bklnSGHZQxDcueVG6cjYthPjyCpogofERpylGU5KymFZznKbQwyno/f27CSJcsqdx9XUy3wQnQlNmR1kSxBB9uPrxER6PcRYxs4qOar3AFPS4z23MGIm8tNYxiyA9+iTHqg9ZCnonGKT43gQI5+SIazzgMmRbXqewTtfRvh0OLmc9572ash9Hz1+k7rErSrz4AgWl/SK5wumlixH/wrcVsa0ovKJADjQBeZ+Z+swfLeSQI6Eh1wgihiZDt6vtmGZsue02nz9seGqPKUagx2iGm8CFx0uWWPEFR9/gjrwcjtsDyXbThrbtXvBhShrcRiuN4gvu01PQe/vsKTVGNd7BmTnr3fwAmiB8RJDULxdEqcPxbZHvdNpST+j+lf4qaiVhkvyKMKuB31WvjyDMIAnSuoU1Kwz2xXi0MNDVUCaTfuH1Va8PPl36iPszTrETNrjbQF42tqOzLsxEbjEs1Hx8S05dYdNqrwo98g3JW/CPOP0bpC4gH+lcOE/XN/eg8VCtlFahNeaiebss9oWyR77MvJtjyftOUmTepOzoSnqYJhunNVzNq8nZMDPsVhNbS06Wh8PIFS+q91rf9kzL18vOE4UgixWz8XTfMjhuw4mecxby1VTZ7dXdPDl6pdXxJ5u2s7ZbuZbuLh2jM60W47Zvj+dyphWz6dokmuSLzv6AD31/2/eeg/goguC9gMljRN7es3Ui+NFnEaw9+k93vuacuze/gLxX5B+yNIDjQ87mBT7nga9VjKDucK30aXmUdy10OTUsRU0ks6EN0QHc77+bIAkgO8U0BD0AI0RjgkATBDBl/c9RtUiIUwbDBPT4jiRKHCd3ufs/OgJp0+AHAAA=',
    PREFIXE: process.env.PREFIX || "+",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

