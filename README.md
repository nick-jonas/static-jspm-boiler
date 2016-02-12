# Static JSPM Boilerplate

This is a boilerplate for static websites that use JSPM, ES6 (with ES5 babel transpiler), Stylus, NPM as a task runner, and deploy scripts for App Engine.  

## Install dependencies

#### 1. Google App Engine SDK 

If you're planning on pushing to AppEngine, make sure you have this installed.  Download the [Google App Engine SDK for Python](https://cloud.google.com/appengine/downloads#Google_App_Engine_SDK_for_Python).  This will allow you to deploy your app directly to app engine.

#### 2. Node & and global CLIs used

With Node.js installed, install these global modules which are used in the task runners:

```
npm install -g stylus
npm install -g jspm
npm install -g jspm-server
npm install -g concurrently
npm install -g autoprefixer-stylus
```

#### 3. Local modules

Install the local node_modules with:

```
npm install
```

## Local Dev

This allows for local development [ES6](https://github.com/DrkSephy/es6-cheatsheet) (transpiles to ES5 when building), so make sure your browser supports it.  In chrome, you can enable a flag here:

[chrome://flags/#enable-javascript-harmony](chrome://flags/#enable-javascript-harmony)


Then to launch a local server:

```
npm run serve
```

## Building for Production

When building the files for production, a ```dist``` folder is created in the root of your project directory:

```
npm run build
```

If you plan on deploying to App Engine, change ```YOUR_PROJECT_ID``` to your project ID in ```app.yaml```, and run:

```
npm run deploy
```

This will both build and deploy your project to your App Engine instance.



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