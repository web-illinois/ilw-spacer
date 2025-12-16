import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-spacer";

const content = html`
    <ilw-spacer>
      <p>Should not display</p>
    </ilw-spacer>`;

test("renders slotted content", async () => {
    const screen = render(content);
    const element = screen.getByText("Should not display");
    await expect.element(element).not.toBeInTheDocument();
});