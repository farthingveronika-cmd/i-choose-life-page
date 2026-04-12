export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: "800px", textAlign: "center" }}>
        <h1 style={{ fontSize: "56px", marginBottom: "32px" }}>I Choose Life!</h1>
        <button
          style={{
            background: "white",
            color: "#111",
            border: "none",
            borderRadius: "18px",
            padding: "16px 28px",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          type="button"
        >
          Submit a Request
        </button>
      </div>
    </div>
  );
}