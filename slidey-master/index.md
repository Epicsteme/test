---
layout: default
title: Slidey CSS Drawer
---

<link rel="stylesheet" href="Slidey.css">

<nav id="slidey" class="slidey--left slidey--styled">
    <a href="#" class="slidey__brand">Brand Name</a> <!-- Optional -->
    <a href="#">Menu Item 1</a>
    <a href="#">Menu Item 2</a>
    <a href="#">Menu Item 3</a>
    <a href="#">Menu Item 4</a>
    <a href="#">Menu Item 5</a>

    <div id="slidey__toggle"></div> <!-- Optional -->
    <div id="slidey__close"></div> <!-- Optional -->
</nav>

# Slidey Drawer

A dead-simple slide-in navigation drawer for websites, built using CSS and triggered using Javascript.

## Demo

<script type="text/javascript">
    function moveToLeft() {
        document.getElementById('slidey').classList.remove('slidey--right');
        document.getElementById('slidey').classList.add('slidey--left');
    }
    function moveToRight() {
        document.getElementById('slidey').classList.remove('slidey--left');
        document.getElementById('slidey').classList.add('slidey--right');
    }
    function toggleDefaultStyle() {
        document.getElementById('slidey').classList.toggle('slidey--styled');
    }
</script>
<button onclick="moveToLeft()">Move to left</button>
<button onclick="moveToRight()">Move to right</button>
<button onclick="toggleDefaultStyle()">Toggle default styling</button>

## Features

- Follows [BEM Syntax](https://css-tricks.com/bem-101).
- Comes with just the drawer, leaves the menu item styling to the user.
- Optional default stying CSS available using class "slidey--styled" so you can build on it.
- Designed to be used with only one instance per page. Because if your website needs more than one global navigation drawer, you need to re-think your design.

## Usage

1. Include the CSS in head

```html
<link rel="stylesheet" href="Slidey.css">
```

2. Include Javascript

```html
<script src="Slidey.js"></script>
```

3. Put this markup anywhere on the page

```html
<nav id="slidey" class="slidey--left slidey--styled">
    <a href="#" class="slidey__brand">Brand Name</a> <!-- Optional -->
    <a href="#">Menu Item 1</a>
    <a href="#">Menu Item 2</a>
    <a href="#">Menu Item 3</a>
    <a href="#">Menu Item 4</a>
    <a href="#">Menu Item 5</a>

    <div id="slidey__toggle"></div> <!-- Optional -->
    <div id="slidey__close"></div> <!-- Optional -->
</nav>
```

### How to use the CSS classes

#### Mandatory Styling

- To convert any container into a slider (ideally a nav element), add the ```slidey``` id.
- Add either the ```slidey--left``` or ```slidey--right``` class to the same element.

#### Optional Styling

- To apply the included basic style, add the ```slidey--styled``` class.
  - This adds styles for anchor tags inside the slidey element.
  - Additionally, any anchor tag with the class ```slidey__brand``` will make the text prominent and large.

- Immediately inside the slidey element, add an element with the ```slidey__toggle``` id. Clicking this toggles the drawer.
- Immediately inside the slidey element, add an element with the ```slidey__close``` id. Clicking this closes the drawer.
  - This element is positioned in the top-right corner of the drawer.

## Dependencies

- Some Javascript to toggle classes on clicks. Included in Slidey.js, modify as needed.

## Compatibility

- There are no niche CSS hacks, so this should work in most modern browsers on most platforms.
- Not tested for legacy browser environments.

<script src="Slidey.js"></script>
