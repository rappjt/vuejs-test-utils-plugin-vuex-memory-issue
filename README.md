# vuejs-test-utils-plugin-vuex-memory-issue
Attempting to replicate an issue I have seen in a larger project (8,000+ tests) that runs out of heap memory during full test suite run.

Currently running with
- node v14.18.1
- npm 6.14.15

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run unit
```

Run with --inspect-brk and long timeout to accommodate profiling overhead
```
npm run unitI
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
