rabbit
======
A little Sandbox — Playground to test snippets, grids or modules. Each Module tries to be as independent as possible but requires at least jQuery. 


---

- [grid](#grid)
- [slideshow](#simple-slideshow)
- [overlays](#overlays)
- [aspect ratio](#aspect-ratio)
- [Background Tiles](#background-tiles)
- [todos](#todos)


---
#### Grid

A little grid system starts with col- and than just 1-2 (1/2) and so on

```html
<div class="box col-1-2">
    <div class="inner">
      <img src="img1.jpg">
      <p>text</p>
    </div>
  </div>
```
| classname | width |
| --- | --- |
| .col-1-1 | 1 / 1 |
| .col-1-2 | 1 / 2 |
| .col-1-3 | 1 / 3 |
| .col-1-4 | 1 / 4 |

---

#### simple slideshow

```html
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

```html
<button data-button-style="simple" data-button="overlay">simple</button>
<div data-overlay-type="simple" data-type="overlay" class="active">
	<div class="inner">
		<h1>simple</h1>
	</div>
</div>
```

| data-overlay-type | description |
| --- | --- |
| simple overlay | simple fades in and out |
| scale-in | scales in |
| blur | blurs in !!!Caution - *these type of filters slow down performance*!!! |
| rotate | simple rotates in and out |
| rotate-x | simple rotates-x in and out |
| rotate-y | simple rotates-y in and out |
| slide-y-top | slide in and out from top |
| slide-y-bottom | slide in and out from bottom |


---

#### Aspect Ratio

Divs keep aspect ratio
data-type *aspect-ratio* and data-ratio describes the ratio e.g. '1-1'

```html
<div data-ratio="1-1" data-type="aspect-ratio">
    <div class="inner">
      <p>1-1 Aspect Ratio</p>
    </div>
  </div>
```
---

#### Background Tiles
tiles your background 
*data-background-style* for the overlay itself

```html
var $options = {
      element : 'round',
      col:4,
      offset:'1',
      bubble:false,
      image:'assets/img/lorempixum2.jpg'
    }
new rabbitBG($options);
```

| options | default | description |
| --- | --- | --- |
| element | *-* | element which has the data-background-style attribute (you can call it whatever you want) |
| col | *10* | number of columns ( number of row is equal to the number of columns. TODO: individual col and row) |
| offset | *1* | margin between the tiles |
| bubble | *false* | round corners true/false, default is false |
| image | *-* | set your image path |

---

### ToDos
- documentation
- Files that are used

| Name        | todo         | description |
| ------------- |:------------:| :-------|
| **slideshow** | loop through left |   |
| **slideshow** | caption      | add option caption(bool) |
| **testing** | test in all major browsers      |  |
| **files** | list all files you need to reach effect     |  |
| **Background Effects** | individual col and row     |  |
