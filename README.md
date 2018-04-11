# CSS Modules quick start

> Using [css-modules](https://github.com/css-modules/css-modules)
with [webpack](http://webpack.github.io/) 
and [style-loader](https://github.com/webpack/style-loader)

## Setup

```zsh
git clone git@github.com:SmithPeder/css-modules.git

npm install

npm start
```

## Description
To get CSS Modules to work the [style-loader](https://github.com/webpack/style-loader) has to be added to your development dependencies.

```js
// package.json
...
"devDependencies": {
    ...
    style-loader: "^0.12.3",
    ...
}
...
```

Then write a loader for `.css` files
```js
// webpack.config.js
...
{
    test: /\.css$/,
    loader:
    'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
}
...
```

The rest of the configurations in `package.json` and `webpack.config.js` are needed to get 
boilerplate project to run, but are technically not needed for the CSS Modules.


## Result

> The loader adds a hash suffix after every classname
```html
<div>
    <div class="Header__root___1bSWx">
        <h1 class="Header__text___2F6ja"> Header </h1>
    </div>
    <div class="Main__root___2pBCi">
        <h1 class="Main__text___380AU">Main</h1>
    </div>
    <div class="Footer__root___2RaCj">
        <h1 class="Footer__text___2vHCC">Footer</h1>
    </div>
</div>
```
> The result is tree components that have the same classnames but different style
<img src="https://i.imgur.com/PRimUbx.png"/>

