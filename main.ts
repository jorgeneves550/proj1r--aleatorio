radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    servos.P1.setAngle(Math.map(receivedNumber, 1, 10, 0, 180))
})
radio.setGroup(1)
servos.P0.setRange(0, 180)
