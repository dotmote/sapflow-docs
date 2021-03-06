---
id: d32-pro-setup-checklist
title: D32 Pro Setup Checklist
sidebar_label: D32 Pro Setup Checklist
---

# Setup
1. Follow Arduino-ESP32 installation instructions here: https://github.com/espressif/arduino-esp32/blob/master/docs/arduino-ide/boards_manager.md
2. Install dependencies
3. Edit PubSubClient.h to increase its max packet size from 128 bytes to 512 bytes
4. Compile and upload to microcontroller

# Dependencies install on Arduino
- [ArduinoJSON](https://arduinojson.org/) by Benoit Blanchon, use Manage Libraries
- [LOLIN E-Paper Display Library](https://github.com/wemos/LOLIN_EPD_Library) (Optional - comment out applicable lines in firmware  if unused)
- [PubSubClient](https://pubsubclient.knolleary.net/) by Nick O'Leary - NOTE: make sure to edit `PubSubClient.h` to increase its max packet size from 128 bytes to 512 bytes
- [RTC by Makuna](https://github.com/Makuna/Rtc/wiki) by Michael C. Miller, use Manage Libraries
- [WEMOS SHT3x Arduino Library](https://github.com/wemos/WEMOS_SHT3x_Arduino_Library) (Optional - comment out applicable lines in firmware if unused)
- [HDC2080 Arduino Library](https://github.com/lime-labs/HDC2080-Arduino) by Lime Labs, use Manage Libraries
- [Adafruit GFX](https://github.com/adafruit/Adafruit-GFX-Library) use Manage Libraries in the Arduino IDE to install

# Note re: RTC Library
Currently, the example code sets the time in the RTC module to match the local time of whatever machine you compiled the code in. As a result, `rtcUnixTimestamp` erroneously treats your local time as UTC. In order to adjust for this, you'll need to add an offset when analyzing the data later on. For example, if you're in Pacific Time, you'll need to add 8 hours to the `rtcUnixTimestamp` value to adjust for your timeszone.