---
id: software
title: Software
sidebar_label: Software
---

# Microcontroller Firmware
You'll need software running on your microcontroller to read data from the connected sapflow gauge. See [here](https://github.com/dotmote/sapflow/tree/master/software/microcontroller/d32_pro) for the Arduino code we used for the D32 Pro.

# Edge Compute Node
If you're using microcontrollers with WiFi connectivity, it's very convenient to have all of the data streaming into a single place. We like using a Raspberry Pi as an [MQTT](https://mosquitto.org/) broker, collecting data points from all of the networked sensor devices. See [here](https://github.com/dotmote/sapflow/tree/master/software/edge_compute_node/raspberry_pi) for more info.