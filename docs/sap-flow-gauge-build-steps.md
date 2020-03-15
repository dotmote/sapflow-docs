---
id: sap-flow-gauge-build-steps
title: Sap Flow Gauge Build Steps
sidebar_label: Sap Flow Gauge Build Steps
---
import useBaseUrl from '@docusaurus/useBaseUrl';

After you have your PCBs and [parts](./sap-flow-gauge-parts-list), you'll need to assemble your gauges using the following steps:

1. Apply solder paste on each of the exposed PCB pads.
2. Place each component on the PCB in their corresponding spots (i.e., on top of the solder-paste-topped pads).
3. Bake the PCB with components in a toaster oven (which you'll never use for food, as the fumes are hazardous).
4. Manually re-solder defects.

# Apply Solder Paste
Using either a syringe or stencil, apply solder paste to the exposed pads of your gauges:
<img alt="sap flow gauge apply solder paste" src={useBaseUrl('/img/solder_paste.jpg')} />

# Place Components
Using tweezers, place each component onto its pads:
<img alt="sap flow gauge place components" src={useBaseUrl('/img/oven_rack.jpg')} />

# Bake the PCB with Components
Insert the PCBs with components into a toaster oven (which you'll never use for food because again, these fumes are toxic) set to 450 degrees F (or 230 degrees C):
<img alt="sap flow gauge solder reflow" src={useBaseUrl('/img/oven.jpg')} />

Keep the PCBs in the oven for ~10 minutes:
<img alt="sap flow gauge solder reflow" src={useBaseUrl('/img/oven_2.jpg')} />

# Manually Re-solder Defects
In all likelihood, there will be some defects in the solder reflow process:
<img alt="sap flow gauge defects" src={useBaseUrl('/img/reflow_errors.jpg')} />

Often, you'll see solder bridges (e.g., multiple pins of the HDC2080 incorrectly soldered together) and tombstoning (e.g., resistors and capacitors rotating due to solder only reflowing onto one side of the component):
<img alt="sap flow gauge defects circled" src={useBaseUrl('/img/reflow_errors_circled.jpg')} />

In these cases, you'll need to apply flux and manually re-solder the defects.

# Educational Resources
- Applying solder paste to a PCB: [EEVBlog #558](https://www.youtube.com/watch?v=M_rO6oPVsws)
- Using a toaster oven to perform solder reflow: [EEVBlog #562](https://www.youtube.com/watch?v=JA-vi2iQ5vA)