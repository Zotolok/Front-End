# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
![image](https://github.com/Zotolok/Front-End/assets/66386227/c0db2109-e66d-4e77-a261-115400ee59ce)

#### Mobile view
![image](https://github.com/Zotolok/Front-End/assets/66386227/c45aa3dd-dd33-42ff-867e-718b829b1bc3)
![image](https://github.com/Zotolok/Front-End/assets/66386227/32e60950-25b7-437c-b940-f4151d6a36a2)
![image](https://github.com/Zotolok/Front-End/assets/66386227/edefaa12-50b6-4a0d-8637-8d546c2ce889)

#### iPad view
![image](https://github.com/Zotolok/Front-End/assets/66386227/f9e36aee-aadc-4943-9b14-858a84ef0ac5)
![image](https://github.com/Zotolok/Front-End/assets/66386227/6399a4d5-644f-4ff2-9443-6f4f419292cb)


### Links

- Solution URL: [GitHub - CSS](https://github.com/Zotolok/Front-End/blob/79ded6c7de0d819ec3fb243d4e245234bdb38b09/QR_Code/CSS/styles.css)
- Live Site URL: [Web Site](https://qrcode-amber-mu.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Google Fonts (Outfit: 100, 300, 400, 500, 600)
- Mobile-first workflow


### What I learned

This is one of my first projects regarding web development. My major learnings here were how to center elements in a page, how to use media queries to manipulate elements depending on the windows width or heigth, and the implementation of new fonts and borders in CSS.

To see how you can add code snippets, see below:
#### Center elements
```css
.example{
  transform: translate(50%, -50%);
  position: absolute;
  top: 50%;
  right: 50%;
}
```
#### Use media queries to manipulate the view in a portrait view in a mobile device
```css
@media screen and (max-height:400px) {
.box{
  margin-top: 10%;
}
```


### Continued development

I'd like to continue working on the media query area, since there are still some errors I've noticed while working on the margins of the white rectangule. I want it to be separated from the bottom part and the upper equally.


### Useful resources

- [Google Fonts](https://fonts.google.com/) - This helped me to change the default fonts.
- [Responsinator](http://www.responsinator.com/) - This helped me to see how the page looked like in different devices.
- [Rapidtables](https://www.rapidtables.org/web/tools/window-size.html) -  This helped to know the size of my browser screen while programming.


## Author

- LinkedIn - [Celic Gabriel Hernández Archundia](www.linkedin.com/in/celic-gabriel-hernández-archundia-63935a1b5)
- Frontend Mentor - [@Zotolok](https://www.frontendmentor.io/profile/Zotolok)
