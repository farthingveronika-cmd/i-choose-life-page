import { useRef } from "react";

export default function App() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#0a0a0a", color: "white" }}>
      <section
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "24px",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('/family.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "900px" }}>
          <h1
            style={{
              fontSize: "clamp(42px, 8vw, 88px)",
              marginBottom: "24px",
              lineHeight: 1.05,
              textShadow: "0 4px 20px rgba(0,0,0,0.35)",
            }}
          >
            Choose life. Come home.
          </h1>
          <button
            onClick={scrollToForm}
            style={{
              background: "#ffffff",
              color: "#111",
              border: "none",
              borderRadius: "18px",
              padding: "16px 28px",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
            }}
            type="button"
          >
            Submit a Request
          </button>
        </div>
      </section>

      <section
        ref={formRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          background: "#111111",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "680px",
            background: "#1a1a1a",
            borderRadius: "24px",
            padding: "32px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
          }}
        >
          <h2 style={{ fontSize: "36px", marginTop: 0, marginBottom: "12px" }}>Request Help</h2>
          <p style={{ color: "#d1d1d1", marginTop: 0, marginBottom: "24px", lineHeight: 1.5 }}>
            Fill this out and send it to someone you trust, or connect it to your own form service.
          </p>

          <form style={{ display: "grid", gap: "16px" }}>
            <input
              type="text"
              placeholder="Your name"
              style={{ padding: "16px", borderRadius: "14px", border: "1px solid #333", background: "#0f0f0f", color: "white", fontSize: "16px" }}
            />
            <input
              type="email"
              placeholder="Your email"
              style={{ padding: "16px", borderRadius: "14px", border: "1px solid #333", background: "#0f0f0f", color: "white", fontSize: "16px" }}
            />
            <textarea
              placeholder="Write your request here"
              rows={6}
              style={{ padding: "16px", borderRadius: "14px", border: "1px solid #333", background: "#0f0f0f", color: "white", fontSize: "16px", resize: "vertical" }}
            />
            <button
              type="submit"
              style={{
                background: "#ffffff",
                color: "#111",
                border: "none",
                borderRadius: "16px",
                padding: "16px 24px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Send Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}