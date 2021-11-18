---
layout: docs
title: Quantity selector
description: Form element used to select a number.
group: forms
toc: true
---

## Examples

Quantity selector is a form element used to select a number. For proper styling, use one of the two **required** contextual classes (e.g., `.quantity-selector-large`).

You can specify a default value in the `value` attribute of your input.

Value will vary between the values define in the `min` and `max` attributes (negatives values are allowed).

The custom `data-bs-round` attribute will help you to define the number of digits to appear after the decimal point.
{{< example >}}
<div class="quantity-selector quantity-selector-large">
    <label class="input-group-text" for="inputQuantitySelector1">Quantity selector large: </label>
    <div class="input-group">
        <input type="number" id="inputQuantitySelector1" class="form-control"
            data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector" readonly>
        <button type="button" class="btn btn-icon btn-secondary" data-bs-step="down">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#remove" />
            </svg>
            <span class="visually-hidden">Step up</span>
        </button>
        <button type="button" class="btn btn-icon btn-secondary" data-bs-step="up">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#add" />
            </svg>
            <span class="visually-hidden">Step down</span>
        </button>
    </div>
</div>
<div class="quantity-selector quantity-selector-small">
    <label class="input-group-text" for="inputQuantitySelector2">Quantity selector small: </label>
    <div class="input-group">
        <input type="number" id="inputQuantitySelector2" class="form-control"
            data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector" readonly>
        <button type="button" class="btn btn-icon btn-secondary btn-sm" data-bs-step="down">
            <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#remove" />
            </svg>
            <span class="visually-hidden">Step up</span>
        </button>
        <button type="button" class="btn btn-icon btn-secondary btn-sm" data-bs-step="up">
            <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#add" />
            </svg>
            <span class="visually-hidden">Step down</span>
        </button>
    </div>
</div>
{{< /example >}}
