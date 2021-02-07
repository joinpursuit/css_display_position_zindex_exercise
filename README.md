[![Pursuit Logo](https://avatars1.githubusercontent.com/u/5825944?s=200&v=4)](https://pursuit.org)

# CSS Display, Position, and Z-Index

## Getting Started 
* Fork this repo
* Clone the forked repository
* `cd` to the directory where you cloned it
* `npm install` to install dependencies
* `npm test` to open the cypress testing window

> *Note*: Remember to `git add`, `git commit` and `git push` regularly

## Submission Guidelines
  * When finished, commit and push your work.
  * Make a pull request on github.`
  * Submit the link to your pull request on Canvas. 


- Make a CSS file and import it into your HTML. Feel free to adjust your **HTML or CSS** as needed.
- Make the `nav` stuck to the top by using the `fixed` position value
- Observe and utilize the classes given to the HTML elements that constitute a 'project card'. Those are `project_card`, `project_description`, `project_image`.  Make the following changes to the project cards:

  * Make all the project images the same width and height
  * Give each project a solid black border of 2px
  * Give the project description a [semi-transparent](https://www.w3schools.com/cssref/func_rgba.asp) background with a color hex of #0c1427;
  * Change the text color to white.
  * Utilizing `position: absolute;` for `.project_description`, lay it over you project image. You will also need to give the parent element a `position` otherwise the `position: absolute;` given to the child will be relative to the `body`. Given that you have a semi-transparent background color this will give a nice effect.
  * Once you have all the above you may have a bug. If you scroll down over your projects you may find that your navbar may be going under the project cards. The navbar should always be on top of everything. Fix this using the `z-index`; 

- Using position, visually arrange the Skills section lists into steps. Each one in increments of 10% from the left side; A suggestion maybe to wrap your list and corresponding header in a `div` to make this easier.
- Make the 'Back to top' button appear always visible on the bottom right corner of the window no matter where the user has scrolled to.
- Let's shed some light on the situation. Place this [image](http://www.sunnysidedrama.com/index/Welcome_files/Playtime_Sun-4.png) in the upper-right hand corner of the screen. Give it `position: absolute` so it stays there, and make sure it has a `z-index` so that nothing ever covers it.

### Demo

![styled pages demonstration](/assets/updatedDemo.gif)