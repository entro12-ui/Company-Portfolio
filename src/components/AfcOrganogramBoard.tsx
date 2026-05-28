import type { IconType } from "react-icons";
import {
  FaBolt,
  FaBoxes,
  FaBullhorn,
  FaBuilding,
  FaCarSide,
  FaChartBar,
  FaClipboardList,
  FaCogs,
  FaHandshake,
  FaLaptopCode,
  FaMoneyCheckAlt,
  FaPaintBrush,
  FaRegAddressCard,
  FaToolbox,
  FaUserFriends,
  FaUserSecret,
  FaUsers,
  FaUserTie,
  FaWrench,
} from "react-icons/fa";
import type {
  OrganogramData,
  OrganogramIconKey,
  OrganogramNode,
  OrganogramRole,
} from "@/content/afcOrganogram";

type AfcOrganogramBoardProps = {
  chart: OrganogramData;
};

type PositionedNode = {
  id: string;
  role: OrganogramRole;
  x: number;
  y: number;
  width: number;
  height: number;
  filled?: boolean;
  compact?: boolean;
  stacked?: boolean;
};

const BOARD_WIDTH = 1580;
const BOARD_HEIGHT = 930;
const BRAND_BLUE = "#0f3f95";
const LINE_BLUE = "#1b4ea3";

const iconMap: Record<OrganogramIconKey, IconType> = {
  director: FaUserTie,
  auditor: FaUserSecret,
  manager: FaUserTie,
  it: FaLaptopCode,
  secretary: FaRegAddressCard,
  technical: FaCogs,
  "customer-service": FaUsers,
  service: FaWrench,
  diagnostic: FaBolt,
  painting: FaPaintBrush,
  cleaning: FaCarSide,
  tools: FaToolbox,
  parts: FaBoxes,
  marketing: FaBullhorn,
  finance: FaChartBar,
  hr: FaUserFriends,
  sales: FaHandshake,
  digital: FaChartBar,
  accounting: FaMoneyCheckAlt,
  procurement: FaClipboardList,
  property: FaBuilding,
  "general-service": FaUsers,
};

function getDepartment(chart: OrganogramData, name: string) {
  const department = chart.departments.find((item) => item.name === name);

  if (!department) {
    throw new Error(`Missing department: ${name}`);
  }

  return department;
}

function getLinearChildren(node: OrganogramNode) {
  const children: OrganogramRole[] = [];
  let current = node.children?.[0];

  while (current) {
    children.push({ title: current.title, icon: current.icon });
    if (current.layout === "branch" || current.layout === "side-stack") {
      break;
    }
    current = current.children?.[0];
  }

  return children;
}

function centerX(node: PositionedNode) {
  return node.x + node.width / 2;
}

function bottomY(node: PositionedNode) {
  return node.y + node.height;
}

function NodeBox({
  role,
  x,
  y,
  width,
  height,
  filled = false,
  compact = false,
  stacked = false,
}: PositionedNode) {
  const Icon = role.icon ? iconMap[role.icon] : null;

  return (
    <div
      className="absolute"
      style={{
        left: x,
        top: y,
        width,
        height,
      }}
    >
      <div
        className={`flex h-full w-full items-center justify-center rounded-[10px] border ${compact ? "px-2 py-1.5 text-[8.5px] leading-3.5" : "px-3 py-2.5 text-[10px] leading-4"}`}
        style={{
          borderColor: filled ? BRAND_BLUE : `${BRAND_BLUE}80`,
          background: filled ? BRAND_BLUE : "#ffffff",
          color: filled ? "#ffffff" : "#16315d",
          boxShadow: "none",
        }}
      >
        <div
          className={`flex w-full items-center justify-center gap-1.5 ${stacked ? "flex-col" : "flex-row"}`}
        >
          {Icon ? (
            <span
              className={`inline-flex items-center justify-center rounded-full ${filled ? "bg-white/12 text-white" : "bg-[#0f3f95]/8 text-[#0f3f95]"} ${compact ? "h-4.5 w-4.5 text-[9px]" : "h-5.5 w-5.5 text-[10px]"}`}
            >
              <Icon />
            </span>
          ) : null}
          <span className="text-center font-extrabold uppercase tracking-[0.05em]">
            {role.title}
          </span>
        </div>
      </div>
    </div>
  );
}

