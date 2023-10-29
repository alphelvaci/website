const black = "rgb(0, 0, 0)"
const white = "rgb(255, 255, 255)"
const gray = "rgb(50, 50, 50)"
const blue = "rgb(10, 132, 255)"

function setTextColor(color) {
    const cssRules = document.styleSheets[0].cssRules
    for (var i=0; i<cssRules.length; i++) {
        if (cssRules[i].selectorText == "h1, h2, h3, h4, h5, h6, p, a") {
            cssRules[i].style.color = color
        }
    }
}

function swapBackgroundColorsWithBody(element) {
    const temp = getComputedStyle(document.body).backgroundColor
    document.body.style.backgroundColor = getComputedStyle(element).backgroundColor
    element.style.backgroundColor = temp

    const bodyBackgroundColor = getComputedStyle(document.body).backgroundColor
    if (bodyBackgroundColor == white) {
        setTextColor(black)
    } else if ([black, gray, blue].includes(bodyBackgroundColor)) {
        setTextColor(white)
    }
}
