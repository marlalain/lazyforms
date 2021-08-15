# LazyForms

LazyForms is a browser extension to help developers fill out forms quicker and in better ways, using user-defined lists with entries and external APIs with random, default and customized values.

## Current project status

The project is not even near being usable right now unless you hardcoded your own entries. Please check it out later!

## Install

First build everything:

```sh
git clone https://github.com/paulo-e/lazyforms
# or gh repo clone paulo-e/lazyforms
cd lazyforms
yarn # to install
yarn build
```

### Chrome/Chromium/Ungoogled Chromium

- Go to [chrome://extensions](chrome://extensions)
- Enable `Developer Mode`
- Click on `Load unpacked` and open the `./dist` folder

### Brave

- Go to [brave://extensions](chrome://extensions)
- Enable `Developer Mode`
- Click on `Load unpacked` and open the `./dist` folder

### Firefox

- Go to [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox)
- Enable `Developer Mode`
- Click on `Load Temporary Add-on`
- Open the `./dist/manifest.json` file
