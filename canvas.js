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

// анімація
function animate() {
	ctx.beginPath()
	ctx.arc(100, 100, 50, 0, Math.PI * 2)
	ctx.closePath()
	ctx.stroke()
	window.requestAnimationFrame(animate)
}

animate()
