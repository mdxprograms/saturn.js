import 'whatwg-fetch'

// simple placeholder state
const Rings = {
  state: {},
  update: function(key, data) {
    this.state[`${key}`] = data
  }
}

/*
* @TODOs:
*   1. add toggling
*   2. add template library => bel, hyperx, yoyo
*/
const Saturn = {
  state: Rings.state,

  orbit(el) {
    this.el = document.querySelector(el)
    return this
  },

  fetchData(url, key) {
    return fetch(url)
      .then(res => res.json())
      .then(data => Rings.update(key, data))
      .catch(err => console.error(err))
  },

  setData(key, data) {
    return Rings.update(key, data)
  },

  on(type) {
    return new Promise((resolve, reject) => {
      this.el.addEventListener(type, resolve)
    })
  },

  render(el, template) {
    return document.querySelector(el).innerHTML = template
  }
}

export default Saturn
