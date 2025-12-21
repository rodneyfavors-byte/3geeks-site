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
        padding: 20,
      }}
    >
      <img
        src="/3geeks-logo.png"
        alt="3 Geeks Comics"
        style={{
          maxWidth: "90%",
          height: "auto",
          marginBottom: 24,
        }}
      />

      <p
        style={{
          fontSize: 20,
          fontStyle: "italic",
          maxWidth: 700,
        }}
      >
        Cause a fat man gotta have them funny books, and cookies!
      </p>
    </main>
  );
}
