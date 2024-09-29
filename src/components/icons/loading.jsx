const LoadingIcon = () => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      style={{color: 'white'}}
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <rect
        width="512"
        height="512"
        x="0"
        y="0"
        rx="30"
        fill="transparent"
        stroke="transparent"
        strokeWidth="0"
        strokeOpacity="100%"
        paintOrder="stroke"
      ></rect>
      <svg
        width="256px"
        height="256px"
        viewBox="0 0 24 24"
        fill="currentColor"
        x="128"
        y="128"
        role="img"
        style={{ display: "inline-block", verticalAlign: "middle" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="currentColor">
          <circle cx="12" cy="12" r="0" fill="currentColor">
            <animate
              attributeName="r"
              calcMode="spline"
              dur="1.2s"
              keySplines=".52,.6,.25,.99"
              repeatCount="indefinite"
              values="0;11"
            />
            <animate
              attributeName="opacity"
              calcMode="spline"
              dur="1.2s"
              keySplines=".52,.6,.25,.99"
              repeatCount="indefinite"
              values="1;0"
            />
          </circle>
        </g>
      </svg>
    </svg>
  );
};

export default LoadingIcon;
