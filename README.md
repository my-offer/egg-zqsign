# egg-zqsign

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/egg-zqsign.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-zqsign

<!--
Description here.
-->

## Install

```bash
$ npm i egg-zqsign --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.zqsign = {
  enable: true,
  package: 'egg-zqsign',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.zqsign = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

```js
const Controller = require('egg').Controller

class TController extends Controller {
  async index() {
    const user = {
      user_code: '6d888805-b2f8-4ba3-95da-9eff46b2f3c7-1',
      name: '名字必须是汉字',
      id_card_no: '666888200101010000',
      mobile: '13000000000',
    }
    this.ctx.body = await this.app.zqSign.personReg(user.user_code, user.name, user.id_card_no, user.mobile)
  }
}

module.exports = TController
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
