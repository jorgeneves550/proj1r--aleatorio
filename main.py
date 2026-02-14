def on_received_number(receivedNumber):
    servos.P1.set_angle(Math.map(receivedNumber, 1, 10, 0, 180))
radio.on_received_number(on_received_number)

radio.set_group(1)
servos.P0.set_range(0, 180)