rabbit
======
A little Sandbox — Playground to test little Snippets, Grid, Modules. Each Module tries to be independent as possible but requires jQuery and Modernizr.

---

#### simple slideshow

```javascript
	var $options = {
	  		'pagination':true,
	  		'loop':true,
	  		'height':300,
	  		'width':100
	  	}
	//init with
	rabbit.slideshow($options);
```



| Name          | Option       | default| description |
| ------------- |:------------:| :-----:| :-------|
| **width**     | %            | *100*  | set width in percentage   |
| **height**    | px           | *300*  | set height in px   |
| **pagination**| true/false   | *true* | show pagination  |
| **loop**      | true/false   | *true* | loops through all images and start with the first one if you hit the last  |

---

#### overlays
use *data-button-style* for buttons
*data-overlay-type* for the overlay itself

| data-overlay-type | description |
| --- | --- |
| simple overlay | simple fades in and out |
| scale-in | scales in |
| blur | blurs in !!!Caution - *these type of filters slow down performance*!!! |


---

### ToDos
- documentation
- Files that are used


| Method | todo | description |
| slideshow | loop through left |  |
| slideshow | caption | add option caption(bool) |
