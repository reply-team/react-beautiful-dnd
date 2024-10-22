// @flow
export function getShadowRoot(): ?ShadowRoot {
  const webComponent = document.querySelector('cmp-application');
  return webComponent ? webComponent.shadowRoot : undefined;
}
