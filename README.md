# CSS Display, Position, and Z-Index


# 1. Add CSS to improve `index.html`

- Make a CSS file and import it into your HTML. Feel free to adjust your **HTML or CSS** as needed.
- Frequently, we'd like to make our navigation bar (navbar) always visible so that we don't have to scroll all the way to the top to access the links. We can do this by using the `fixed` position value.
- Observe and utilize the classes given to the HTML elements that constitute a 'project card'. Those are `project_card`, `project_description`, `project_image`.  
  * Make all the project images the same width and height keeping their 16:9 aspect ratio. 
  * Give each project a solid border of 2px
  * Give the project description a [semi-transparent](https://www.w3schools.com/cssref/func_rgba.asp) background in a color of your liking;
  * Change the text color to contrast nicely with your background color making your text pleasant to read. In my case this is White.
  * Utilizing `position: absolute;` for `.project_description`, lay it over you project image. You will also need to give the parent element a `position` otherwise the `position: absolute;` given to the child will be relative to the `body`. Given that you have a semi-transparent background color this will give a nice effect.

    <details>
      <summary>Hint</summary>

      Read about [`position: absolute;`](https://css-tricks.com/almanac/properties/p/position/)
    </details>
  * Once you have all the above you may have a bug. If you scroll down over your projects you may find that your navbar may be going under the project cards. The navbar should always be on top of everything. Fix this using the `z-index`; 

- Using position, visually arrange the Skills section lists into steps. Each one in increments of 10% from the left side; A suggestion maybe to wrap your list and corresponding header in a `div` to make this easier.

- Using either `flex` or `grid` for the `Contact Me` section make all the information appear in one line/row rather than a column. It will serve us as a footer.  Make sure your items have some space in between.

- Make the 'Back to top' button appear always visible on the bottom right corner of the window no matter where the user has scrolled to.

- Let's shed some light on the situation. Place this [image](http://www.sunnysidedrama.com/index/Welcome_files/Playtime_Sun-4.png) in the upper-right hand corner of the screen. Give it `position: absolute` so it stays there, and make sure it has a `z-index` so that nothing ever covers it.

# 2. Add CSS to make `index.html` unusable!

Now, because we're evil, let's make some parts of the page as **unusable as possible** (muahaha). Make a copy of your `index.html` file called `evilIndex.html`, and make a corresponding copy of your CSS:

- `:hover` is something that you can add to your CSS selectors to change their styling when the mouse is hovering over an element. We'd like to mess with our users and make elements disappear when they mouse over the element. Add `display: none` to your `img` elements' `hover` selectors so that the images disappear when the user mouses over them.
- Bonus: Add `hover` selectors to your different text elements that change their `background-color`.
- You know what would maximize use of space? If our elements were _unbelievably thin_ and placed next to each other. Make the `width` of each element 20px. Then add `display: flex; justify-content: space-around` to your `body` selector. **Much better.**
- Some of our elements are stepping on each others' toes. Add `position: relative` to each element and give them `top`, `bottom`, `left`, and `right` properties until they're properly spaced apart.

**Bonus**: See how deviously unusable you can make your site.
