![alt text](assets/img/hase-ico.png "rabbit") rabbit
======
A little Sandbox — Playground to test snippets, grids or modules. Each Module tries to be as independent as possible but requires at least jQuery. You can find some examples on the [demo page.](http://rabbit.holy-crab.de/)

---

- [grid](#grid) *a simple grid system*
- [slideshow](#simple-slideshow) *a simple slideshow based on an unordered list*
- [overlays](#overlays) *different overlays*
- [aspect ratio](#aspect-ratio) *div's that keep their aspect ratio*
- [Background Tiles](#background-tiles) *tiles your background images*
- [todos](#todos) 

---
#### Grid

A little grid system starts with col- and than just 1-2 (1/2) and so on

| classname | width |
| --- | --- |
| .col-1-1 | 1 / 1 |
| .col-1-2 | 1 / 2 |
| .col-1-3 | 1 / 3 |
| .col-1-4 | 1 / 4 |

```haml
<!--haml-->

.box col-1-2
  .inner
    %img{:src=>"img1.jpg", :alt =>'img 1'}
    %p text

.box col-1-2
  .box.col-1-2
    .inner
  .box.col-1-2
    .inner
```

---

#### simple slideshow

```haml
<!--haml-->

%ul.slideshow
  %li
    %img{:src=>"bild-1.jpg",:alt=>"bild"}
  %li
    %img{:src=>"bild-1.jpg",:alt=>"bild"}
  %li
    %img{:src=>"bild-1.jpg",:alt=>"bild"}
  %li
    %img{:src=>"bild-1.jpg",:alt=>"bild"}
```

```javascript
/*js*/

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
- use *data-button-style* for buttons
- *data-overlay-type* for the overlay itself

```haml
<!--haml-->

%button{:'data-button-style'=>"simple",:'data-button'=>"overlay"}
  simple
.active{:'data-overlay-type'=>"simple",:'data-type'=>"overlay"}
  .inner
		%h1 simple
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

- Divs keep aspect ratio
- data-type *aspect-ratio* and data-ratio describes the ratio e.g. '1-1'

```haml
<!--haml-->

%div{:'data-ratio'=>"1-1", :'data-type'=>"aspect-ratio"}
  .inner
    %p 1-1 Aspect Ratio
```
---

#### Background Tiles
- tiles your background 
- *data-background-style* for the overlay itself

```js
/*js*/

var $options = {
    style : 'cube',
    identifier:4,
    col:2,
    offset:.8,
    image:'assets/img/lorempixum2.jpg'
  };


  rabbit.bg($options);
```

| options | default | description |
| --- | :---: | :--- |
| style | *simple* | simple,cube |
| identifier | *-* | ID |
| col | *10* | number of columns ( number of row is equal to the number of columns. TODO: individual col and row) |
| offset | *1* | margin between the tiles |
| image | *-* | set your image path |

---

### ToDos
- documentation
- browser testing

| Name        | todo         | description |
| ------------- |:------------| :-------|
| **slideshow** | loop through left |   |
| **slideshow** | caption      | add option caption(bool) |
| **testing** | test in all major browsers      |  |
| **files** | list all files you need to reach effect     |  |
| **Background Effects** | individual col and row     |  |
