import { memo, useMemo } from "react";
import handleViewport from "react-in-viewport";

const SIDE_MAP_NOT_VISIBLE = {
  left: "translateX(-20px)",
  right: "translateX(20px)",
  bottom: "translateY(-20px)",
  top: "translateY(20px)",
  topmax: "translateY(100px)",
  opacity: "translateY(0)",
};

const SIDE_MAP = {
  left: "translateX(0)",
  right: "translateX(0)",
  bottom: "translateY(0)",
  top: "translateY(0)",
  topmax: "translateY(0)",
  opacity: "translateY(0)",
};

const getTransitionStyle = (speed, delay) =>
  `transform ${speed}s ${delay}s, opacity ${speed}s ${delay}s, background-size ${speed}s ${delay}s, background-color 300ms ${delay}s`;

const VisibilityManagerComponent = memo((props) => {
  const {
    as: Tag = "section",
    children,
    className,
    delay = 0.1,
    enterCount,
    forwardedRef,
    id,
    inViewport,
    itemProp,
    itemScope,
    itemType,
    leaveCount,
    onInit = true,
    onClick,
    side = "opacity",
    speed = 3,
    style,
    ...restProps
  } = props;

  const isVisible = inViewport || (onInit && enterCount > 0);

  const animationStyles = useMemo(
    () => ({
      ...style,
      willChange: "transform, opacity",
      transition: getTransitionStyle(speed, delay),
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? SIDE_MAP[side] : SIDE_MAP_NOT_VISIBLE[side],
    }),
    [delay, inViewport, isVisible, onInit, side, speed, style],
  );

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

VisibilityManagerComponent.displayName = "VisibilityManager";

const viewportConfig = {
  threshold: [0],
  rootMargin: "50px 0px",
};

export const VisibilityManager = handleViewport(
  VisibilityManagerComponent,
  viewportConfig,
);