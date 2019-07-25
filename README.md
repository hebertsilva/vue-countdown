# vue-countdown

> Simple Countdown component for [Vue.js](https://vuejs.org).

## Project setup

In browser:

```html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-countdown.js"></script>
<script>Vue.component(VueCountdown.name, VueCountdown);</script>
```

### Usage

```js
import Vue from 'vue'
import VueCountdown from 'vue-countdown'
Vue.component(VueCountdown.name, VueCountdown)
```

```html
<countdown :time="20" :onComplete="setFunctionOnComplete" :labels="['Days', 'Hours', 'Minutes', 'Seconds']" />
<!-- 
    <ol>
        <li>
            <span class="time">00</span>
            <span class="label">Days</span>
        </li>
        <li>
            <span class="time">21</span>
            <span class="label">Horus</span>
        </li>
        <li>
            <span class="time">19</span>
            <span class="label">Minutes</span>
        </li>
        <li>
            <span class="time">47</span>
            <span class="label">Seconds</span>
        </li>
    </ol>
 -->
```

## Props

### time

- Type: `Number` *// Minutes*
- Default: `0`

### labels
- Type: `Array`
- Default: `['Days', 'Hours', 'Minutes', 'Seconds']`

### onComplete
- Type: `Function`
- Default: `null`

## License

[MIT](https://opensource.org/licenses/MIT) © Hebert Silva