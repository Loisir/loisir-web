export const isInViewport = (elem : Element, fullyVisible : boolean) : boolean => {
  const position = elem.getBoundingClientRect();
  const elemTop = position.top;
  const elemBottom = position.bottom;

  return fullyVisible
    ? elemTop >= 0 && elemBottom <= window.innerHeight
    : elemTop < window.innerHeight && elemBottom >= 0;
};