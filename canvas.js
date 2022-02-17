const canvas = document.getElementById("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")

// червоний прямокутник
ctx.fillStyle = "tomato"
ctx.fillRect(50, 50, 300, 200) // x, y, width, height

// зелений прямокутник, який накладається на черковний
ctx.fillStyle = "green"
ctx.fillRect(150, 150, 300, 200)

// не мусово створювати нову константу. синій прямокутник без заливки
const ctx2 = canvas.getContext("2d")
ctx2.strokeStyle = "blue"
ctx2.lineWidth = 5
ctx2.strokeRect(window.innerHeight - 200, 100, 300, 200)

// синє коло (круг без заливки)
ctx.beginPath()
ctx.arc(100, 100, 50, 0, Math.PI * 2)
ctx.closePath()
ctx.stroke()

// gradient
const gradient = ctx.createLinearGradient(0, 100, 100, 100)
gradient.addColorStop(0, "red")
gradient.addColorStop(1, "white")
ctx2.fillStyle = gradient
ctx2.fillRect(0, 100, 100, 100)

// text content
ctx.fillStyle = "black"
ctx.font =
	"20px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
ctx.fillText("lorem ipsum. На паншині пшеницю жала", 10, 450)

// insert image
const img = new Image()
img.src = "https://vgolos.ua/tpl/images/logo-footer.webp"
ctx.drawImage(img, 10, 500)

// line
ctx.beginPath()
ctx.moveTo(0, 600)
ctx.lineTo(300, 600)
ctx.stroke()
