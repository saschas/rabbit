rabbit
======
A little Sandbox — Playground to test little Snippets, Grid, Modules. Each Module tries to be independent as possible but requires jQuery and Modernizr.


---

#### Grid

A little grid system starts with col- and than just 1-2 (1/2) and so on

```
<div class="box col-1-2">
    <div class="inner">
      <img src="img1.jpg">
      <p>text</p>
    </div>
  </div>
```


---

#### simple slideshow

```
<ul class="slideshow">
  <li><img src="bild-1.jpg" alt="bild"/></li>
  <li><img src="bild-1.jpg" alt="bild"/></li>
  <li><img src="bild-1.jpg" alt="bild"/></li>
</ul>
```

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

#### Aspect Ratio

Divs keep aspect ratio
data-type *aspect-ratio* and data-ratio describes the ratio e.g. '1-1'

```
<div data-ratio="1-1" data-type="aspect-ratio">
    <div class="inner">
      <p>1-1 Aspect Ratio</p>
    </div>
  </div>
```

---

### ToDos
- documentation
- Files that are used

| Method        | todo         | description |
| ------------- |:------------:| :-------|
| **slideshow** | loop through left |   |
| **slideshow** | caption      | add option caption(bool) |