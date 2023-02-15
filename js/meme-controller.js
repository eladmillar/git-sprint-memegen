'use strict'
let gElCanvas
let gCtx

function onMemeInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    document.querySelector('.canvas-container').hidden = false
    document.querySelector('.meme-inputs').hidden = false
    document.querySelector('[name=line-text]').value = gMeme.lines[0].txt

    resizeCanvas()

    renderMeme()

    addListeners()
}

function renderMeme() {
    const { selectedImgId, selectedLineIdx, lines } = getMeme()
    const currLine = lines[selectedLineIdx]
    document.querySelector('[name=line-text]').value = currLine.txt
    drawImg(selectedImgId)

    if (!lines.length) return

    setTimeout(drawText, 20, currLine.txt, currLine.size,
        currLine.align, currLine.font, gElCanvas.width / 2, 60)
}

function drawImg(imgNum) {
    const img = new Image()
    img.src = `img/${imgNum}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}

function onFontSelected(font) {
    setFont(font)
    renderMeme()
}

function onSetLineText(value) {
    setLineText(value)
    renderMeme()
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function drawText(text, size, alignment, font, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'brown'
    gCtx.fillStyle = 'black'
    gCtx.font = `${size}px ${font}`
    gCtx.textAlign = `${alignment}`
    // gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}

function addListeners() {
    // addMouseListeners()
    // addTouchListeners()
    //Listen for resize ev
    window.addEventListener('resize', () => {
        onInit()
    })
}

// function addMouseListeners() {
//     gElCanvas.addEventListener('mousedown', onDown)
//     gElCanvas.addEventListener('mousemove', onMove)
//     gElCanvas.addEventListener('mouseup', onUp)
// }

// function addTouchListeners() {
//     gElCanvas.addEventListener('touchstart', onDown)
//     gElCanvas.addEventListener('touchmove', onMove)
//     gElCanvas.addEventListener('touchend', onUp)
// }

function onPrevLine() {
    prevLine()
    renderMeme()
}

function onNextLine() {
    nextLine()
    renderMeme()
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onDeleteLine() {
    const line = deleteLine()
    renderMeme()
}

function onUpFontSize() {
    upFontSize()
    renderMeme()
}

function onDwonFontSize() {
    downFontSize()
    renderMeme()
}

function onAlignLeft() {
    alignLeft()
    renderMeme()
}

function onAlignCenter() {
    alignCenter()
    renderMeme()
}

function onAlignRight() {
    alignRight()
    renderMeme()
}
