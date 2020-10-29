
// const drawingApp = {
//     name: 'Drawing app',
//     description: 'Canvas app for basic shapes drawing',
//     version: '1.0.0',
//     license: undefined,
//     author: 'Germán Álvarez',
//     canvasTag: undefined,
//     ctx: undefined,
//     canvasSize: {
//         w: undefined,
//         h: undefined
//     },

//     init(id) {
//         this.canvasTag = document.getElementById(id)
//         this.ctx = this.canvasTag.getContext('2d')
//         this.setDimensions()

//         console.log(this.ctx)       // Puedes ver el contexto por consola
//     },

//     setDimensions() {
//         this.canvasSize.w = window.innerWidth
//         this.canvasSize.h = window.innerHeight
//         this.canvasTag.setAttribute('width', this.canvasSize.w)
//         this.canvasTag.setAttribute('height', this.canvasSize.h)
//     },

//     drawRectangle() {
//         this.ctx.fillStyle = 'red'
//         this.ctx.fillRect(this.canvasSize.w / 2 - 100, this.canvasSize.h / 2 - 100, 200, 200)
//         this.ctx.fillStyle = 'green'
//         this.ctx.fillRect(this.canvasSize.w / 2 - 50, this.canvasSize.h / 2 - 50, 100, 100)
//         this.ctx.fillStyle = 'black'
//         this.ctx.fillRect(100, this.canvasSize.h / 2 - 10, this.canvasSize.w - 200, 20)
//     },

//     drawLinearSquare() {
//         this.ctx.lineWidth = 10
//         this.ctx.strokeStyle = 'red'
//         this.ctx.strokeRect(100, 100, 100, 100)
//         this.ctx.lineWidth = 5
//         this.ctx.strokeStyle = 'green'
//         this.ctx.strokeRect(this.canvasSize.w - 200, 100, 100, 100)
//     },

//     drawContinuousLines() {
//         this.ctx.lineWidth = 5
//         this.ctx.beginPath()
//         this.ctx.moveTo(100, 100)       // Comenzar en...
//         this.ctx.lineTo(200, 100)       // Trazar hasta...
//         this.ctx.lineTo(500, 900)
//         this.ctx.lineTo(900, 200)
//         this.ctx.closePath()
//         this.ctx.stroke()

//         this.ctx.lineWidth = 20
//         this.ctx.beginPath()
//         this.ctx.moveTo(100, this.canvasSize.h / 2 - 10)
//         this.ctx.lineTo(this.canvasSize.w - 200, this.canvasSize.h / 2 - 10)
//         this.ctx.stroke()
//     },

//     drawDashedLines() {
//         this.ctx.lineWidth = 20
//         this.ctx.beginPath()
//         this.ctx.setLineDash([40, 10])      // Dash generator
//         this.ctx.moveTo(100, this.canvasSize.h / 2 - 10)
//         this.ctx.lineTo(this.canvasSize.w - 200, this.canvasSize.h / 2 - 10)
//         this.ctx.stroke()
//     },

//     drawArc() {
//         this.ctx.fillStyle = 'red'
//         this.ctx.lineWidth = 20
//         this.ctx.strokeStyle = 'green'
//         this.ctx.arc(300, 300, 200, 0, Math.PI * 2)
//         this.ctx.fill()
//         this.ctx.stroke()
//     },

//     writeText(text) {
//         this.ctx.font = '50px sans-serif'
//         this.ctx.fillText(text, 100, 100)
//     },


//     drawImage(imgName) {
//         let imageInstance = new Image()
//         imageInstance.src = `img/${imgName}`
//         imageInstance.onload = () => this.ctx.drawImage(imageInstance, 100, 100, 200, 200)
//     }
// }




// const animateApp = {
//     name: 'Animate app',
//     description: 'Canvas app for basic shapes animating',
//     version: '1.0.0',
//     license: undefined,
//     author: 'Germán Álvarez',
//     canvasTag: undefined,
//     ctx: undefined,
//     camels: [],
//     frames: 0,
//     canvasSize: {
//         w: undefined,
//         h: undefined
//     },
//     init(id) {
//         this.canvasTag = document.getElementById(id)
//         this.ctx = this.canvasTag.getContext('2d')
//         this.setDimensions()
//         this.createCamels()
//         this.drawAll()

//         console.log(this.ctx)       // Puedes ver el contexto por consola
//     },

//     setDimensions() {
//         this.canvasSize = {
//             w: window.innerWidth,
//             h: window.innerHeight
//         }
//         this.canvasTag.setAttribute('width', this.canvasSize.w)
//         this.canvasTag.setAttribute('height', this.canvasSize.h)
//     },

