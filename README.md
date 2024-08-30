# ilw-spacer

Links: **[ilw-spacer in Builder](https://builder3.toolkit.illinois.edu/component/ilw-spacer/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

This is a spacer component to increase vertical margin between two other components. This has one attribute that controls how tall this is in standard CSS height syntax. Defaults to 20px.

### Attributes
* `height`: height of spacer.

## Code Examples

```html
<ilw-spacer height="30px"></ilw-spacer>
```

## Accessibility Notes and Use

This generates a single `div` with no margins, padding-bottom of the height attribute, and a transparent color. 

This uses the `role="presentation"` attribute to ensure that screen readers and other assistive technology ignores it. This should not be in the accessibility tree.

## Upgrade Instructions

This is a new component. 

## External References

* https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units
* https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role
