/** Fixed, subtle ambient background shared by every page — a soft brand aurora (no grid). */
export function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Top-center brand glow */}
      <div className="absolute -top-48 left-1/2 h-[42rem] w-[64rem] -translate-x-1/2 bg-brand-radial opacity-50 blur-2xl" />
      {/* Diffuse aurora blobs — green + teal */}
      <div
        className="absolute -left-40 top-1/4 h-[34rem] w-[34rem] rounded-full opacity-[0.16] blur-3xl"
        style={{ background: "radial-gradient(closest-side, #19E57D, transparent)" }}
      />
      <div
        className="absolute -right-40 top-2/3 h-[32rem] w-[32rem] rounded-full opacity-[0.14] blur-3xl"
        style={{ background: "radial-gradient(closest-side, #00D9C0, transparent)" }}
      />
    </div>
  );
}
