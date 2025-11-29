
import { 
  Code2, 
  Cpu, 
  ChefHat, 
  Music, 
  Zap, 
  Lightbulb,
  Rocket
} from 'lucide-react';

export interface BentoCardData {
  title: string;
  description: string;
  icon: typeof Code2;
  gradient: string;
  delay: number;
  sizeClasses: string;
}

export const bentoCardsData: BentoCardData[] = [
  {
    title: "人工智能与机器学习",
    description: "专注于开发智能系统和神经网络，不断探索人工智能在解决复杂现实问题方面能达到的边界。",
    icon: Cpu,
    gradient: "from-blue-900/30 to-cyan-900/10",
    delay: 0,
    sizeClasses: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    title: "电气工程",
    description: "以精确和创新的方式设计和优化电气系统。我喜欢与硬件组件合作，创造集成解决方案。",
    icon: Zap,
    gradient: "from-amber-900/30 to-yellow-900/10",
    delay: 1,
    sizeClasses: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    title: "创新思维",
    description: "始终寻求复杂问题的创造性解决方案。我相信跳出常规思维，挑战传统方法。",
    icon: Lightbulb,
    gradient: "from-yellow-900/30 to-amber-900/10",
    delay: 2,
    sizeClasses: "col-span-1 row-span-1"
  },
  {
    title: "编程开发",
    description: "从嵌入式系统到高级应用程序，我享受编程的创造过程，通过软件开发和算法优化将想法变为现实。",
    icon: Code2,
    gradient: "from-green-900/30 to-emerald-900/10",
    delay: 3,
    sizeClasses: "col-span-1 md:col-span-1 row-span-1 md:row-span-2"
  },
  {
    title: "烹饪艺术",
    description: "在设计系统之余，我探索烹饪科学。厨房中所需的精确性和创造力与我的工程工作有着惊人的相似之处。",
    icon: ChefHat,
    gradient: "from-orange-900/30 to-red-900/10",
    delay: 4,
    sizeClasses: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    title: "音乐欣赏",
    description: "对多样音乐类型的终生热爱帮助我保持创造性平衡。我在音乐模式和工程系统之间发现了相似之处。",
    icon: Music,
    gradient: "from-purple-900/30 to-indigo-900/10",
    delay: 5,
    sizeClasses: "col-span-1 row-span-1"
  },
  {
    title: "未来科技",
    description: "探索新兴技术并展望它们如何塑造我们的未来。我特别关注可持续技术解决方案及其现实应用。",
    icon: Rocket,
    gradient: "from-sky-900/30 to-blue-900/10",
    delay: 6,
    sizeClasses: "col-span-1 md:col-span-3 row-span-1"
  }
];