function LogoCard() {
  return (
    <div className="relative flex w-[250px] overflow-hidden rounded-[1.6rem] border border-[#0f3f95]/18 bg-white px-4 py-4 shadow-none">
      <div className="absolute -left-9 -top-9 h-24 w-24 rounded-full border-[16px] border-[#0f3f95]/14" />
      <div className="flex items-center gap-3">
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#0f3f95]/7 text-3xl font-black text-[#0f3f95]">
          ✺
        </div>
        <div className="min-w-0">
          <div className="text-[2.55rem] font-black leading-none tracking-[0.22em] text-[#0f3f95]">
            AFS
          </div>
          <div className="mt-1 rounded-sm border-y border-[#0f3f95] py-1 text-[8.5px] font-extrabold uppercase leading-4 tracking-[0.145em] text-[#0f3f95]">
            Automotive Fleet Services International PLC
          </div>
        </div>
      </div>
    </div>
  );
}

function DotCorner({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute h-24 w-24 opacity-35 ${className}`}
      style={{
        backgroundImage: "radial-gradient(#1b4ea3 1.2px, transparent 1.2px)",
        backgroundSize: "9px 9px",
      }}
    />
  );
}

function ToolsRoomBadge({ role, x, y }: { role: OrganogramRole; x: number; y: number }) {
  const Icon = role.icon ? iconMap[role.icon] : null;

  return (
    <div className="absolute" style={{ left: x, top: y }}>
      <div className="relative flex h-[74px] w-[58px] flex-col items-center justify-center rounded-[10px] border border-[#0f3f95]/40 bg-white px-2 text-center text-[8.5px] font-extrabold uppercase tracking-[0.07em] text-[#0f3f95] shadow-none">
        <div className="absolute -left-7 top-1/2 h-px w-7 -translate-y-1/2 bg-[#1b4ea3]/40" />
        {Icon ? <Icon className="mb-1 text-base" /> : null}
        <span>{role.title}</span>
      </div>
    </div>
  );
}

function DiagramLines({ nodes }: { nodes: Record<string, PositionedNode> }) {
  const topLineY = 328;
  const technicalSubLineY = 429;
  const marketingSubLineY = 452;
  const financeSubLineY = 452;

  return (
    <svg
      className="absolute left-0 top-0 h-full w-full"
      viewBox={`0 0 ${BOARD_WIDTH} ${BOARD_HEIGHT}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <marker
          id="afcArrowHead"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={LINE_BLUE} />
        </marker>
      </defs>

      <line x1={centerX(nodes.managingDirector)} y1={bottomY(nodes.managingDirector)} x2={centerX(nodes.managingDirector)} y2={nodes.generalManager.y} stroke={LINE_BLUE} strokeWidth="2.2" markerEnd="url(#afcArrowHead)" />
      <line x1={nodes.generalManager.x} y1={nodes.generalManager.y + nodes.generalManager.height / 2} x2={nodes.internalAuditor.x + nodes.internalAuditor.width} y2={nodes.generalManager.y + nodes.generalManager.height / 2} stroke={LINE_BLUE} strokeWidth="2.2" markerEnd="url(#afcArrowHead)" />

      <line x1={centerX(nodes.generalManager)} y1={bottomY(nodes.generalManager)} x2={centerX(nodes.generalManager)} y2={topLineY} stroke={LINE_BLUE} strokeWidth="2.2" markerEnd="url(#afcArrowHead)" />
      <line x1={centerX(nodes.itHead)} y1={nodes.itHead.y} x2={centerX(nodes.itHead)} y2={topLineY} stroke={LINE_BLUE} strokeWidth="2.2" markerEnd="url(#afcArrowHead)" />
      <line x1={centerX(nodes.executiveSecretary)} y1={nodes.executiveSecretary.y} x2={centerX(nodes.executiveSecretary)} y2={topLineY} stroke={LINE_BLUE} strokeWidth="2.2" markerEnd="url(#afcArrowHead)" />

      <line x1={centerX(nodes.technicalManager)} y1={topLineY} x2={centerX(nodes.hrManager)} y2={topLineY} stroke={LINE_BLUE} strokeWidth="2.2" />
      {[
        nodes.technicalManager,
        nodes.sparePartsManager,
        nodes.marketingManager,
        nodes.financeManager,
        nodes.hrManager,
      ].map((node) => (
        <line
          key={node.id}
          x1={centerX(node)}
          y1={topLineY}
          x2={centerX(node)}
          y2={node.y}
          stroke={LINE_BLUE}
          strokeWidth="2.2"
          markerEnd="url(#afcArrowHead)"
        />
      ))}

      <line x1={centerX(nodes.techCustomerService)} y1={technicalSubLineY} x2={centerX(nodes.techCleaning)} y2={technicalSubLineY} stroke={LINE_BLUE} strokeWidth="2.2" />
      {[
        nodes.techCustomerService,
        nodes.techServiceSection,
        nodes.techElectrical,
        nodes.techBody,
        nodes.techCleaning,
      ].map((node) => (
        <line
          key={node.id}
          x1={centerX(node)}
          y1={technicalSubLineY}
          x2={centerX(node)}
          y2={node.y}
          stroke={LINE_BLUE}
          strokeWidth="2.2"
          markerEnd="url(#afcArrowHead)"
        />
      ))}
      <line x1={centerX(nodes.technicalManager)} y1={bottomY(nodes.technicalManager)} x2={centerX(nodes.technicalManager)} y2={technicalSubLineY} stroke={LINE_BLUE} strokeWidth="2.2" />

      <line x1={centerX(nodes.marketingTender)} y1={marketingSubLineY} x2={centerX(nodes.marketingDigital)} y2={marketingSubLineY} stroke={LINE_BLUE} strokeWidth="2.2" />
      <line x1={centerX(nodes.marketingManager)} y1={bottomY(nodes.marketingManager)} x2={centerX(nodes.marketingManager)} y2={marketingSubLineY} stroke={LINE_BLUE} strokeWidth="2.2" />
      {[nodes.marketingTender, nodes.marketingDigital].map((node) => (
        <line
          key={node.id}
          x1={centerX(node)}
          y1={marketingSubLineY}
          x2={centerX(node)}
          y2={node.y}
          stroke={LINE_BLUE}
          strokeWidth="2.2"
          markerEnd="url(#afcArrowHead)"
        />
      ))}

      <line x1={centerX(nodes.financeSenior)} y1={financeSubLineY} x2={centerX(nodes.financeProperty)} y2={financeSubLineY} stroke={LINE_BLUE} strokeWidth="2.2" />
      <line x1={centerX(nodes.financeManager)} y1={bottomY(nodes.financeManager)} x2={centerX(nodes.financeManager)} y2={financeSubLineY} stroke={LINE_BLUE} strokeWidth="2.2" />
      {[nodes.financeSenior, nodes.financeProcurement, nodes.financeProperty].map((node) => (
        <line
          key={node.id}
          x1={centerX(node)}
          y1={financeSubLineY}
          x2={centerX(node)}
          y2={node.y}
          stroke={LINE_BLUE}
          strokeWidth="2.2"
          markerEnd="url(#afcArrowHead)"
        />
      ))}

      {[nodes.spareSupervisor, nodes.hrOfficer, nodes.generalServiceOfficer].map((node, index) => {
        const parent = index === 0 ? nodes.sparePartsManager : nodes.hrManager;

        return (
          <line
            key={node.id}
            x1={centerX(parent)}
            y1={bottomY(parent)}
            x2={centerX(node)}
            y2={node.y}
            stroke={LINE_BLUE}
            strokeWidth="2.2"
            markerEnd="url(#afcArrowHead)"
          />
        );
      })}

      {[
        [nodes.techCustomerService, nodes.techServiceAdvisors],
        [nodes.techServiceAdvisors, nodes.techWarranty],
        [nodes.techWarranty, nodes.techTimekeeper],
        [nodes.techServiceSection, nodes.techForeman],
        [nodes.techForeman, nodes.techSeniorMechanics],
        [nodes.techSeniorMechanics, nodes.techJuniorMechanics],
        [nodes.techElectrical, nodes.techDiagnosticTechnician],
        [nodes.techDiagnosticTechnician, nodes.techSeniorElectrician],
        [nodes.techSeniorElectrician, nodes.techJuniorElectricians],
        [nodes.techBody, nodes.techSeniorBodyPainter],
        [nodes.techSeniorBodyPainter, nodes.techJuniorBodyPainter],
        [nodes.techJuniorBodyPainter, nodes.techJuniorPanelBeaters],
        [nodes.techCleaning, nodes.techDenter],
        [nodes.techDenter, nodes.techSanding],
        [nodes.techSanding, nodes.techCarWash],
        [nodes.spareSupervisor, nodes.spareTire],
        [nodes.spareTire, nodes.spareStore],
        [nodes.spareStore, nodes.sparePicker],
        [nodes.marketingTender, nodes.marketingSeniorSales],
        [nodes.financeSenior, nodes.financeAr],
        [nodes.financeAr, nodes.financeJuniorAccounts],
        [nodes.financeProperty, nodes.financeCashier],
      ].map(([from, to]) => (
        <line
          key={`${from.id}-${to.id}`}
          x1={centerX(from)}
          y1={bottomY(from)}
          x2={centerX(to)}
          y2={to.y}
          stroke={LINE_BLUE}
          strokeWidth="2"
          markerEnd="url(#afcArrowHead)"
        />
      ))}

      <line x1={centerX(nodes.generalServiceOfficer)} y1={bottomY(nodes.generalServiceOfficer) - nodes.generalServiceOfficer.height / 2} x2={1498} y2={bottomY(nodes.generalServiceOfficer) - nodes.generalServiceOfficer.height / 2} stroke={LINE_BLUE} strokeWidth="2.2" />
      <line x1={1498} y1={bottomY(nodes.generalServiceOfficer) - nodes.generalServiceOfficer.height / 2} x2={1498} y2={760} stroke={LINE_BLUE} strokeWidth="2.2" />
      {[nodes.hrDrivers, nodes.hrJanitors, nodes.hrGuards].map((node) => (
        <line
          key={node.id}
          x1={1498}
          y1={node.y + node.height / 2}
          x2={node.x}
          y2={node.y + node.height / 2}
          stroke={LINE_BLUE}
          strokeWidth="2.2"
          markerEnd="url(#afcArrowHead)"
        />
      ))}
    </svg>
  );
}

