describe('Countdown', () => {
  it('should progress only when it is counting the time is 20', () => {
    new Vue({
      template: '<countdown ref="countdown" :time="20" />',
    }).$mount()
  })

  it('should event onComplete when the time is 0', (done) => {
    new Vue({
      methods: {
        handleCountdownEnd() {
          done()
        }
      },
      template: '<countdown ref="countdown" :time="0" :onComplete="handleCountdownEnd()" />'
    }).$mount()
  })

  it('should event not visible labels when the component', () => {
    new Vue({
      template: '<countdown ref="countdown" :time="0" :labels="[]" />'
    }).$mount()
  })

  it('should event has visible labels when the component', () => {
    new Vue({
      template: `<countdown ref="countdown" :time="0" :labels="['Days', 'Hours', 'Minutes', 'Seconds']" />`
    }).$mount()
  })
})
