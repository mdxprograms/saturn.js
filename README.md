# Saturn.js

> An easy to use minimal js library for earth and beyond

![saturn](https://d3jkudlc7u70kh.cloudfront.net/saturn-facts.jpg)

### Sample:

```javascript
  import Saturn from './saturn'

  const url = 'https://www.reddit.com/r/webdev.json'
  const btnTrigger = Saturn.orbit('[data-click-me]')

  btnTrigger.on('click')
    .then(() => Saturn.fetchData(url, 'javascript'))
    .then(() => Saturn.render(
      '[data-render-me]',
      `<p>${Saturn.state.javascript.data.children[1].data.title}</p>`
    ))
```

```html
  <button data-click-me>Click me</button>
  <div data-render-me>I'm going to show something!</div>

  <script src="./sample.min.js"></script>
```

[### Current issues/enhancements](https://github.com/mdxprograms/saturn.js/issues)