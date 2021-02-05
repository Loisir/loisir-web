import React from 'react';
import { canUseDOM } from '../utils';

/**
 * useIsomorphicsLayoutEffect safely calls `useLayoutEffect`
 * on the browser else call `useEffect` for SSR reasons.
 */
export const useIsomorphicLayoutEffect = canUseDOM()
  ? React.useLayoutEffect
  : React.useEffect;