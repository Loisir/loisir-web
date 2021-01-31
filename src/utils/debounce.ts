/**
 * The debounce() function forces a function to wait a certain amount of time before running again.
 * The function is built to limit the number of times a function is called
 * 
 * @param func The function which we want to debounce
 * @param wait How many milliseconds must pass after most recent function call, for the original function to be called
 * @param immediate If set to true then function will be called immediately,
 *        but on subsequent calls of the debounced function original function won't be called, unless wait passed after last call
 * @returns void
 */
export function debounce(
  func: (...args: any[]) => void,
  wait: number,
  immediate: boolean
) {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  return function (
    this: ThisParameterType<(...args: any[]) => void>,
    ...args: any[]
  ) {
    const context = this;
    
    var invokeFunction = function () {
      timeout = undefined;
      if (!immediate) {
        func.apply(
          context, args
        );
      }
    };

    const callNow = immediate && timeout === undefined;
    
    if (timeout !== undefined) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(invokeFunction, wait);

    if (callNow) {
      func.apply(
        context, args
      );
    }
  };
}