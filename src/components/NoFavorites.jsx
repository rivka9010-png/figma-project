const imgGroup260 = "https://www.figma.com/api/mcp/asset/a94a3451-8a81-4f38-a5b7-afbdda1b1d1a";
const imgGroup785 = "https://www.figma.com/api/mcp/asset/fa25bdd5-12e5-4d59-b01a-2eac4cd9feed";
const imgStar1 = "https://www.figma.com/api/mcp/asset/52c9e4a5-6688-4012-abee-228e943d2216";

export default function NoFavorites() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "18px", width: "100%", height: "100%", position: "relative" }}>
      <div style={{ position: "relative", width: "240px", height: "188px", flexShrink: 0 }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: "15.5%", bottom: "2.6%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img alt="" src={imgGroup260} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>
        <div style={{ position: "absolute", top: "35.4%", left: "20.3%", right: 0, bottom: 0 }}>
          <img alt="" src={imgGroup785} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>
        <div style={{ position: "absolute", top: "3.3%", left: "1.7%", right: "81.8%", bottom: "75.7%" }}>
          <img alt="" src={imgStar1} style={{ width: "100%", height: "100%", objectFit: "contain", transform: "rotate(-10.69deg)" }} />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "18px", textAlign: "center" }}>
        <h2 style={{ margin: 0, fontFamily: "Rubik, sans-serif", fontWeight: 600, fontSize: "32px", lineHeight: "40px", color: "#1a1e27", direction: "rtl" }}>
          עדיין אין לך מועדפים
        </h2>
        <p style={{ margin: 0, fontFamily: "Rubik, sans-serif", fontWeight: 400, fontSize: "20px", lineHeight: "28px", color: "#4a5568", direction: "rtl" }}>
          לחץ על ★ ליד כל שירות<br />
          כדי להוסיפו לרשימת המועדפים שלך
        </p>
      </div>
    </div>
  );
}