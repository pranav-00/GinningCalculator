let slide = document.getElementById('body')

// set up our state
let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID,
    currentIndex = 0

// add our event listeners
// slides.forEach((slide, index) => {
// touch events
slide.addEventListener('touchstart', touchStart())
slide.addEventListener('touchend', touchEnd)
slide.addEventListener('touchmove', touchMove)
// mouse events
slide.addEventListener('mousedown', touchStart())
slide.addEventListener('mouseup', touchEnd)
slide.addEventListener('mousemove', touchMove)
slide.addEventListener('mouseleave', touchEnd)
// })

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

// use a HOF so we have index in a closure
function touchStart() {
    return function (event) {
        startPos = getPositionX(event)
        isDragging = true
    }
}

function touchMove(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event)
        currentTranslate = prevTranslate + currentPosition - startPos
    }
}

function touchEnd() {
    isDragging = false
    const movedBy = currentTranslate - prevTranslate

    // if moved enough negative then snap to next slide if there is one
    if (movedBy < -100) data2()

    // if moved enough positive then snap to previous slide if there is one
    if (movedBy > 100) data1()

}

