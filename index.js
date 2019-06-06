function scrollTo({
  elementId,
  xOffset = 0,
  yOffset = 0,
  behavior = "smooth",
  axis = "none",
}) {
  if (elementId) {
    const { body } = document;
    const element = document.getElementById(elementId);
    if (element) {
      const bodyCoordinates = body.getBoundingClientRect();
      const elementCoordinates = element.getBoundingClientRect();
      const elementXPositionRelativeToBody =
        elementCoordinates.left - bodyCoordinates.left;
      const elementYPositionRelativeToBody =
        elementCoordinates.top - bodyCoordinates.top;
      const normalizedAxis = axis.toLowerCase();
      switch (normalizedAxis) {
        case "x":
          window.scrollTo({
            left: elementXPositionRelativeToBody - xOffset,
            behavior,
          });
        case "y":
          window.scrollTo({
            top: elementYPositionRelativeToBody - yOffset,
            behavior,
          });
        case "both":
          window.scrollTo({
            top: elementYPositionRelativeToBody - yOffset,
            left: elementXPositionRelativeToBody - xOffset,
            behavior,
          });
        default:
          () => {};
      }
    } else {
      console.warn(
        `Warning, no element with the following id was found: ${elementId}`
      );
    }
  }
}

export default scrollTo;
