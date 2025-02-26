const Placement = ({ position, children }) => (
  <div
    style={{
      top: `${position.y * 60}px`,
      left: `${position.x * 60}px`,
    }}
    className="absolute h-[60px] w-[60px] flex items-center justify-center"
  >
    {children}
  </div>
);

export default Placement;
