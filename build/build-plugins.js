#!/usr/bin/env node

/*!
 * Script to build our plugins to use them separately.
 * Copyright 2020-2021 The Bootstrap Authors
 * Copyright 2020-2021 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */

'use strict'

const path = require('path')
const rollup = require('rollup')
const glob = require('glob')
const { babel } = require('@rollup/plugin-babel')
const banner = require('./banner.js')

const rootPath = path.resolve(__dirname, '../js/dist/')
const plugins = [
  babel({
    // Only transpile our source code
    exclude: 'node_modules/**',
    // Include the helpers in each file, at most one copy of each
    babelHelpers: 'bundled'
  })
]
const bsPlugins = {
  Data: path.resolve(__dirname, '../js/src/dom/data.js'),
  EventHandler: path.resolve(__dirname, '../js/src/dom/event-handler.js'),
  Manipulator: path.resolve(__dirname, '../js/src/dom/manipulator.js'),
  SelectorEngine: path.resolve(__dirname, '../js/src/dom/selector-engine.js'),
  Alert: path.resolve(__dirname, '../js/src/alert.js'),
  Base: path.resolve(__dirname, '../js/src/base-component.js'),
  Button: path.resolve(__dirname, '../js/src/button.js'),
  Carousel: path.resolve(__dirname, '../js/src/carousel.js'),
  Collapse: path.resolve(__dirname, '../js/src/collapse.js'),
  Dropdown: path.resolve(__dirname, '../js/src/dropdown.js'),
  Modal: path.resolve(__dirname, '../js/src/modal.js'),
  Offcanvas: path.resolve(__dirname, '../js/src/offcanvas.js'),
  Popover: path.resolve(__dirname, '../js/src/popover.js'),
  QuantitySelector: path.resolve(__dirname, '../js/src/quantity-selector.js'),
  ScrollSpy: path.resolve(__dirname, '../js/src/scrollspy.js'),
  Tab: path.resolve(__dirname, '../js/src/tab.js'),
  Toast: path.resolve(__dirname, '../js/src/toast.js'),
  Tooltip: path.resolve(__dirname, '../js/src/tooltip.js')
}

const defaultPluginConfig = {
  external: [
    bsPlugins.Data,
    bsPlugins.Base,
    bsPlugins.EventHandler,
    bsPlugins.SelectorEngine
  ],
  globals: {
    [bsPlugins.Data]: 'Data',
    [bsPlugins.Base]: 'Base',
    [bsPlugins.EventHandler]: 'EventHandler',
    [bsPlugins.SelectorEngine]: 'SelectorEngine'
  }
}

const getConfigByPluginKey = pluginKey => {
  switch (pluginKey) {
    case 'Alert':
    case 'Offcanvas':
    case 'Tab':
      return defaultPluginConfig

    case 'Base':
    case 'Button':
    case 'Carousel':
    case 'Collapse':
    case 'Modal':
    case 'QuantitySelector':
    case 'ScrollSpy': {
      const config = Object.assign(defaultPluginConfig)
      config.external.push(bsPlugins.Manipulator)
      config.globals[bsPlugins.Manipulator] = 'Manipulator'
      return config
    }

// Trims the "js" extension and uppercases => first letter, hyphens, backslashes & slashes
const filenameToEntity = filename => filename.replace('.js', '')
  .replace(/(?:^|-|\/|\\)[a-z]/g, str => str.slice(-1).toUpperCase())

for (const file of jsFiles) {
  resolvedPlugins.push({
    src: file.replace('.js', ''),
    dist: file.replace('src', 'dist'),
    fileName: path.basename(file),
    className: filenameToEntity(path.basename(file))
    // safeClassName: filenameToEntity(path.relative(srcPath, file))
  })
}

const build = async plugin => {
  const globals = {}

  const bundle = await rollup.rollup({
    input: plugin.src,
    plugins: [
      babel({
        // Only transpile our source code
        exclude: 'node_modules/**',
        // Include the helpers in each file, at most one copy of each
        babelHelpers: 'bundled'
      })
    ],
    external: source => {
      // Pattern to identify local files
      const pattern = /^(\.{1,2})\//

      // It's not a local file, e.g a Node.js package
      if (!pattern.test(source)) {
        globals[source] = source
        return true
      }

      const usedPlugin = resolvedPlugins.find(plugin => {
        return plugin.src.includes(source.replace(pattern, ''))
      })

      if (!usedPlugin) {
        throw new Error(`Source ${source} is not mapped!`)
      }

      // We can change `Index` with `UtilIndex` etc if we use
      // `safeClassName` instead of `className` everywhere
      globals[path.normalize(usedPlugin.src)] = usedPlugin.className
      return true
    }
  })

  await bundle.write({
    banner: banner(plugin.fileName),
    format: 'umd',
    name: plugin.className,
    sourcemap: true,
    globals,
    generatedCode: 'es2015',
    file: plugin.dist
  })

  console.log(`Built ${plugin.className}`)
}

(async () => {
  try {
    const basename = path.basename(__filename)
    const timeLabel = `[${basename}] finished`

    console.log('Building individual plugins...')
    console.time(timeLabel)

    await Promise.all(Object.values(resolvedPlugins).map(plugin => build(plugin)))

    console.timeEnd(timeLabel)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()
