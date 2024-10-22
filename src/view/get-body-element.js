// @flow
import { invariant } from '../invariant';
import { getShadowRoot } from './get-shadow-root';

export default (): HTMLBodyElement | ShadowRoot => {
  const body: ?HTMLBodyElement = document.body;
  invariant(body, 'Cannot find document.body');
  return getShadowRoot() || body;
};
