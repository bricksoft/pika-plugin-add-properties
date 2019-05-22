# pika-plugin-add-properties ![npm](https://img.shields.io/npm/v/pika-plugin-add-properties.svg)

This plugin adds given values into built package.json of @pika/pkg builds.

To get started use your favourite node package manager (e.g. npm or yarn) and type

> npm install pika-plugin-add-properties

or

> yarn add plugin-add-properties

After installing this plugin add it to the pipeline.

It is recommended to put it as first step but you have to add it before compilation pipeline steps.

This plugin is derived from https://github.com/jabuco/pika-plugin-merge-properties which adds pre-existing package.json properties.
This plugin works similar but uses the properties you put in plugin option.

## example configuration

```
{
  "name": "my-pika-app",
  "version": "1.0.0",
  "scripts": {
    "build": "pika-pack build",
    "publish": "pika-pack publish"
  },
  "@pika/pack": {
    "pipeline": [
      [
        "@pika/plugin-standard-pkg"
      ],
      [
        "pika-plugin-add-properties",
        {
          "properties": {
            "foo": "bar",
            "also": {
              "nested": "works!"
            }
        }
      ],
      [
        "@pika/plugin-build-node",
        {}
      ]
    ]
  },
  "devDependencies": {
    "@pika/pack": "^0.3.7",
    "@pika/plugin-build-node": "^0.3.16",
    "@pika/plugin-standard-pkg": "^0.3.16",
    "pika-plugin-merge-properties": "^1.0.1"
  }
}
```
