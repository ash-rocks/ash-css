[ashlink]: https://ashcss.rocks/
[ashlogo]: https://cdn.jsdelivr.net/gh/ash-rocks/ash-css@main/public/logo.svg

[![ASH CSS][ashlogo]][ashlink]

**Modern CSS-only semantic framework with a built-in dark mode. No JavaScript required!**

ASH is a responsive flex-based framework using only CSS. ASH combines classless semantic elements with classed components to build awesome front-ends. ASH requires no JavaScript and weighs in at ~20kb gzipped!

> This project can be used in production, as it is currently being used is several projects, but please be aware that it is currently in "beta". Once version 1.0.0 is released this message will be removed. Help us find bugs or other issues!

[discordlink]: https://discord.gg/zJpX85f
[discordbanner]: https://discordapp.com/api/guilds/687023973749358635/widget.png?style=banner2

[![ASH CSS Discord][discordbanner]][discordlink]

## Get ASH CSS
There are a few ways to get ASH CSS. You can download a compiled version, use our CDN, with NPM, or clone and build from the source.

### Compiled CSS
Download compiled CSS to use in your self-hosted project. This includes compiled and minified CSS files. [Releases](https://github.com/ash-rocks/ash-css/releases)

### CDN
Use the code below to drop-in ASH CSS to your project from our CDN. The CDN will be cached, minified, and gzipped.
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ash-rocks/ash-css@main/dist/ash/ash.min.css">
```

### NPM
ASH can be installed in a NodeJS project using NPM.
```bash
npm install ash-css --save
```
```javascript
import 'ash-css/dist/ash/ash.min.css';
```

### Source
Clone ASH CSS from source for when you want to contribute or customize to fit your needs. The source includes the docs you see here and can be used as a playground for customization.
```bash
git clone https://github.com/ash-rocks/ash-css.git
cd ash-css
npm install
```

## Running the docs
After you clone ASH CSS from source code you can run the docs locally. Local docs are totally offline and will be available at http://localhost:8080/
```bash
cd ash-css
npm run docs
```

## Building from source
After you clone ASH CSS from source code you can build your own customized version. All built files will be available in `dist/ash`
```bash
cd ash-css
npm run build-ash
```

## Using ASH CSS
After building from source, downloading the compiled release, or using the CDN just include the minified version in the head of your HTML. Use the below starting template:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>YOUR APP</title>
    <link rel="stylesheet" href="/path/to/ash/css/or/cdn">
  </head>
  <body>
    ...
  </body>
</html>
```

## Customizing ASH CSS
ASH uses LESS makes it easy to change variables and to exclude unneeded elements, components, and utilities. Almost have of the total size of ASH will be from utilities. All files needed for customization will be found in the `ash` folder. The main LESS file is `ash/ash.less`. Take a look!

- `ash/ash.less` is the main LESS file and has all the includes used to make up ASH CSS. Just comment out lines if they are not needed!
- `ash/base` includes base classes, resets, the grid system, and the base dark mode
- `ash/components` includes classed components
- `ash/elements` includes classless elements
- `ash/utilities` includes all the extra utilities to extend ASH CSS
- `ash/variables` includes all the variables used to build ASH CSS

## Sponsors
Support this project and possibly other open-source projects by becoming a sponsor. Higher tier sponsor will appear here with a logo and link to your website. [Become a sponsor](https://github.com/sponsors/skuIIs)

## Code of conduct
>Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

## Copyright and license
Code and documentation copyright 2020 the [ASH CSS Authors](https://github.com/ash-rocks/ash-css/graphs/contributors). Code and documentation released under the [MIT](https://github.com/ash-rocks/ash-css/blob/main/LICENSE) License.
