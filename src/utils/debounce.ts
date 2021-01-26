export function debounce(
  func: (...args: any[]) => void,
  wait: number,
  immediate: boolean
) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (
    this: ThisParameterType<(...args: any[]) => void>,
    ...args: any[]
  ) {
    const context = this;
    
    var invokeFunction = function () {
      timeoutId = undefined;
      if (!immediate) {
        func.apply(
          context, args
        );
      }
    };

    const callNow = immediate && !timeoutId;
    
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(invokeFunction, wait);

    if (callNow) {
      func.apply(
        context, args
      );
    }
  };
}