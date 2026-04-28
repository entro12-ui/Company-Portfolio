 "use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FiActivity,
  FiArchive,
  FiBarChart2,
  FiBriefcase,
  FiClipboard,
  FiCode,
  FiGrid,
  FiHardDrive,
  FiLayers,
  FiMonitor,
  FiPackage,
  FiPenTool,
  FiSettings,
  FiShield,
  FiTrendingUp,
  FiTruck,
  FiUser,
  FiUserCheck,
  FiUsers,
  FiTool,
} from "react-icons/fi";
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
  showIcon?: boolean;
};

const BOARD_WIDTH = 1580;
const BOARD_HEIGHT = 790;
const BRAND_BLUE = "#0f3f95";
const LINE_BLUE = "#1b4ea3";
const NODE_BORDER = "#6a79b3";
const NODE_TEXT = "#1a2c56";

const iconMap: Record<OrganogramIconKey, IconType> = {
  director: FiUserCheck,
  auditor: FiShield,
  manager: FiUser,
  it: FiMonitor,
  secretary: FiClipboard,
  technical: FiSettings,
  "customer-service": FiUsers,
  service: FiTool,
  diagnostic: FiActivity,
  painting: FiPenTool,
  cleaning: FiTruck,
  tools: FiHardDrive,
  parts: FiPackage,
  marketing: FiTrendingUp,
  finance: FiBarChart2,
  hr: FiUsers,
  sales: FiBriefcase,
  digital: FiGrid,
  accounting: FiLayers,
  procurement: FiArchive,
  property: FiCode,
  "general-service": FiUsers,
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

function centerY(node: PositionedNode) {
  return node.y + node.height / 2;
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
  showIcon = false,
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
        className={`flex h-full w-full items-center justify-center rounded-[5px] border ${compact ? "px-2 py-1.5 text-[8px] leading-3.5" : "px-3 py-2 text-[9px] leading-4"}`}
        style={{
          borderColor: filled ? BRAND_BLUE : NODE_BORDER,
          background: filled ? BRAND_BLUE : "#ffffff",
          color: filled ? "#ffffff" : NODE_TEXT,
          boxShadow: "none",
        }}
      >
        <div
          className={`flex w-full items-center justify-center gap-1.5 ${stacked ? "flex-col" : "flex-row"}`}
        >
          {showIcon && Icon ? (
            <span
              className={`inline-flex items-center justify-center rounded-[4px] ${filled ? "bg-white/18 text-white" : "bg-[#0f3f95]/12 text-[#0f3f95]"} ${compact ? "h-5 w-5 text-[10px]" : "h-7 w-7 text-[14px]"}`}
            >
              <Icon />
            </span>
          ) : null}
          <span className="text-center font-extrabold uppercase tracking-[0.03em]">
            {role.title}
          </span>
        </div>
      </div>
    </div>
  );
}

