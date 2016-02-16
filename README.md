# Static JSPM Boilerplate

This is a boilerplate for static websites that use JSPM, ES6 (with ES5 babel transpiler), Stylus, NPM as a task runner, and deploy scripts for App Engine.  

## Install dependencies

#### 1. Google App Engine SDK 

If you're planning on pushing to AppEngine, make sure you have this installed.  Download the [Google App Engine SDK for Python](https://cloud.google.com/appengine/downloads#Google_App_Engine_SDK_for_Python).  This will allow you to deploy your app directly to app engine.

#### 2. Python Requirements

Install the Flask components needed by running:

```
pip install -r requirements.txt -t lib
```

#### 3. Node & and global CLIs used

With Node.js installed, install these global modules which are used in the task runners:

```
npm install -g stylus
npm install -g jspm
npm install -g concurrently
npm install -g autoprefixer-stylus
npm install -g browsersync
```

#### 4. Local modules

Install the local node_modules with:

```
npm install
```

## Local Dev

This allows for local development [ES6](https://github.com/DrkSephy/es6-cheatsheet) (transpiles to ES5 when building), so make sure your browser supports it.  In chrome, you can enable a flag here:

[chrome://flags/#enable-javascript-harmony](chrome://flags/#enable-javascript-harmony)


We use the local [AppEngine Python dev server](https://cloud.google.com/appengine/docs/python/tools/devserver) on port 6969, and proxy it via Browsersync to port 5000 for livereloading functionality.  Launch a local server by running:

```
npm run serve
```


## Building for Production

Building bundles up all the javascript using JSPM, and CSS using Stylus, with this command:

```
npm run build
```

If you plan on deploying to App Engine, make sure to change ```your-project-id``` to your project ID in ```app.yaml```, and run:

```
npm run deploy
```



### What?  No jQuery?!

Browsers are catching on with all the syntactic sugar that jQuery offered.  [This guide](http://tutorialzine.com/2014/06/10-tips-for-writing-javascript-without-jquery/) will help you make the leap.

The lightweight [reqwest](https://github.com/ded/reqwest) library has been included for AJAX calls.  You can use it by doing the following:

```
import reqwest from 'reqwest';

reqwest({
  url: 'https://www.googleapis.com/language/translate/v2?key=' + API_KEY + '&q=' + encodeURIComponent(body) + '&target=' + target,
  method: 'get',
  success: function(result){
    onSuccess(result.data.translations[0].translatedText);
  },
  error: onError
});
```

### Installing packages for JSPM

Install any packages from the jspm registry, Github, or npm:

```
jspm install npm:lodash-node
jspm install github:components/jquery
jspm install jquery
jspm install myname=npm:underscore
```

[More on configuring packages for JSPM](https://github.com/jspm/registry/wiki/Configuring-Packages-for-jspm)