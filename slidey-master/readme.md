# Slidey

A dead-simple slide-in navigation drawer for websites, built using CSS and triggered using Javascript. Meant to only have one instance per page.

## Features
- Follows [BEM Syntax](https://css-tricks.com/bem-101/)
- Comes with just the drawer, leaves the menu item styling to the user.
- Optional default stying CSS available using class "slidey--styled" so you can build on it or use it as an example.

## Usage

Include the CSS in head:
```html
    <link rel="stylesheet" href="Slidey.css">
```
Include JS after jQuery:

    
```html
    <!-- Include jQuery here -->
    <script src="Slidey.js"></script>
```

Put this markup anywhere in the body (usually first thing in the body):

```html    
    <nav class="slidey slidey--right slidey--styled">
        <a href="#" class="slidey__brand">Brand Name</a> <!-- Optional -->
        <a href="#">Menu Item 1</a>
        <a href="#">Menu Item 2</a>
        <a href="#">Menu Item 3</a>
        <a href="#">Menu Item 4</a>
        <a href="#">Menu Item 5</a>

        <div class="slidey__toggle"></div> <!-- Optional -->
        <div class="slidey__close"></div> <!-- Optional -->
    </nav>
```    

### Some notes about how to use the classes

- To any container you want to convert to a slider, doesn't matter if it is nav or div, add the "slidey" class.
- You MUST also add either the "slidey--left" or "slidey--right" modifier to the same element.
- So far, you have applied the styles needed for the slider to work.
- Optionally, you can also add the "slidey--styled" class to the same element to apply basic styling.
- "slidey--styled" adds styles for anchor tags inside the slidey element. Additionally, any anchor tag with the class "slidey__brand" will make the text prominent and large.
- Immediately inside the slidey element, you can optionally add an element with the "slidey__toggle" class which toggles the drawer. This element is positioned to look attached to the drawer.
- Immediately inside the slidey element, you can optionally add an element with the "slidey__close" class which closes the drawer. This element is positioned in the top-right corner of the slidey element acting as a close button. Useful when the toggle goes off-screen in small screens.

## Dependencies

- jQuery (any version). Just being used to add and remove a class on clicking something. Feel free to use plain JS.
- Browser supporting CSS transitions for the sliding animation. Without it, menu still works but toggles instantly.

## Compatibility

- Unknown, guessing IE8 and above. I am coding blind, so I can't guarantee support for old browser versions just yet.
- Not using anything fancy so should be compatible with pretty much all modern browsers on all devices.
