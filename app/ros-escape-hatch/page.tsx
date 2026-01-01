// FULL FILE — SAFE TO OVERWRITE
// file: app/ros-escape-hatch/page.tsx

export default function ROSEscapeHatch() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, Arial",
        padding: 24,
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 900,
          marginBottom: 12,
        }}
      >
        ROS Escape Hatch
      </h1>

      <p
        style={{
          maxWidth: 640,
          opacity: 0.8,
          marginBottom: 32,
          fontSize: 16,
        }}
      >
        Use this page if something feels broken, confusing, or unclear in the
        Reseller Operating System. These links bypass normal workflows and go
        straight to system diagnostics.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          width: "100%",
          maxWidth: 420,
        }}
      >
        <a
          href="https://reseller.3geekscomics.com/health"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "14px 18px",
            borderRadius: 10,
            border: "2px solid #111827",
            background: "#111827",
            color: "white",
            textDecoration: "none",
            fontWeight: 800,
            fontSize: 16,
          }}
        >
          🩺 ROS Health (Start Here)
        </a>

        <a
          href="https://reseller.3geekscomics.com/support"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "14px 18px",
            borderRadius: 10,
            border: "1px solid #111827",
            background: "white",
            color: "#111827",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: 16,
          }}
        >
          🛠 ROS Support / Diagnostics
        </a>
      </div>

      <p
        style={{
          marginTop: 40,
          fontSize: 12,
          opacity: 0.6,
        }}
      >
        Tip: If asking for help, start with <strong>ROS Health</strong> and copy
        the report before digging deeper.
      </p>
    </main>
  );
}
