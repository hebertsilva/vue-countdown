export default {
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
      default() {
        return ["Days", "Hours", "Minutes", "Seconds"]
      }
    },

    /**
     * Emit event the countdown has completed
     */
    onComplete: {
      type: Function,
      default() {
        return null
      }
    }
  },
  data() {
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
    }
  },
  /**
   * Parse time in new Date() for time defined
   */
  computed: {
    parseTime() {
      return new Date(
        Date.parse(new Date()) + 1 * 1 * 1 * (this.time * 60) * 1000
      )
    }
  },
  beforeMount() {
    const time = this.getTimeRemaining(this.parseTime)

    if (time) {
      this.countdown = time
    }
  },
  mounted() {
    this.startCountdown()
  },
  render(createElement) {
    const strings = ["days", "hours", "minutes", "seconds"]

    const childrens = strings.map((v, i) => {
      return createElement("li", [
        createElement(
          "span",
          { class: "time" },
          this.labelTime(this.countdown[v])
        ),

        this.labels.length
          ? createElement("span", { class: "label" }, this.labels[i])
          : ""
      ])
    })

    return createElement("ol", childrens)
  },
  methods: {
    getTimeRemaining(time) {
      /**
       * Convert time in counter
       */
      const total = Date.parse(time) - Date.parse(new Date())
      const days = Math.floor(total / (1000 * 60 * 60 * 24))
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((total / 1000 / 60) % 60)
      const seconds = Math.floor((total / 1000) % 60)

      return {
        total: total,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      }
    },
    startCountdown() {
      /**
       * Start countdown in interval one seconds
       */
      const interval = setInterval(() => {
        const time = this.getTimeRemaining(this.parseTime)

        if (time) {
          this.countdown = time
        }

        if (time.total <= 0) {
          this.stopCountdown(interval)
          this.visible = false

          if (typeof this.onComplete === "function") {
            this.onComplete()
          }
        }
      }, 1000)
    },
    stopCountdown(interval) {
      /**
       * Stop countdown
       */
      clearInterval(interval)
    },
    labelTime(time) {
      /**
       * Convert unitiis time in string "00"
       */
      return time >= 0 ? ("0" + time).slice(-2) : "00"
    }
  }
}