function LogoCard() {
  return (
    <div className="w-[207px] overflow-hidden rounded-[4px] border border-[#0f3f95]/40 bg-white">
      <Image
        src="/afs-logo.png"
        alt="AFS Automotive Fleet Services International PLC logo"
        width={207}
        height={96}
        priority
        className="block h-auto w-full"
      />
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
  const topLineY = 296;
  const supportLineY = 188;
  const technicalSubLineY = 404;
  const marketingSubLineY = 416;
  const financeSubLineY = 416;
  const generalServiceRailX = nodes.hrDrivers.x - 16;
  const generalServiceStartY = centerY(nodes.generalServiceOfficer);
  const generalServiceEndY = nodes.hrGuards.y + nodes.hrGuards.height / 2;

  return (
    <svg
      className="absolute left-0 top-0 h-full w-full"
      viewBox={`0 0 ${BOARD_WIDTH} ${BOARD_HEIGHT}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      shapeRendering="geometricPrecision"
    >
      <defs>
        <marker
          id="afcArrowHead"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={LINE_BLUE} />
        </marker>
      </defs>

      <line x1={centerX(nodes.managingDirector)} y1={bottomY(nodes.managingDirector)} x2={centerX(nodes.managingDirector)} y2={nodes.generalManager.y} stroke={LINE_BLUE} strokeWidth="2.2" markerEnd="url(#afcArrowHead)" />
      <line x1={nodes.generalManager.x} y1={nodes.generalManager.y + nodes.generalManager.height / 2} x2={nodes.internalAuditor.x + nodes.internalAuditor.width} y2={nodes.generalManager.y + nodes.generalManager.height / 2} stroke={LINE_BLUE} strokeWidth="2.2" markerEnd="url(#afcArrowHead)" />

      <line x1={centerX(nodes.generalManager)} y1={bottomY(nodes.generalManager)} x2={centerX(nodes.generalManager)} y2={supportLineY} stroke={LINE_BLUE} strokeWidth="2.2" />
      <line x1={centerX(nodes.itHead)} y1={supportLineY} x2={centerX(nodes.executiveSecretary)} y2={supportLineY} stroke={LINE_BLUE} strokeWidth="2.2" />
      <line x1={centerX(nodes.itHead)} y1={supportLineY} x2={centerX(nodes.itHead)} y2={nodes.itHead.y} stroke={LINE_BLUE} strokeWidth="2.2" markerEnd="url(#afcArrowHead)" />
      <line x1={centerX(nodes.executiveSecretary)} y1={supportLineY} x2={centerX(nodes.executiveSecretary)} y2={nodes.executiveSecretary.y} stroke={LINE_BLUE} strokeWidth="2.2" markerEnd="url(#afcArrowHead)" />
      <line x1={centerX(nodes.generalManager)} y1={supportLineY} x2={centerX(nodes.generalManager)} y2={topLineY} stroke={LINE_BLUE} strokeWidth="2.2" markerEnd="url(#afcArrowHead)" />

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
        const elbowY = bottomY(parent) + 14;

        return (
          <g key={node.id}>
            <line
              x1={centerX(parent)}
              y1={bottomY(parent)}
              x2={centerX(parent)}
              y2={elbowY}
              stroke={LINE_BLUE}
              strokeWidth="2.2"
            />
            <line
              x1={centerX(parent)}
              y1={elbowY}
              x2={centerX(node)}
              y2={elbowY}
              stroke={LINE_BLUE}
              strokeWidth="2.2"
            />
            <line
              x1={centerX(node)}
              y1={elbowY}
              x2={centerX(node)}
              y2={node.y}
              stroke={LINE_BLUE}
              strokeWidth="2.2"
              markerEnd="url(#afcArrowHead)"
            />
          </g>
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
      ].map(([from, to]) => {
        const sameColumn = centerX(from) === centerX(to);
        const elbowY = bottomY(from) + 12;

        if (sameColumn) {
          return (
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
          );
        }

        return (
          <g key={`${from.id}-${to.id}`}>
            <line
              x1={centerX(from)}
              y1={bottomY(from)}
              x2={centerX(from)}
              y2={elbowY}
              stroke={LINE_BLUE}
              strokeWidth="2"
            />
            <line
              x1={centerX(from)}
              y1={elbowY}
              x2={centerX(to)}
              y2={elbowY}
              stroke={LINE_BLUE}
              strokeWidth="2"
            />
            <line
              x1={centerX(to)}
              y1={elbowY}
              x2={centerX(to)}
              y2={to.y}
              stroke={LINE_BLUE}
              strokeWidth="2"
              markerEnd="url(#afcArrowHead)"
            />
          </g>
        );
      })}

      <line
        x1={centerX(nodes.generalServiceOfficer)}
        y1={generalServiceStartY}
        x2={generalServiceRailX}
        y2={generalServiceStartY}
        stroke={LINE_BLUE}
        strokeWidth="2.2"
      />
      <line
        x1={generalServiceRailX}
        y1={generalServiceStartY}
        x2={generalServiceRailX}
        y2={generalServiceEndY}
        stroke={LINE_BLUE}
        strokeWidth="2.2"
      />
      {[nodes.hrDrivers, nodes.hrJanitors, nodes.hrGuards].map((node) => (
        <line
          key={node.id}
          x1={generalServiceRailX}
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
  const boardWrapperRef = useRef<HTMLDivElement | null>(null);
  const [boardScale, setBoardScale] = useState(1);
  const [isPrinting, setIsPrinting] = useState(false);
  const VIEWPORT_BOTTOM_PADDING = 12;
  const FOOTER_RESERVED_HEIGHT = 44;

  useEffect(() => {
    const updateScale = () => {
      if (!boardWrapperRef.current) {
        return;
      }

      const availableWidth = boardWrapperRef.current.clientWidth;
      if (!availableWidth) {
        return;
      }

      const widthScale = availableWidth / BOARD_WIDTH;
      const wrapperTop = boardWrapperRef.current.getBoundingClientRect().top;
      const availableHeight =
        window.innerHeight - wrapperTop - FOOTER_RESERVED_HEIGHT - VIEWPORT_BOTTOM_PADDING;
      const heightScale = availableHeight > 0 ? availableHeight / BOARD_HEIGHT : 1;

      setBoardScale(Math.min(1, widthScale, heightScale));
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => {
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  useEffect(() => {
    const beforePrint = () => setIsPrinting(true);
    const afterPrint = () => setIsPrinting(false);
    window.addEventListener("beforeprint", beforePrint);
    window.addEventListener("afterprint", afterPrint);
    return () => {
      window.removeEventListener("beforeprint", beforePrint);
      window.removeEventListener("afterprint", afterPrint);
    };
  }, []);


  const technical = getDepartment(chart, "Technical Manager");
  const spareParts = getDepartment(chart, "Spare Parts & Logistics Manager");
  const marketing = getDepartment(chart, "Marketing Manager");
  const finance = getDepartment(chart, "Finance & Administration Manager");
  const hr = getDepartment(chart, "HR & General Service Manager");

  const technicalX = [16, 156, 296, 436, 576];
  const technicalBranches = technical.branches.map((branch, index) => ({
    node: {
      id: `tech-${index}`,
      role: { title: branch.title, icon: branch.icon },
      x: technicalX[index],
      y: 454,
      width: 118,
      height: 52,
      compact: true,
      filled: true,
      showIcon: true,
    } satisfies PositionedNode,
    children: getLinearChildren(branch),
  }));

  const nodes: Record<string, PositionedNode> = {
    managingDirector: {
      id: "managing-director",
      role: chart.leadership.managingDirector,
      x: 710,
      y: 26,
      width: 164,
      height: 58,
      filled: true,
      stacked: true,
      showIcon: true,
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
      showIcon: true,
    },
    itHead: {
      id: "it-head",
      role: chart.leadership.supportRoles[0],
      x: 624,
      y: 214,
      width: 118,
      height: 46,
    },
    executiveSecretary: {
      id: "executive-secretary",
      role: chart.leadership.supportRoles[1],
      x: 884,
      y: 214,
      width: 148,
      height: 46,
    },
    technicalManager: {
      id: "technical-manager",
      role: { title: technical.name, icon: technical.icon },
      x: 86,
      y: 320,
      width: 176,
      height: 58,
      filled: true,
      stacked: false,
      showIcon: true,
    },
    sparePartsManager: {
      id: "spare-parts-manager",
      role: { title: spareParts.name, icon: spareParts.icon },
      x: 724,
      y: 320,
      width: 176,
      height: 58,
      filled: true,
      stacked: false,
      showIcon: true,
    },
    marketingManager: {
      id: "marketing-manager",
      role: { title: marketing.name, icon: marketing.icon },
      x: 920,
      y: 320,
      width: 144,
      height: 58,
      filled: true,
      stacked: false,
      showIcon: true,
    },
    financeManager: {
      id: "finance-manager",
      role: { title: finance.name, icon: finance.icon },
      x: 1110,
      y: 320,
      width: 194,
      height: 58,
      filled: true,
      stacked: false,
      showIcon: true,
    },
    hrManager: {
      id: "hr-manager",
      role: { title: hr.name, icon: hr.icon },
      x: 1398,
      y: 320,
      width: 176,
      height: 58,
      filled: true,
      stacked: false,
      showIcon: true,
    },
    techCustomerService: technicalBranches[0].node,
    techServiceSection: technicalBranches[1].node,
    techElectrical: technicalBranches[2].node,
    techBody: technicalBranches[3].node,
    techCleaning: technicalBranches[4].node,
    techServiceAdvisors: {
      id: "tech-service-advisors",
      role: technicalBranches[0].children[0],
      x: 24,
      y: 540,
      width: 104,
      height: 50,
      compact: true,
    },
    techWarranty: {
      id: "tech-warranty",
      role: technicalBranches[0].children[1],
      x: 4,
      y: 613,
      width: 144,
      height: 50,
      compact: true,
    },
    techTimekeeper: {
      id: "tech-timekeeper",
      role: technicalBranches[0].children[2],
      x: 32,
      y: 686,
      width: 88,
      height: 46,
      compact: true,
    },
    techForeman: {
      id: "tech-foreman",
      role: technicalBranches[1].children[0],
      x: 180,
      y: 540,
      width: 94,
      height: 48,
      compact: true,
    },
    techSeniorMechanics: {
      id: "tech-senior-mechanics",
      role: technicalBranches[1].children[1],
      x: 166,
      y: 613,
      width: 122,
      height: 50,
      compact: true,
    },
    techJuniorMechanics: {
      id: "tech-junior-mechanics",
      role: technicalBranches[1].children[2],
      x: 170,
      y: 686,
      width: 114,
      height: 46,
      compact: true,
    },
    techDiagnosticTechnician: {
      id: "tech-diagnostic-tech",
      role: technicalBranches[2].children[0],
      x: 307,
      y: 540,
      width: 108,
      height: 50,
      compact: true,
    },
    techSeniorElectrician: {
      id: "tech-senior-electrician",
      role: technicalBranches[2].children[1],
      x: 297,
      y: 613,
      width: 128,
      height: 50,
      compact: true,
    },
    techJuniorElectricians: {
      id: "tech-junior-electricians",
      role: technicalBranches[2].children[2],
      x: 296,
      y: 686,
      width: 130,
      height: 46,
      compact: true,
    },
    techSeniorBodyPainter: {
      id: "tech-senior-body-painter",
      role: technicalBranches[3].children[0],
      x: 446,
      y: 540,
      width: 112,
      height: 50,
      compact: true,
    },
    techJuniorBodyPainter: {
      id: "tech-junior-body-painter",
      role: technicalBranches[3].children[1],
      x: 443,
      y: 613,
      width: 118,
      height: 50,
      compact: true,
    },
    techJuniorPanelBeaters: {
      id: "tech-junior-panel-beaters",
      role: technicalBranches[3].children[2],
      x: 436,
      y: 686,
      width: 132,
      height: 46,
      compact: true,
    },
    techDenter: {
      id: "tech-denter",
      role: technicalBranches[4].children[0],
      x: 604,
      y: 540,
      width: 62,
      height: 50,
      compact: true,
    },
    techSanding: {
      id: "tech-sanding",
      role: technicalBranches[4].children[1],
      x: 591,
      y: 613,
      width: 88,
      height: 50,
      compact: true,
    },
    techCarWash: {
      id: "tech-car-wash",
      role: technicalBranches[4].children[2],
      x: 598,
      y: 686,
      width: 74,
      height: 46,
      compact: true,
    },
    spareSupervisor: {
      id: "spare-supervisor",
      role: { title: spareParts.branches[0].title, icon: spareParts.branches[0].icon },
      x: 700,
      y: 462,
      width: 144,
      height: 56,
      compact: true,
    },
    spareTire: {
      id: "spare-tire",
      role: getLinearChildren(spareParts.branches[0])[0],
      x: 744,
      y: 536,
      width: 132,
      height: 50,
      compact: true,
    },
    spareStore: {
      id: "spare-store",
      role: getLinearChildren(spareParts.branches[0])[1],
      x: 756,
      y: 608,
      width: 108,
      height: 48,
      compact: true,
    },
    sparePicker: {
      id: "spare-picker",
      role: getLinearChildren(spareParts.branches[0])[2],
      x: 746,
      y: 678,
      width: 128,
      height: 48,
      compact: true,
    },
    marketingTender: {
      id: "marketing-tender",
      role: { title: marketing.branches[0].title, icon: marketing.branches[0].icon },
      x: 850,
      y: 462,
      width: 126,
      height: 56,
      compact: true,
    },
    marketingDigital: {
      id: "marketing-digital",
      role: { title: marketing.branches[1].title, icon: marketing.branches[1].icon },
      x: 990,
      y: 462,
      width: 96,
      height: 56,
      compact: true,
    },
    marketingSeniorSales: {
      id: "marketing-senior-sales",
      role: getLinearChildren(marketing.branches[0])[0],
      x: 883,
      y: 538,
      width: 60,
      height: 50,
      compact: true,
    },
    financeSenior: {
      id: "finance-senior",
      role: { title: finance.branches[0].title, icon: finance.branches[0].icon },
      x: 1088,
      y: 462,
      width: 104,
      height: 56,
      compact: true,
    },
    financeProcurement: {
      id: "finance-procurement",
      role: { title: finance.branches[1].title, icon: finance.branches[1].icon },
      x: 1198,
      y: 462,
      width: 108,
      height: 56,
      compact: true,
    },
    financeProperty: {
      id: "finance-property",
      role: { title: finance.branches[2].title, icon: finance.branches[2].icon },
      x: 1314,
      y: 462,
      width: 98,
      height: 56,
      compact: true,
    },
    financeAr: {
      id: "finance-ar",
      role: getLinearChildren(finance.branches[0])[0],
      x: 1108,
      y: 540,
      width: 64,
      height: 48,
      compact: true,
    },
    financeJuniorAccounts: {
      id: "finance-junior-accounts",
      role: getLinearChildren(finance.branches[0])[1],
      x: 1092,
      y: 612,
      width: 96,
      height: 50,
      compact: true,
    },
    financeCashier: {
      id: "finance-cashier",
      role: getLinearChildren(finance.branches[2])[0],
      x: 1333,
      y: 540,
      width: 60,
      height: 48,
      compact: true,
    },
    hrOfficer: {
      id: "hr-officer",
      role: { title: hr.branches[0].title, icon: hr.branches[0].icon },
      x: 1422,
      y: 462,
      width: 64,
      height: 56,
      compact: true,
    },
    generalServiceOfficer: {
      id: "general-service-officer",
      role: { title: hr.branches[1].title, icon: hr.branches[1].icon },
      x: 1492,
      y: 462,
      width: 98,
      height: 56,
      compact: true,
    },
    hrDrivers: {
      id: "hr-drivers",
      role: hr.branches[1].children?.[0] ?? { title: "Drivers" },
      x: 1520,
      y: 532,
      width: 58,
      height: 46,
      compact: true,
    },
    hrJanitors: {
      id: "hr-janitors",
      role: hr.branches[1].children?.[1] ?? { title: "Janitors" },
      x: 1520,
      y: 604,
      width: 58,
      height: 46,
      compact: true,
    },
    hrGuards: {
      id: "hr-guards",
      role: hr.branches[1].children?.[2] ?? { title: "Guards" },
      x: 1520,
      y: 676,
      width: 58,
      height: 46,
      compact: true,
    },
  };

  const effectiveScale = isPrinting ? 0.94 : boardScale;

  return (
    <section className="afc-print-root relative overflow-hidden rounded-[1rem] border border-[#0f3f95]/10 bg-[#f8f9fc] px-1 py-3 shadow-none sm:px-2 lg:px-4 print:overflow-visible print:rounded-none print:border-0 print:bg-white print:px-0 print:py-0">
      <style jsx global>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 4mm;
          }
          html,
          body {
            background: #fff !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .afc-print-root {
            break-inside: avoid;
            page-break-inside: avoid;
            margin: 0 auto !important;
            width: 100% !important;
            max-width: none !important;
          }
        }
      `}</style>
      <div className="relative">
      <div className="absolute -left-28 -top-28 h-56 w-56 rounded-full border-[42px] border-[#0f3f95]/12" />
      <div className="absolute -bottom-32 -right-28 h-64 w-64 rounded-full border-[48px] border-[#0f3f95]/18" />
      <div className="absolute -bottom-24 -right-20 h-48 w-48 rounded-full border-[36px] border-[#0f3f95]/20" />
      <DotCorner className="right-4 top-3" />
      <DotCorner className="bottom-3 left-4" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.08]">
        <Image
          src="/afs-logo.png"
          alt=""
          width={620}
          height={288}
          aria-hidden="true"
          className="h-auto w-[62%] max-w-[620px]"
        />
      </div>

      <div className="relative">
        <div className="grid gap-2 lg:grid-cols-[250px_minmax(0,1fr)_170px] lg:items-start print:grid-cols-[207px_minmax(0,1fr)_72px] print:items-start">
          <div className="ml-0 mt-0 justify-self-start self-start">
            <LogoCard />
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-black uppercase leading-[1.05] text-[#0f3f95] sm:text-[3.3rem]">
              AFS Automotive Fleet Services
              <br />
              International PLC
            </h1>

            <div className="mt-1 flex items-center justify-center gap-4 text-[#0f3f95]">
              <span className="relative h-px w-28 bg-[#1b4ea3]/45 after:absolute after:-right-1 after:-top-1 after:h-2 after:w-2 after:rounded-full after:bg-[#1b4ea3]" />
              <p className="text-lg font-bold uppercase tracking-[0.32em] sm:text-[1.75rem]">
                {chart.heading}
              </p>
              <span className="relative h-px w-28 bg-[#1b4ea3]/45 before:absolute before:-left-1 before:-top-1 before:h-2 before:w-2 before:rounded-full before:bg-[#1b4ea3]" />
            </div>
          </div>

          <div className="justify-self-start rounded-[3px] bg-[#0f3f95] px-3 py-1.5 text-xs font-semibold text-white shadow-none lg:justify-self-end print:justify-self-end">
            {chart.updatedLabel}
          </div>
        </div>

        <div ref={boardWrapperRef} className="mt-0 overflow-hidden pb-0">
          <div
            className="mx-auto"
            style={{
              width: BOARD_WIDTH * effectiveScale,
              height: BOARD_HEIGHT * effectiveScale,
              maxWidth: BOARD_WIDTH,
            }}
          >
            <div
              className="relative origin-top-left"
              style={{
                width: BOARD_WIDTH,
                height: BOARD_HEIGHT,
                transform: `scale(${effectiveScale})`,
              }}
            >
              <DiagramLines nodes={nodes} />

              {Object.values(nodes).map((node) => (
                <NodeBox key={node.id} {...node} />
              ))}

              {technical.sideNote ? (
                <ToolsRoomBadge role={technical.sideNote} x={656} y={368} />
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-0 flex items-center justify-center gap-4 text-[#0f3f95]">
          <span className="h-px w-16 bg-[#1b4ea3]/45" />
          <p className="text-base font-semibold italic tracking-[0.04em]">
            {chart.tagline}
          </p>
          <span className="h-px w-16 bg-[#1b4ea3]/45" />
        </div>
        <p className="mt-0.5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#0f3f95]/80">
          Since 1999
        </p>
      </div>
      </div>
    </section>
  );
}
