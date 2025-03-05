import React, { useMemo } from "react";
import handleViewport from "react-in-viewport";

const sideMapNotVisible = {
  left: "translateX(-20px)",
  right: "translateX(20px)",
  bottom: "translateY(-20px)",
  top: "translateY(20px)",
  topmax: "translateY(100px)",
  opacity: "translateY(0)",
};

const sideMap = {
  left: "translateX(0)",
  right: "translateX(0)",
  bottom: "translateY(0)",
  top: "translateY(0)",
  topmax: "translateY(0)",
  opacity: "translateY(0)",
};

// Cache transition strings to avoid string concatenation on every render
const getTransitionStyle = (speed, delay) => 
  `transform ${speed}s ${delay}s, opacity ${speed}s ${delay}s, background-size ${speed}s ${delay}s, background-color 300ms ${delay}s`;

const VisibilityManagerComponent = React.memo((props) => {
  const {
    itemScope,
    itemType,
    itemProp,
    onInit = true,
    id,
    as: Tag = "section",
    inViewport,
    style,
    enterCount,
    leaveCount,
    forwardedRef,
    children,
    className,
    side = "top",
    speed = 2,
    delay = 0.3,
    onClick,
    ...restProps
  } = props;

  if (itemScope !== undefined) {
    meta.itemScope = itemScope;
  }
  if (itemType !== undefined) {
    meta.itemType = itemType;
  }
  if (itemProp !== undefined) {
    meta.itemProp = itemProp;
  }

  // Memoize the animation styles to prevent recalculation unless dependencies change
  const animationStyles = useMemo(() => ({
    ...style,
    willChange: "transform, opacity",
    transition: getTransitionStyle(speed, delay),
    opacity: (inViewport || (onInit && enterCount > 0)) ? 1 : 0,
    transform: (inViewport || (onInit && enterCount > 0)) ? sideMap[side] : sideMapNotVisible[side],
  }), [style, speed, delay, inViewport, onInit, enterCount, side]);

  return (
    <Tag
      {...restProps}
      id={id}
      ref={forwardedRef}
      className={className}
      onClick={onClick}
      style={animationStyles}
    >
      {children}
    </Tag>
  );
});

VisibilityManagerComponent.displayName = 'VisibilityManager';

// Use a more performant intersection observer configuration
const viewportConfig = {
  threshold: [0], // Only trigger once when element enters viewport
  rootMargin: '50px 0px', // Add some margin to trigger slightly before element is in view
};

export const VisibilityManager = handleViewport(VisibilityManagerComponent, viewportConfig);
