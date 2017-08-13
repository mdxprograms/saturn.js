import Saturn from './saturn'

const url = 'https://www.reddit.com/r/javascript.json'
const btnTrigger = Saturn.orbit('[data-click-me]')
const stateKey = 'javascript'

btnTrigger.on('click')
  .then(() => Saturn.fetchData(url, stateKey))
  .then(() => Saturn.render('[data-render-me]',
    `
      <p>
        ${Saturn.state.javascript.data.children[1].data.title}
      </p>
    `
  ))