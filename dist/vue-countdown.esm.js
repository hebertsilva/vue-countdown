/*!
 * vue-countdown v1.0.0
 * https://github.com/hebertsilva/vue-countdown#readme
 *
 * Copyright 2019-present Hebert Silva
 * Released under the MIT license
 *
 * Date: 2019-07-25T20:37:54.371Z
 */

var index = {
  name: "countdown",
  props: {
    /**
     * Starts the countdown automatically when initialized.
     */
    time: {
      type: Number,
      default: 0
    },

    /**
     * Starts the countdown labels for language defined
     */
    labels: {
      type: Array,
      default: function _default() {
        return ["Days", "Hours", "Minutes", "Seconds"];
      }
    },

    /**
     * Emit event the countdown has completed
     */
    onComplete: {
      type: Function,
      default: function _default() {
        return null;
      }
    }
  },
  data: function data() {
    return {
      /**
       * It is counting down.
       * @type {Object}
       */
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },

      /**
       * It is counting down.
       * @type {Boolean}
       */
      visible: true
    };
  },

  /**
   * Parse time in new Date() for time defined
   */
  computed: {
    parseTime: function parseTime() {
      return new Date(Date.parse(new Date()) + 1 * 1 * 1 * (this.time * 60) * 1000);
    }
  },
  beforeMount: function beforeMount() {
    var time = this.getTimeRemaining(this.parseTime);

    if (time) {
      this.countdown = time;
    }
  },
  mounted: function mounted() {
    this.startCountdown();
  },
  render: function render(createElement) {
    var _this = this;

    var strings = ["days", "hours", "minutes", "seconds"];
    var childrens = strings.map(function (v, i) {
      return createElement("li", [createElement("span", {
        class: "time"
      }, _this.labelTime(_this.countdown[v])), _this.labels.length ? createElement("span", {
        class: "label"
      }, _this.labels[i]) : ""]);
    });
    return createElement("ol", childrens);
  },
  methods: {
    getTimeRemaining: function getTimeRemaining(time) {
      /**
       * Convert time in counter
       */
      var total = Date.parse(time) - Date.parse(new Date());
      var days = Math.floor(total / (1000 * 60 * 60 * 24));
      var hours = Math.floor(total / (1000 * 60 * 60) % 24);
      var minutes = Math.floor(total / 1000 / 60 % 60);
      var seconds = Math.floor(total / 1000 % 60);
      return {
        total: total,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    },
    startCountdown: function startCountdown() {
      var _this2 = this;

      /**
       * Start countdown in interval one seconds
       */
      var interval = setInterval(function () {
        var time = _this2.getTimeRemaining(_this2.parseTime);

        if (time) {
          _this2.countdown = time;
        }

        if (time.total <= 0) {
          _this2.stopCountdown(interval);

          _this2.visible = false;

          if (typeof _this2.onComplete === "function") {
            _this2.onComplete();
          }
        }
      }, 1000);
    },
    stopCountdown: function stopCountdown(interval) {
      /**
       * Stop countdown
       */
      clearInterval(interval);
    },
    labelTime: function labelTime(time) {
      /**
       * Convert unitiis time in string "00"
       */
      return time >= 0 ? ("0" + time).slice(-2) : "00";
    }
  }
};

export default index;