//     createCamels() {
//         const camel1 = new Camel(this.ctx, this.canvasSize, 0, 0, 200, 200, 4, 'dromedary.png')
//         const camel2 = new Camel(this.ctx, this.canvasSize, 0, 300, 160, 160, 7, 'football-ball.png')
//         const camel3 = new Camel(this.ctx, this.canvasSize, 0, 500, 300, 300, 3, 'dromedary.png')

//         this.camels.push(camel1, camel2, camel3)
//     },

//     drawAll() {
//         setInterval(() => {
//             this.frames++
//             this.frames % 50 === 0 ? console.log('NUEVO CAMELLO/OBSTÁCULO/WHATEVER') : null
//             this.clearScreen()
//             this.camels.forEach(elm => {
//                 elm.draw()
//                 // console.log('El camello está en la posición', elm.camelPos.x, ' - ', elm.camelPos.y)
//             })
//         }, 70)
//     },

//     clearScreen() {
//         this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
//     }
// }



// class Camel {
//     constructor(ctx, canvasSize, posX, posY, camelWidth, camelHeight, speed, image) {
//         this.canvasSize = {
//             w: canvasSize.w,
//             h: canvasSize.h
//         }
//         this.camelPos = {
//             x: posX,
//             y: posY
//         }
//         this.camelSize = {
//             w: camelWidth,
//             h: camelHeight
//         }
//         this.speed = speed
//         this.imageName = image
//         this.ctx = ctx
//         this.imageInstance = undefined

//         this.init()
//     }

//     init() {
//         this.imageInstance = new Image()
//         this.imageInstance.src = `img/${this.imageName}`
//     }

//     draw() {
//         this.moveCamel()
//         this.ctx.drawImage(this.imageInstance, this.camelPos.x, this.camelPos.y, this.camelSize.w, this.camelSize.h)
//     }

//     moveCamel() {
//         // if (this.camelPos.x >= this.canvasSize.w - this.camelSize.w) {
//         //     this.speed *= -1
//         // }

//         // if (this.camelPos.x < 0) {
//         //     this.speed *= -1
//         // }

//         if (this.camelPos.x >= this.canvasSize.w - this.camelSize.w || this.camelPos.x < 0) {
//             this.changeDirection()
//         }

//         this.camelPos.x += this.speed
//     }

//     changeDirection() {
//         this.speed *= -1
//     }
// }




const controlledApp = {
    name: 'Controls app',
    description: 'Canvas app for basic shapes controlling',
    version: '1.0.0',
    license: undefined,
    author: 'Germán Álvarez',
    canvasTag: undefined,
    ctx: undefined,
    frames: 0,
    ball: undefined,
    keys: {
        left: 37,
        right: 39
    },
    canvasSize: {
        w: undefined,
        h: undefined
    },
    init(id) {
        console.log(window)
        this.canvasTag = document.getElementById(id)
        this.ctx = this.canvasTag.getContext('2d')
        this.setDimensions()
        this.createBall()
        this.drawAll()
        this.setEventListeners()

        console.log(this.ctx)       // Puedes ver el contexto por consola
    },

    setDimensions() {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    },

    createBall() {
        this.ball = new Ball(this.ctx, 200, 200, 100, 100, 'football-ball.png')
    },

    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === this.keys.left ? this.ball.move('left') : null
            e.keyCode === this.keys.right ? this.ball.move('right') : null
        }
    },

    drawAll() {
        setInterval(() => {
            this.frames++
            this.frames % 50 === 0 ? this.generateObstacle() : null
            this.clearScreen()
            this.ball.draw()
        }, 70)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    generateObstacle() {
        console.log('NUEVO OBSTÁCULO! CUIDAO QUE VA!')
    }
}


class Ball {
    constructor(ctx, ballPosX, ballPosY, ballWidth, ballHeight, ballImage) {
        this.ctx = ctx
        this.ballPos = {
            x: ballPosX,
            y: ballPosY
        }
        this.ballSize = {
            w: ballWidth,
            h: ballHeight
        }
        this.imageName = ballImage
        this.ballInstance = undefined
        this.init()
    }

    init() {
        this.ballInstance = new Image()
        this.ballInstance.src = `img/${this.imageName}`
    }

    draw() {
        this.ctx.drawImage(this.ballInstance, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    move(dir) {
        dir === 'left' ? this.ballPos.x -= 20 : null
        dir === 'right' ? this.ballPos.x += 20 : null
    }
}