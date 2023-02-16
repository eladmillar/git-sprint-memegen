'use strict'
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

let gElCanvas
let gCtx
let gCurrImg
let gStartPos

function onMemeInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    document.querySelector('.canvas-container').hidden = false
    document.querySelector('.meme-inputs').hidden = false
    document.querySelector('[name=line-text]').value = gMeme.lines[0].txt

    resizeCanvas()

    setLineX()

    renderMeme()

    addListeners()
}

function renderMeme() {
    const { selectedImgId, selectedLineIdx, lines } = getMeme()
    const selectedLine = lines[selectedLineIdx]
    document.querySelector('[name=line-text]').value = selectedLine.txt
    drawImg(selectedImgId)

    if (!lines.length) return
    // drawText(currLine.txt, currLine.size, currLine.align, currLine.font, currLine.color, currLine.outlineColor, gElCanvas.width / 2, currLine.y)
    lines.forEach(line => {
        setTimeout(drawText, 40, line.txt, line.size,
            line.align, line.font, line.color,
            line.outlineColor, line.x, line.y)
    });
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

function drawText(text, size, alignment, font, color, outlineColor, x, y) {
    if (alignment === 'left') x = 30
    if (alignment === 'right') x = gElCanvas.width - 30
    gCtx.lineWidth = 2
    gCtx.strokeStyle = `${outlineColor}`
    gCtx.fillStyle = `${color}`
    gCtx.font = `${size}px ${font}`
    gCtx.textAlign = `${alignment}`
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
    setTextBoundries(gCtx.measureText(text), y, x)
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
    // Listen for resize ev
    window.addEventListener('resize', () => {
        onMemeInit()
    })
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    const pos = getEvPos(ev)
    if (!isClickOnLine(pos)) return
    renderMeme()

    setLineDrag(true)
    gStartPos = pos
}

function onMove(ev) {
    const isDrag = getLine()
    const lineIdx = getLineIdx()
    if (!isDrag) return

    const pos = getEvPos(ev)
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    moveLine(dx, dy, lineIdx)
    gStartPos = pos
    renderMeme()
}

function onUp() {
    setLineDrag(false)
    setTimeout(renderMeme, 50)
}

function getEvPos(ev) {
    // Gets the offset pos , the default pos
    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }
    // console.log('pos', pos)
    // Check if its a touch ev
    if (TOUCH_EVS.includes(ev.type)) {
        //soo we will not trigger the mouse ev
        ev.preventDefault()
        //Gets the first touch point
        ev = ev.changedTouches[0]
        //Calc the right pos according to the touch screen
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}

function onChangeLine() {
    changeLine()
    renderMeme()
}

function onRaiseLine() {
    raiseLine()
    renderMeme()
}

function onLowerLine() {
    lowerLine()
    renderMeme()
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onDeleteLine() {
    deleteLine()
    renderMeme()
}

function onUpFontSize() {
    upFontSize()
    renderMeme()
}

function onDownFontSize() {
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

function onChangeLetterColor(color) {
    changeLetterColor(color)
    renderMeme()
}

function onChangeOutlineColor(color) {
    changeOutlineColor(color)
    renderMeme()
}

function downloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    elLink.href = imgContent
}