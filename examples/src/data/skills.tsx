
import { Activity, Brain, Code, Database, LineChart, Layers, Radio, Network, Wrench, Cpu, Zap, Bot, Terminal, Beaker, CircuitBoard } from 'lucide-react';

export type Skill = {
  name: string;
  icon: React.ElementType;
  level: string;
  category: "ai" | "web" | "electrical";
  color: "amber" | "blue" | "green" | "purple" | "red";
};

export const skills: Skill[] = [
  // AI & Machine Learning Skills
  {
    name: "机器学习",
    icon: Brain,
    level: "专家",
    category: "ai",
    color: "purple"
  },
  {
    name: "深度学习",
    icon: Network,
    level: "专家",
    category: "ai",
    color: "blue"
  },
  {
    name: "计算机视觉",
    icon: Activity,
    level: "高级",
    category: "ai",
    color: "amber"
  },
  {
    name: "自然语言处理",
    icon: Terminal,
    level: "高级",
    category: "ai",
    color: "green"
  },
  {
    name: "TensorFlow",
    icon: Database,
    level: "专家",
    category: "ai",
    color: "red"
  },
  {
    name: "PyTorch",
    icon: Beaker,
    level: "高级",
    category: "ai",
    color: "amber"
  },
  
  // Web Development Skills
  {
    name: "React",
    icon: Code,
    level: "专家",
    category: "web",
    color: "blue"
  },
  {
    name: "JavaScript",
    icon: Layers,
    level: "专家",
    category: "web",
    color: "amber"
  },
  {
    name: "Node.js",
    icon: Terminal,
    level: "高级",
    category: "web",
    color: "green"
  },
  {
    name: "TypeScript",
    icon: Code,
    level: "高级",
    category: "web",
    color: "blue"
  },
  {
    name: "GraphQL",
    icon: Database,
    level: "中级",
    category: "web",
    color: "purple"
  },
  {
    name: "Tailwind CSS",
    icon: Layers,
    level: "高级",
    category: "web",
    color: "blue"
  },
  
  // Electrical Engineering Skills
  {
    name: "PCB设计",
    icon: CircuitBoard,
    level: "专家",
    category: "electrical",
    color: "green"
  },
  {
    name: "微控制器",
    icon: Cpu,
    level: "专家",
    category: "electrical",
    color: "blue"
  },
  {
    name: "电路设计",
    icon: Zap,
    level: "高级",
    category: "electrical",
    color: "amber"
  },
  {
    name: "信号处理",
    icon: LineChart,
    level: "高级",
    category: "electrical",
    color: "purple"
  },
  {
    name: "嵌入式系统",
    icon: Bot,
    level: "专家",
    category: "electrical",
    color: "red"
  },
  {
    name: "电力电子",
    icon: Wrench,
    level: "中级",
    category: "electrical",
    color: "amber"
  }
];
