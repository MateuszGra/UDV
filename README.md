# UVD
## Universal Data Validation

## THIS IS STILL IN DEVELOPMENT
demo: https://mateuszgra.github.io/UDV/.

HTML example:

```html
//input type text
<form>
    <label>
        <input data-req="true" data-reg="[0-9]{2}-[0-9]{3}">
    </label>
</form>
 
//input type checkbox
<form>
    <label>
        <input type="checkbox" data-req="true">
    </label>
</form>
```

To stop the actions before validation:

```JavaScript
if(udvalidation('selector-container')){ //.class #id ...

    //Your code, for example, sending the form

}
```


