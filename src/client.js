
import net from 'net'
import readline from 'readline'

const socket = net.Socket()
socket.connect(8000, 'localhost')

let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
let a = 0;

let makequestion = () => rl.question(
	`Mensaje ${a}\n`,
	value => {
		socket.write(value)
		a++
		rl.close()
		rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		})
		makequestion()
	}
)

makequestion()

socket.on('data', data => {
	console.log(data.toString())
})
