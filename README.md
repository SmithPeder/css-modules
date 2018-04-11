# Css-modules boilerplate

> Using css-modules with [webpack](http://webpack.github.io/) and [style-loader](https://github.com/webpack/style-loader)

## Setup

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

