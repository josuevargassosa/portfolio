export function WaveSVG() {
  return (
    <div className="w-full h-[8vh] min-h-[60px] max-h-[80px] -mb-[7px]">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g>
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            className="fill-background/70 animate-wave"
            style={{animationDelay: '-2s', animationDuration: '7s'}}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            className="fill-background/50 animate-wave"
            style={{animationDelay: '-3s', animationDuration: '10s'}}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            className="fill-background/30 animate-wave"
            style={{animationDelay: '-4s', animationDuration: '13s'}}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="7"
            className="fill-background animate-wave"
            style={{animationDelay: '-5s', animationDuration: '20s'}}
          />
        </g>
      </svg>
    </div>
  );
}
