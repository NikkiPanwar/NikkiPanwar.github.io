import "./ArchitectureDiagram.css";

export interface NodeItem {
  id: string;
  label: string;
  sublabel: string;
  type: "client" | "gateway" | "service" | "db" | "cloud";
}

export interface ArchitectureDiagramProps {
  systemName: string;
  badge?: string;
  variant?: "edtech" | "rbac" | "travel";
}

export function ArchitectureDiagram({
  systemName,
  badge = "System Architecture Flow",
  variant = "edtech",
}: ArchitectureDiagramProps) {
  if (variant === "rbac") {
    return (
      <div className="arch-diagram-container">
        <div className="arch-header">
          <span className="arch-tag">{badge}</span>
          <span className="arch-sys-name">{systemName}</span>
        </div>
        <div className="arch-grid arch-grid-3">
          <div className="arch-node arch-node-client">
            <span className="arch-node-type">Angular 16+ Client</span>
            <div className="arch-node-title">Role Guard & Interceptor</div>
            <span className="arch-node-desc">Injects Bearer JWT & checks permission tier</span>
          </div>

          <div className="arch-connector">
            <div className="arch-line"></div>
            <span className="arch-pill">Auth Header</span>
          </div>

          <div className="arch-node arch-node-gateway">
            <span className="arch-node-type">FastAPI / Python</span>
            <div className="arch-node-title">RBAC Middleware</div>
            <span className="arch-node-desc">Decodes claims, verifies access across 4 tiers</span>
          </div>

          <div className="arch-connector">
            <div className="arch-line"></div>
            <span className="arch-pill">Query / Verify</span>
          </div>

          <div className="arch-node arch-node-db">
            <span className="arch-node-type">PostgreSQL / Redis</span>
            <div className="arch-node-title">Roles & Policies DB</div>
            <span className="arch-node-desc">Hierarchical permissions & revokable sessions</span>
          </div>
        </div>
        <div className="arch-footer">
          <span className="arch-dot live"></span>
          <span>Zero-trust token verification & granular endpoint protection</span>
        </div>
      </div>
    );
  }

  if (variant === "travel") {
    return (
      <div className="arch-diagram-container">
        <div className="arch-header">
          <span className="arch-tag">{badge}</span>
          <span className="arch-sys-name">{systemName}</span>
        </div>
        <div className="arch-grid arch-grid-3">
          <div className="arch-node arch-node-client">
            <span className="arch-node-type">Angular SPA</span>
            <div className="arch-node-title">Itinerary & Booking Flow</div>
            <span className="arch-node-desc">Reactive state, multi-step checkout & filters</span>
          </div>

          <div className="arch-connector">
            <div className="arch-line"></div>
            <span className="arch-pill">REST APIs</span>
          </div>

          <div className="arch-node arch-node-gateway">
            <span className="arch-node-type">Node.js / Express</span>
            <div className="arch-node-title">Booking Controller</div>
            <span className="arch-node-desc">Availability locks, pricing & order transactions</span>
          </div>

          <div className="arch-connector">
            <div className="arch-line"></div>
            <span className="arch-pill">Transactions</span>
          </div>

          <div className="arch-node arch-node-db">
            <span className="arch-node-type">MySQL Cluster</span>
            <div className="arch-node-title">Trips & Reservations</div>
            <span className="arch-node-desc">Relational package, itinerary & guide records</span>
          </div>
        </div>
        <div className="arch-footer">
          <span className="arch-dot live"></span>
          <span>Production transactional booking & guide assignment pipeline</span>
        </div>
      </div>
    );
  }

  // Default: EdTech Assessment Platform
  return (
    <div className="arch-diagram-container">
      <div className="arch-header">
        <span className="arch-tag">{badge}</span>
        <span className="arch-sys-name">{systemName}</span>
      </div>
      <div className="arch-grid arch-grid-3">
        <div className="arch-node arch-node-client">
          <span className="arch-node-type">Angular Frontend</span>
          <div className="arch-node-title">Quiz & Assessment SPA</div>
          <span className="arch-node-desc">Timed questions, local state cache & auto-save</span>
        </div>

        <div className="arch-connector">
          <div className="arch-line"></div>
          <span className="arch-pill">REST & Sync</span>
        </div>

        <div className="arch-node arch-node-gateway">
          <span className="arch-node-type">FastAPI / Python</span>
          <div className="arch-node-title">Assessment Engine</div>
          <span className="arch-node-desc">Proctoring checks, validation & scoring</span>
        </div>

        <div className="arch-connector">
          <div className="arch-line"></div>
          <span className="arch-pill">AWS S3 / CDN</span>
        </div>

        <div className="arch-node arch-node-db">
          <span className="arch-node-type">Cloud & Storage</span>
          <div className="arch-node-title">AWS S3 + CloudFront</div>
          <span className="arch-node-desc">Optimized media delivery & candidate assets</span>
        </div>
      </div>
      <div className="arch-footer">
        <span className="arch-dot live"></span>
        <span>Low-latency state sync & anti-cheat session preservation</span>
      </div>
    </div>
  );
}

export default ArchitectureDiagram;
