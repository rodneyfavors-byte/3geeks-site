// FULL FILE — SAFE TO OVERWRITE
// file: app/page.tsx

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center",
        fontFamily: "system-ui, Arial",
        padding: 16,
        overflow: "hidden",
      }}
    >
      {/* Main content */}
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/3geeks-logo.png"
          alt="3 Geeks Comics"
          style={{
            width: "min(420px, 70vw)",
            height: "auto",
            marginBottom: 6,
          }}
        />

        <p
          style={{
            fontSize: "clamp(30px, 4.8vw, 52px)",
            fontWeight: 800,
            lineHeight: 1.05,
            margin: 0,
            maxWidth: "min(980px, 92vw)",
          }}
        >
          Cause a fat man gotta have them funny books, and cookies!
        </p>
      </div>

      {/* Panic Button / Escape Hatch */}
      <div
        style={{
          marginTop: 24,
          marginBottom: 8,
          opacity: 0.9,
        }}
      >
        <a
          href="/ros-escape-hatch"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            textDecoration: "none",
          }}
          title="ROS Escape Hatch"
        >
          <img
            src="/panicbutton.png"
            alt="ROS Escape Hatch"
            style={{
              width: 96,
              height: "auto",
              cursor: "pointer",
            }}
          />
        </a>

        <div
          style={{
            fontSize: 12,
            marginTop: 6,
            opacity: 0.7,
          }}
        >
          ROS Escape Hatch
        </div>
      </div>
    </main>
  );
}
