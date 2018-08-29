# CodeceptJS+WebdriverIO Sample Project

## Install & Run
*Install Standalone Selenium Server*
```
npm install selenium-standalone -g
selenium-standalone install
selenium-standalone start
```
*Install project*
```
cd dir/where/code/was/cloned/to
npm install
```
*Run tests*

Set your Github credentials in `config.json` located in the root dir

```
cd dir/where/code/was/cloned/to
./node_modules/.bin/codeceptjs run
```
*Run headless*

Edit `codecept.json` in the root dir and set [these Chrome options](https://codecept.io/helpers/WebDriverIO/#headless-chrome)