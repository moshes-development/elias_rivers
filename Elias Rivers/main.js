const menu = document.getElementById('menu')
const close = document.getElementById('close')
const list = document.getElementById('list')
const body = document.getElementById('body')
const para = document.getElementById('para')
const learnBtn = document.getElementById('learnMoreBtn')
const moreBtn = document.getElementById('moreBtn')
const contactBtn = document.getElementById('contactBtn')
const submit = document.getElementById('submit')

// document.getElementById('body') .onload = () => {
//     document.getElementById('showCaseContext') .style.cssText = `
//         padding-top: 0px;
//     `
// }

// document.getElementById('body') .onscroll = () => {
//     if (scrollY >= 240){
//         para.style.cssText = `
//             opacity: 1.0;
//             padding-top: 0px;
//         `
//     }
// }

menu .onclick = () => {
    console.log('click')
    document.querySelector('.menu-list') .style.cssText = `
        display: block;
        width: 45%;
    `

    body .style.cssText = `
        overflow-y: hidden;
    `
}

close .onclick = () => {
    console.log('close')
    document.querySelector('.menu-list') .style.cssText = `
        display: none;
        width: 0;
    `

    body .style.cssText = `
        overflow-y: ;
    `
}

list .onclick = () => {
    console.log('close')
    document.querySelector('.menu-list') .style.cssText = `
        display: none;
        width: 0;
    `

    body .style.cssText = `
        overflow-y: ;
    `
}

learnBtn .onmouseover = () => {
    learnBtn .style.cssText = `
        background-color: black;
        color: red;
    `
}


learnBtn .onmouseleave = () => {
    learnBtn .style.cssText = `
    background-color: white;
    color: black;
    `
}

moreBtn .onmouseover = () => {
    moreBtn .style.cssText = `
        background-color: white;
        color: red;
        border: solid 1px black
    `
}


moreBtn .onmouseleave = () => {
    moreBtn.style.cssText = `
    background-color: black;
    color: white;
    `
}



contactBtn .onmouseover = () => {
    contactBtn .style.cssText = `
        background-color: white;
        color: red;
        border: solid 1px black
    `
}


contactBtn .onmouseleave = () => {
    contactBtn.style.cssText = `
    background-color: black;
    color: white;
    `
}

submit .onmouseover = () => {
    submit .style.cssText = `
        background-color: white;
        color: red;
        border: solid 1px black
    `
}


submit .onmouseleave = () => {
    submit.style.cssText = `
    background-color: black;
    color: white;
    `
}


