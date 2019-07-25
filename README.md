# vue-countdown

> Simple Countdown component for [Vue.js](https://vuejs.org).

## Project setup
```shell
yarn install
```

In browser:

```html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-countdown.js"></script>
<script>Vue.component(VueCountdown.name, VueCountdown);</script>
```

### Usage

```js
import Vue from 'vue'
import VueCountdown from '@chenfengyuan/vue-countdown'
Vue.component(VueCountdown.name, VueCountdown)
```

```html
<countdown :time="2 * 24 * 60 * 60 * 1000" :onComplete="setFunctionOnComplete" />
<!-- <span>Time Remaining：1 days, 23 hours, 59 minutes, 59 seconds.</span> -->
```

## Props

### time

- Type: `Number`
- Default: `0`

### omComplete
- Type: `Function`
- Default: `null`

## Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 9+

## Versioning

Maintained under the [Semantic Versioning guidelines](https://semver.org).

## License

[MIT](https://opensource.org/licenses/MIT) © Hebert Silva