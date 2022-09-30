# vuejs-test-utils-plugin-vuex-memory-issue
Attempting to replicate an issue I have seen in a larger project (8,000+ tests) that runs out of heap memory during full test suite run.

See [this vuejs/test-tils issue](https://github.com/vuejs/test-utils/issues/1787) for more details.

This project was created from from vue-cli v4 (webpack, vuex, mocha).  I have modified the one and only test in that project to attempt to demonstrate the issue:

1. Looped single test many times
1. Created a store and added to `global.plugins` for each test.
   1. I used [this exmaple](https://test-utils.vuejs.org/guide/advanced/vuex.html#testing-with-a-real-vuex-store) to create/add the store.
1. Added `unmount` at the end of each test

I am testing by running `npm run unitI` then inspecting with chrome devtools.  I observe that
- The togal JS heap size continues to grow
- When looking at Allocation instrumentation on timeline, each test seems to leak memory

When I run the original test (no store, no plugins) I do not see this memory leak.


## Project setup
Currently running with
- node v14.18.1
- npm 6.14.15

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
