const { resolve } = require('path')

const pickFirst = (...args) => {
  for (const arg of args) {
    if (arg !== undefined) {
      return arg
    }
  }
}

// --- Main Nuxt.js module ---
module.exports = function nuxtMDBVue(moduleOptions = {}) {
  this.nuxt.hook('build:before', () => {
    // Merge moduleOptions with default
    const options = {
      ...this.options.mdbvue,
      ...moduleOptions
    }

    // Ensure we have arrays
    this.options.css = [].concat(this.options.css || [])
    this.options.build.transpile = [].concat(this.options.build.transpile || [])

    const roboto = pickFirst(
      options.roboto,
      // Defaults to `true` if no other options provided
      true
    )

    if (roboto) {
      this.options.head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
      })
    }

    const icons = pickFirst(
      options.icons,
      // Defaults to `true` if no other options provided
      true
    )

    if (icons) {
      this.options.css.unshift('@fortawesome/fontawesome-free/css/all.min.css')
    }

    const css = pickFirst(
      options.css,
      // Defaults to `true` if no other options provided
      true
    )

    if (css) {
      this.options.css.unshift('mdbvue/lib/css/mdb.min.css')
    }

    const bootstrap = pickFirst(
      options.bootstrap,
      // Defaults to `true` if no other options provided
      true
    )

    if (bootstrap) {
      this.options.css.unshift('bootstrap-css-only/css/bootstrap.min.css')
    }

    const plugins = pickFirst(
      options.plugins,
      // Defaults to `true` if no other options provided
      true
    )

    // plugins

    // tree-shaking
    this.options.build.transpile.push('mdbvue/lib/components')

  })
}

module.exports.meta = require('../package.json')