export default function AfcOrganogramBoard({ chart }: AfcOrganogramBoardProps) {
  const technical = getDepartment(chart, "Technical Manager");
  const spareParts = getDepartment(chart, "Spare Parts & Logistics Manager");
  const marketing = getDepartment(chart, "Marketing Manager");
  const finance = getDepartment(chart, "Finance & Administration Manager");
  const hr = getDepartment(chart, "HR & General Service Manager");

  const technicalX = [40, 180, 320, 460, 600];
  const technicalBranches = technical.branches.map((branch, index) => ({
    node: {
      id: `tech-${index}`,
      role: { title: branch.title, icon: branch.icon },
      x: technicalX[index],
      y: 462,
      width: 118,
      height: 56,
      compact: true,
    } satisfies PositionedNode,
    children: getLinearChildren(branch),
  }));

  const nodes: Record<string, PositionedNode> = {
    managingDirector: {
      id: "managing-director",
      role: chart.leadership.managingDirector,
      x: 710,
      y: 52,
      width: 164,
      height: 58,
      filled: true,
      stacked: true,
    },
    internalAuditor: {
      id: "internal-auditor",
      role: chart.leadership.internalAuditor,
      x: 520,
      y: 116,
      width: 132,
      height: 50,
    },
    generalManager: {
      id: "general-manager",
      role: chart.leadership.generalManager,
      x: 710,
      y: 118,
      width: 160,
      height: 56,
      stacked: true,
    },
    itHead: {
      id: "it-head",
      role: chart.leadership.supportRoles[0],
      x: 624,
      y: 232,
      width: 118,
      height: 46,
    },
    executiveSecretary: {
      id: "executive-secretary",
      role: chart.leadership.supportRoles[1],
      x: 884,
      y: 232,
      width: 148,
      height: 46,
    },
    technicalManager: {
      id: "technical-manager",
      role: { title: technical.name, icon: technical.icon },
      x: 118,
      y: 334,
      width: 176,
      height: 58,
      filled: true,
      stacked: true,
    },
    sparePartsManager: {
      id: "spare-parts-manager",
      role: { title: spareParts.name, icon: spareParts.icon },
      x: 724,
      y: 334,
      width: 176,
      height: 58,
      filled: true,
      stacked: true,
    },
    marketingManager: {
      id: "marketing-manager",
      role: { title: marketing.name, icon: marketing.icon },
      x: 934,
      y: 334,
      width: 144,
      height: 58,
      filled: true,
      stacked: true,
    },
    financeManager: {
      id: "finance-manager",
      role: { title: finance.name, icon: finance.icon },
      x: 1130,
      y: 334,
      width: 194,
      height: 58,
      filled: true,
      stacked: true,
    },
    hrManager: {
      id: "hr-manager",
      role: { title: hr.name, icon: hr.icon },
      x: 1394,
      y: 334,
      width: 176,
      height: 58,
      filled: true,
      stacked: true,
    },
    techCustomerService: technicalBranches[0].node,
    techServiceSection: technicalBranches[1].node,
    techElectrical: technicalBranches[2].node,
    techBody: technicalBranches[3].node,
    techCleaning: technicalBranches[4].node,
    techServiceAdvisors: {
      id: "tech-service-advisors",
      role: technicalBranches[0].children[0],
      x: 48,
      y: 540,
      width: 104,
      height: 50,
      compact: true,
    },
    techWarranty: {
      id: "tech-warranty",
      role: technicalBranches[0].children[1],
      x: 28,
      y: 613,
      width: 144,
      height: 50,
      compact: true,
    },
    techTimekeeper: {
      id: "tech-timekeeper",
      role: technicalBranches[0].children[2],
      x: 56,
      y: 686,
      width: 88,
      height: 46,
      compact: true,
    },
    techForeman: {
      id: "tech-foreman",
      role: technicalBranches[1].children[0],
      x: 204,
      y: 540,
      width: 94,
      height: 48,
      compact: true,
    },
    techSeniorMechanics: {
      id: "tech-senior-mechanics",
      role: technicalBranches[1].children[1],
      x: 190,
      y: 613,
      width: 122,
      height: 50,
      compact: true,
    },
    techJuniorMechanics: {
      id: "tech-junior-mechanics",
      role: technicalBranches[1].children[2],
      x: 194,
      y: 686,
      width: 114,
      height: 46,
      compact: true,
    },
    techDiagnosticTechnician: {
      id: "tech-diagnostic-tech",
      role: technicalBranches[2].children[0],
      x: 331,
      y: 540,
      width: 108,
      height: 50,
      compact: true,
    },
    techSeniorElectrician: {
      id: "tech-senior-electrician",
      role: technicalBranches[2].children[1],
      x: 321,
      y: 613,
      width: 128,
      height: 50,
      compact: true,
    },
    techJuniorElectricians: {
      id: "tech-junior-electricians",
      role: technicalBranches[2].children[2],
      x: 320,
      y: 686,
      width: 130,
      height: 46,
      compact: true,
    },
    techSeniorBodyPainter: {
      id: "tech-senior-body-painter",
      role: technicalBranches[3].children[0],
      x: 470,
      y: 540,
      width: 112,
      height: 50,
      compact: true,
    },
    techJuniorBodyPainter: {
      id: "tech-junior-body-painter",
      role: technicalBranches[3].children[1],
      x: 467,
      y: 613,
      width: 118,
      height: 50,
      compact: true,
    },
    techJuniorPanelBeaters: {
      id: "tech-junior-panel-beaters",
      role: technicalBranches[3].children[2],
      x: 460,
      y: 686,
      width: 132,
      height: 46,
      compact: true,
    },
    techDenter: {
      id: "tech-denter",
      role: technicalBranches[4].children[0],
      x: 628,
      y: 540,
      width: 62,
      height: 50,
      compact: true,
    },
    techSanding: {
      id: "tech-sanding",
      role: technicalBranches[4].children[1],
      x: 615,
      y: 613,
      width: 88,
      height: 50,
      compact: true,
    },
    techCarWash: {
      id: "tech-car-wash",
      role: technicalBranches[4].children[2],
      x: 622,
      y: 686,
      width: 74,
      height: 46,
      compact: true,
    },
    spareSupervisor: {
      id: "spare-supervisor",
      role: { title: spareParts.branches[0].title, icon: spareParts.branches[0].icon },
      x: 738,
      y: 486,
      width: 144,
      height: 56,
      compact: true,
    },
    spareTire: {
      id: "spare-tire",
      role: getLinearChildren(spareParts.branches[0])[0],
      x: 744,
      y: 566,
      width: 132,
      height: 50,
      compact: true,
    },
    spareStore: {
      id: "spare-store",
      role: getLinearChildren(spareParts.branches[0])[1],
      x: 756,
      y: 642,
      width: 108,
      height: 48,
      compact: true,
    },
    sparePicker: {
      id: "spare-picker",
      role: getLinearChildren(spareParts.branches[0])[2],
      x: 746,
      y: 716,
      width: 128,
      height: 48,
      compact: true,
    },
    marketingTender: {
      id: "marketing-tender",
      role: { title: marketing.branches[0].title, icon: marketing.branches[0].icon },
      x: 918,
      y: 486,
      width: 126,
      height: 56,
      compact: true,
    },
    marketingDigital: {
      id: "marketing-digital",
      role: { title: marketing.branches[1].title, icon: marketing.branches[1].icon },
      x: 1062,
      y: 486,
      width: 126,
      height: 56,
      compact: true,
    },
    marketingSeniorSales: {
      id: "marketing-senior-sales",
      role: getLinearChildren(marketing.branches[0])[0],
      x: 951,
      y: 568,
      width: 60,
      height: 50,
      compact: true,
    },
    financeSenior: {
      id: "finance-senior",
      role: { title: finance.branches[0].title, icon: finance.branches[0].icon },
      x: 1114,
      y: 486,
      width: 104,
      height: 56,
      compact: true,
    },
    financeProcurement: {
      id: "finance-procurement",
      role: { title: finance.branches[1].title, icon: finance.branches[1].icon },
      x: 1240,
      y: 486,
      width: 108,
      height: 56,
      compact: true,
    },
    financeProperty: {
      id: "finance-property",
      role: { title: finance.branches[2].title, icon: finance.branches[2].icon },
      x: 1364,
      y: 486,
      width: 98,
      height: 56,
      compact: true,
    },
    financeAr: {
      id: "finance-ar",
      role: getLinearChildren(finance.branches[0])[0],
      x: 1134,
      y: 570,
      width: 64,
      height: 48,
      compact: true,
    },
    financeJuniorAccounts: {
      id: "finance-junior-accounts",
      role: getLinearChildren(finance.branches[0])[1],
      x: 1118,
      y: 646,
      width: 96,
      height: 50,
      compact: true,
    },
    financeCashier: {
      id: "finance-cashier",
      role: getLinearChildren(finance.branches[2])[0],
      x: 1383,
      y: 570,
      width: 60,
      height: 48,
      compact: true,
    },
    hrOfficer: {
      id: "hr-officer",
      role: { title: hr.branches[0].title, icon: hr.branches[0].icon },
      x: 1415,
      y: 486,
      width: 64,
      height: 56,
      compact: true,
    },
    generalServiceOfficer: {
      id: "general-service-officer",
      role: { title: hr.branches[1].title, icon: hr.branches[1].icon },
      x: 1498,
      y: 486,
      width: 98,
      height: 56,
      compact: true,
    },
    hrDrivers: {
      id: "hr-drivers",
      role: hr.branches[1].children?.[0] ?? { title: "Drivers" },
      x: 1518,
      y: 562,
      width: 58,
      height: 46,
      compact: true,
    },
    hrJanitors: {
      id: "hr-janitors",
      role: hr.branches[1].children?.[1] ?? { title: "Janitors" },
      x: 1518,
      y: 638,
      width: 58,
      height: 46,
      compact: true,
    },
    hrGuards: {
      id: "hr-guards",
      role: hr.branches[1].children?.[2] ?? { title: "Guards" },
      x: 1518,
      y: 714,
      width: 58,
      height: 46,
      compact: true,
    },
  };

  return (
    <section className="relative overflow-hidden rounded-[2.3rem] border border-[#0f3f95]/10 bg-white px-4 py-6 shadow-none sm:px-6 lg:px-8">
      <div className="absolute -left-28 -top-28 h-56 w-56 rounded-full border-[42px] border-[#0f3f95]/12" />
      <div className="absolute -bottom-32 -right-28 h-64 w-64 rounded-full border-[48px] border-[#0f3f95]/12" />
      <DotCorner className="right-4 top-3" />
      <DotCorner className="bottom-3 left-4" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-[18rem] font-black tracking-[0.12em] text-[#0f3f95]/[0.035]">
        AFS
      </div>

      <div className="relative">
        <div className="grid gap-5 lg:grid-cols-[250px_minmax(0,1fr)_170px] lg:items-start">
          <LogoCard />

          <div className="text-center">
            <h1 className="text-3xl font-black uppercase leading-tight text-[#0f3f95] sm:text-[3.3rem]">
              AFS Automotive Fleet Services
              <br />
              International PLC
            </h1>

            <div className="mt-4 flex items-center justify-center gap-5 text-[#0f3f95]">
              <span className="relative h-px w-28 bg-[#1b4ea3]/45 after:absolute after:-right-1 after:-top-1 after:h-2 after:w-2 after:rounded-full after:bg-[#1b4ea3]" />
              <p className="text-lg font-bold uppercase tracking-[0.38em] sm:text-[1.9rem]">
                {chart.heading}
              </p>
              <span className="relative h-px w-28 bg-[#1b4ea3]/45 before:absolute before:-left-1 before:-top-1 before:h-2 before:w-2 before:rounded-full before:bg-[#1b4ea3]" />
            </div>
          </div>

          <div className="justify-self-start rounded-[4px] bg-[#0f3f95] px-4 py-2 text-sm font-semibold text-white shadow-none lg:justify-self-end">
            {chart.updatedLabel}
          </div>
        </div>

        <div className="mt-8 overflow-x-auto pb-2">
          <div className="mx-auto" style={{ width: BOARD_WIDTH }}>
            <div className="relative" style={{ width: BOARD_WIDTH, height: BOARD_HEIGHT }}>
              <DiagramLines nodes={nodes} />

              {Object.values(nodes).map((node) => (
                <NodeBox key={node.id} {...node} />
              ))}

              {technical.sideNote ? (
                <ToolsRoomBadge role={technical.sideNote} x={680} y={392} />
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 text-[#0f3f95]">
          <span className="h-px w-16 bg-[#1b4ea3]/45" />
          <p className="text-base font-semibold italic tracking-[0.04em]">
            {chart.tagline}
          </p>
          <span className="h-px w-16 bg-[#1b4ea3]/45" />
        </div>
      </div>
    </section>
  );
}
