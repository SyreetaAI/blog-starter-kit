export default function LeakageCard() {
    const metrics = [
        { label: "Categorization Variance", value: "$4.2M", pct: "72%", color: "#F97316" },
        { label: "Redundant Disbursement", value: "$890K", pct: "45%", color: "#FB923C" },
        { label: "Non-Compliant Spend", value: "$3.1M", pct: "60%", color: "#FDBA74" },
        { label: "Commercial Terms Attrition", value: "$1.8M", pct: "35%", color: "#FED7AA" },
    ];

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <span style={titleStyle}>Leakage Exposure Summary Report</span>
                <span style={badgeStyle}>LIVE AUDIT</span>
            </div>

            {metrics.map((m) => (
                <div key={m.label} style={{ marginBottom: "26px" }}>
                    <div style={labelRowStyle}>
                        <span>{m.label}</span>
                        <span style={{ fontWeight: 800, color: "white" }}>{m.value}</span>
                    </div>
                    <div style={barBgStyle}>
                        <div style={{ ...barFillStyle, width: m.pct, backgroundColor: m.color }} />
                    </div>
                </div>
            ))}

            <div style={footerStyle}>
                <div>
                    <div style={footerLabelStyle}>Identified EBITDA Recovery</div>
                    <div style={footerValueStyle}>$10.0M</div>
                </div>
                <div style={{ textAlign: "right" }}>
                    <div style={footerLabelStyle}>Realization Potential</div>
                    <div style={footerValueStylePrimary}>80–95%</div>
                </div>
            </div>
        </div>
    );
}

// Styles - Using your exact Hex codes
const containerStyle: React.CSSProperties = {
    background: "#0F172A",
    borderRadius: "24px",
    padding: "40px",
    color: "white",
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
    width: "100%",
    maxWidth: "500px",
    margin: "2rem auto",
    border: "1px solid rgba(249, 115, 22, 0.1)",
};

const headerStyle: React.CSSProperties = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "36px" };
const titleStyle: React.CSSProperties = { fontSize: "17px", fontWeight: 700 };
const badgeStyle: React.CSSProperties = { fontSize: "10px", fontWeight: 800, padding: "5px 12px", borderRadius: "100px", background: "rgba(249, 115, 22, 0.15)", color: "#F97316", border: "1px solid rgba(249, 115, 22, 0.4)" };
const labelRowStyle: React.CSSProperties = { display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "10px", color: "#94A3B8" };
const barBgStyle: React.CSSProperties = { height: "6px", background: "rgba(255,255,255,0.08)", borderRadius: "10px", overflow: "hidden" };
const barFillStyle: React.CSSProperties = { height: "100%", borderRadius: "10px" };
const footerStyle: React.CSSProperties = { marginTop: "34px", paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "flex-end" };
const footerLabelStyle: React.CSSProperties = { fontSize: "10px", color: "#64748B", textTransform: "uppercase", marginBottom: "6px", fontWeight: 600 };
const footerValueStyle: React.CSSProperties = { fontSize: "36px", fontWeight: 900 };
const footerValueStylePrimary: React.CSSProperties = { fontSize: "28px", fontWeight: 900, color: "#F97316" };
