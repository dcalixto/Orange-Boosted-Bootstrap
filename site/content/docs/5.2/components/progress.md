---
layout: docs
title: Progress
description: Documentation and examples for using Boosted custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.
group: components
aliases:
  - "/docs/components/progress/"
toc: true
---

## How it works

Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don't use [the HTML5 `<progress>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), ensuring you can stack progress bars, animate them, and place text labels over them.

- We use the `.progress` as a wrapper to indicate the max value of the progress bar.
- We use the inner `.progress-bar` to indicate the progress so far.
- The `.progress-bar` requires an inline style, utility class, or custom CSS to set their width.
- The `.progress-bar` also requires some `role` and `aria` attributes to make it accessible, including an accessible name (using `aria-label`, `aria-labelledby`, or similar).

Put that all together, and you have the following examples.

{{< example >}}
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

Boosted provides a handful of [utilities for setting width]({{< docsref "/utilities/sizing" >}}). Depending on your needs, these may help with quickly configuring progress.

{{< example >}}
<div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

## Labels

Add labels to your progress bars by placing text within the `.progress-bar`.

{{< example >}}
<div class="progress">
  <div class="progress-bar" role="progressbar"  aria-label="Example with label" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
{{< /example >}}

## Height

We only set a `height` value on the `.progress`, so if you change that value the inner `.progress-bar` will automatically resize accordingly.

{{< ods-incompatibility-alert >}}
The **1px height** variant should not be used because it does not respect the Orange Design System specifications.

Please refer to the [Progress indicators](https://system.design.orange.com/0c1af118d/p/45093c-progress-indicators/b/2875f1) guidelines on the Orange Design System website.
{{< /ods-incompatibility-alert >}}

{{< example >}}
<div class="progress" style="height: 1px;">
  <div class="progress-bar" role="progressbar" aria-label="Example 1px high" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress" style="height: 20px;">
  <div class="progress-bar" role="progressbar" aria-label="Example 20px high" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

<!-- Boosted mod -->
### Sizes

Boosted also provides size variants for progress bar: simply add `.progress-xs` or `.progress-sm`.

{{< example >}}
<div class="progress progress-xs">
  <div class="progress-bar" role="progressbar" aria-label="Extra small example" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-sm">
  <div class="progress-bar" role="progressbar" aria-label="Small example" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}
<!-- End mod -->

## Backgrounds

Use background utility classes to change the appearance of individual progress bars.

{{< ods-incompatibility-alert >}}
These backgrounds color variants should not be used because they do not respect the Orange Design System specifications. The only background color to use is the primary color.

Please refer to the [Progress indicators](https://system.design.orange.com/0c1af118d/p/45093c-progress-indicators/b/2875f1) guidelines on the Orange Design System website.
{{< /ods-incompatibility-alert >}}

{{< example >}}
<div class="progress">
  <div class="progress-bar bg-success" role="progressbar" aria-label="Success example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-info" role="progressbar" aria-label="Info example" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" aria-label="Danger example" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Multiple bars

Include multiple progress bars in a progress component if you need.

{{< example >}}
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Segment one" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-success" role="progressbar" aria-label="Segment two" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-info" role="progressbar" aria-label="Segment three" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

## Striped

Add `.progress-bar-striped` to any `.progress-bar` to apply a stripe via CSS gradient over the progress bar's background color.

{{< ods-incompatibility-alert >}}
These variants should not be used because they do not respect the Orange Design System specifications.

Please refer to the [Progress indicators](https://system.design.orange.com/0c1af118d/p/45093c-progress-indicators/b/2875f1) guidelines on the Orange Design System website.
{{< /ods-incompatibility-alert >}}

{{< example >}}
<div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" aria-label="Default striped example" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" aria-label="Success striped example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" aria-label="Info striped example" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" aria-label="Warning striped example" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" aria-label="Danger striped example" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

## Animated stripes

The striped gradient can also be animated. Add `.progress-bar-animated` to `.progress-bar` to animate the stripes right to left via CSS3 animations.

{{< ods-incompatibility-alert >}}
This variant should not be used because it does not respect the Orange Design System specifications.

Please refer to the [Progress indicators](https://system.design.orange.com/0c1af118d/p/45093c-progress-indicators/b/2875f1) guidelines on the Orange Design System website.
{{< /ods-incompatibility-alert >}}

{{< example >}}
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
{{< /example >}}

## CSS

### Variables

{{< added-in "5.2.0" >}}

As part of Boosted's evolving CSS variables approach, progress bars now use local CSS variables on `.progress` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="progress-css-vars" file="scss/_progress.scss" >}}

Small and extra small progress bar modifier classes are used to update the values of these CSS variables as needed. For example, the `.progress-xs` class does the following:

{{< scss-docs name="progress-border-xs-css-vars" file="scss/_progress.scss" >}}

And the `.progress-sm`:

{{< scss-docs name="progress-border-sm-css-vars" file="scss/_progress.scss" >}}

### Sass variables

{{< scss-docs name="progress-variables" file="scss/_variables.scss" >}}

### Keyframes

Used for creating the CSS animations for `.progress-bar-animated`. Included in `scss/_progress-bar.scss`.

{{< scss-docs name="progress-keyframes" file="scss/_progress.scss" >}}
