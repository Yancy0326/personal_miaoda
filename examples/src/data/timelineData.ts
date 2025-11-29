
import { Briefcase, GraduationCap } from "lucide-react";

export interface TimelineItem {
  id: number;
  year: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
  iconType: "briefcase" | "graduation-cap"; // Changed from icon: React.ReactNode
  type: "work" | "education";
  color: string;
}

// Career timeline data
export const careerData: TimelineItem[] = [
  {
    id: 1,
    year: "2023年 - 至今",
    role: "高级AI研究工程师",
    company: "未来科技实验室",
    description: "领导下一代AI应用的先进神经网络和机器学习算法研究。专业从事自然语言处理和计算机视觉集成。",
    skills: ["机器学习", "神经网络", "计算机视觉", "研究领导"],
    iconType: "briefcase", // Changed from JSX to string identifier
    type: "work",
    color: "from-blue-900/30 to-cyan-900/10",
  },
  {
    id: 2,
    year: "2021年 - 2023年",
    role: "AI开发工程师 & 电气工程师",
    company: "创新系统公司",
    description: "开发结合电气工程专业知识与AI能力的集成解决方案。为工业应用创建了具有嵌入式机器学习的智能系统。",
    skills: ["嵌入式系统", "AI集成", "电路设计", "物联网"],
    iconType: "briefcase",
    type: "work",
    color: "from-purple-900/30 to-indigo-900/10",
  },
  {
    id: 3,
    year: "2020年",
    role: "高级认证",
    company: "AI研究院",
    description: "获得深度学习和神经网络架构专业认证，专注于现实场景中的实际应用。",
    skills: ["深度学习", "神经网络", "TensorFlow", "PyTorch"],
    iconType: "graduation-cap",
    type: "education",
    color: "from-amber-900/30 to-yellow-900/10",
  },
  {
    id: 4,
    year: "2018年 - 2021年",
    role: "电气系统工程师",
    company: "动力科技解决方案",
    description: "为商业和工业应用设计和实施电气系统。领导初级工程师团队创建创新的电源管理解决方案。",
    skills: ["电气设计", "项目管理", "团队领导", "电力系统"],
    iconType: "briefcase",
    type: "work",
    color: "from-green-900/30 to-emerald-900/10",
  },
  {
    id: 5,
    year: "2014年 - 2018年",
    role: "电气工程与计算机科学学士",
    company: "科技大学",
    description: "双学位课程，专注于电气工程基础和高级计算机科学概念。以优异成绩毕业。",
    skills: ["电气工程", "计算机科学", "算法设计", "电路理论"],
    iconType: "graduation-cap",
    type: "education",
    color: "from-orange-900/30 to-red-900/10",
  }
];
