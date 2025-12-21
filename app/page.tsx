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
          width: "min(520px, 80vw)", // smaller than before, responsive
          height: "auto",
          marginBottom: 10, // closer text
        }}
      />

      <p
        style={{
          fontSize: "clamp(26px, 4vw, 40px)", // bigger words, responsive
          fontWeight: 700,
          lineHeight: 1.1,
          margin: 0,
          maxWidth: "min(900px, 92vw)",
        }}
      >
        Cause a fat man gotta have them funny books, and cookies!
      </p>
    </main>
  );
}

}
