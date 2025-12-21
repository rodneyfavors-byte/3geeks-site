export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "system-ui, Arial",
        padding: 16,
        overflow: "hidden",
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
    </main>
  );
}
