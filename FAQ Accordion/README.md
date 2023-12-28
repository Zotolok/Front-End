# Frontend Mentor - Interactive rating component solution

This is a solution to the [FAQ Accordion challenge on Frontend Mentor](). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### Screenshot
#### Web page view
![image](https://github.com/Zotolok/Front-End/assets/66386227/752fbb0b-eea0-4326-9b02-b3dbae007918)


#### Mobile view (iPhone)
![image](https://github.com/Zotolok/Front-End/assets/66386227/74b99b2a-b142-413d-8288-a9fa28397d84)
![image](https://github.com/Zotolok/Front-End/assets/66386227/de22aaef-b439-47f8-b020-10ee73879dbf)


#### Mobile view (Android)
![image](https://github.com/Zotolok/Front-End/assets/66386227/741460d2-00e3-4c8e-83ca-774c547697b6)
![image](https://github.com/Zotolok/Front-End/assets/66386227/cc52cf1c-d6be-4e22-8740-0449a427bcd4)


#### iPad view
![image](https://github.com/Zotolok/Front-End/assets/66386227/c8bbf998-3c19-45c2-bcf4-adc733e110e1)
![image](https://github.com/Zotolok/Front-End/assets/66386227/831e6f48-155f-49b9-93f4-5639f09d2d3b)


### Links

- Solution URL: [GitHub - CSS]()
- Live Site URL: [Web Site]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Flexbox
- Hover
- Mobile-first workflow
- Media queries
- Google Fonts (Work Sans: 400, 600, 700)


### What I learned

This is a list of common questions with their answers that are shown when you click on the plus image (simulating a button). This project helped me to practice my CSS, HTML and JS skills; like the use of media queries.
To see how you can add code snippets, see below:
#### How to adapt the width of a class depending on screen size.
```css
@media screen and (max-width:400px){
  .example{
    /*Properties you want to change for this class. For example, the width to adapt to the new screen size*/
    width: 300px;
  }
}
```

In the last code, "max-width" means the maximum size needed to make a change in the media query (in this case, regarding the screen size); the screen will not apply any change written within the media query after exceeding the 400 pixels width.


### Continued development

At the beginning, I wanted to show the answers by using the "display" property in JS. Though, I noticed that, despite I wanted to change the display to "none" or "block" with JS, every class with "display: none" in CSS will stay like that. So, I use another logic using a variable that changes between zero and one depending when the user clicks the buttons to see the answers. This causes that soetimes the user has to double click the button. I'll try to change it in further updates.  


### Useful resources

- [Google Fonts](https://fonts.google.com/) - This helped me to change the default fonts.
- [Responsinator](http://www.responsinator.com/) - This helped me to see how the page looked like in different devices.
- [Vercel](https://vercel.com/home) - This web site helped me to upload my static project to the cloud for free.
- [max-width explanation](https://www.youtube.com/watch?v=8OG0PJkd6-w) - This youtuber explained me the difference between max and min width.


## Author

- LinkedIn - [Celic Gabriel Hernández Archundia](www.linkedin.com/in/celic-gabriel-hernández-archundia-63935a1b5)
- Frontend Mentor - [@Zotolok](https://www.frontendmentor.io/profile/Zotolok)
