---
id: hardware
title: Hardware
sidebar_label: Hardware
---
import useBaseUrl from '@docusaurus/useBaseUrl';

# Sapflow Gauge
First, you'll need a way to measure and record the temperature at two specific points (equidistant from a central heating element) along the stem of your plant:

<img alt="sap flow gauge board" src={useBaseUrl('/img/sapflow_gauge.png')} />

<img alt="sap flow gauge 3d render" src={useBaseUrl('/img/sapflow_gauge_3d.png')} />

<img alt="assembled sap flow gauge" src={useBaseUrl('/img/sapflow_gauge_assembled.jpg')} />

To build the gauge, you'll need: (1) the PCB; and (2) the components.

## Fabricate the PCB
See here for the [KiCad PCB files](/hardware/sapflow_gauge/kicad/sapflow_gauge). Follow the directions from your favorite PCB fabrication service (e.g., OSHPark, JLCPCB, Seeed Studio, etc.), and order your desired quantity of PCBs.

## Gather the Parts
See here for the [parts list](./sap-flow-gauge-parts-list). Go to your favorite electronic components distributor (e.g., Digikey, Arrow, Mouser, etc.) and order your desired quantity of components.

# Microcontroller
Second, you'll need a microcontroller that has an available GPIO pin (3.3V to 5V) and can communicate via I2C. We've found the ESP32 (specifically, the [LOLIN D32 Pro](https://www.aliexpress.com/item/32883116057.html) dev board) to be great for rapid prototyping with its relatively large onboard RAM, built-in WiFi, and low cost. For field experiments, it might make more sense to use a board with more low-power optimizations.

## Microcontroller Shield
To reduce wiring, you might want to use a shield to interface your microcontroller with the sapflow gauge connector. See [here](https://github.com/dotmote/sapflow/tree/master/hardware/microcontroller_shield/d32_pro) for our shield design for the D32 Pro.