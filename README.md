Angular Double List (dblist)
==

This is a library to create a double list select with the help the library
[multiselect](https://github.com/lou/multi-select) (jquery plugin) with two way data binding and using directives.

compatible with angular 1.3+, tested with 1.4.beta

To use it just put in your module

```javascript
  angular.module('myApp', ['dblist']);
```


And in yor controller view

```html
  <duble-list origin='listItems' origin-value='itemId' origin-text='itemName' dest-model='itemIds' />
```

In which listItems will be an array of json that will be show on screen to be selected 
`origin-value` is the key of the json that will be part of the select
`origin-text` is the key of the json that the user will select on screen
`dest-model` is an array that will be populated with the `origin-value` value for you to manipulate.
