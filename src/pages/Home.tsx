import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Sparkles, 
  Zap, 
  Target, 
  Lightbulb, 
  Mail, 
  Github, 
  Linkedin,
  MessageCircle,
  ExternalLink,
  Code,
  Palette,
  Users,
  Rocket,
  Heart,
  Star
} from "lucide-react";

export default function Home() {
  const [personalInfo] = useState({
    name: "张三",
    title: "AI产品设计师",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    tags: ["AI产品设计师", "交互专家", "创意技术爱好者"],
    bio: "专注于用AI技术创造更好的用户体验",
    currentRole: "高级产品设计师 @ 科技公司",
    fields: ["生成式AI", "用户体验", "交互设计", "产品创新"]
  });

  const [skills] = useState([
    { name: "AI产品设计", level: 95 },
    { name: "用户体验设计", level: 90 },
    { name: "交互原型", level: 88 },
    { name: "前端开发", level: 85 },
    { name: "数据分析", level: 80 }
  ]);

  const [values] = useState([
    "帮助企业构建AI驱动的产品体验",
    "提供从0到1的产品设计咨询",
    "分享AI产品设计方法论",
    "推动创新技术在产品中的应用"
  ]);

  const [projects] = useState([
    {
      name: "AI智能助手平台",
      description: "企业级AI对话系统，服务10万+用户",
      tags: ["AI", "对话系统", "React"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
    },
    {
      name: "创意设计工具",
      description: "基于AI的设计辅助工具，提升设计效率300%",
      tags: ["设计工具", "AI生成", "创意"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=250&fit=crop"
    },
    {
      name: "数据可视化平台",
      description: "企业数据分析与可视化解决方案",
      tags: ["数据分析", "可视化", "Dashboard"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    }
  ]);

  const [currentFocus] = useState({
    doing: "正在研究多模态AI在产品设计中的应用，探索AI如何更好地理解和服务用户需求",
    interests: ["AIGC产品设计", "多模态交互", "AI Agent应用"]
  });

  const [cooperation] = useState({
    services: ["AI产品咨询", "交互设计指导", "创意技术开发", "产品战略规划"],
    formats: ["远程协作", "线下交流", "项目合作", "技术顾问"]
  });

  const [contacts] = useState({
    email: "zhangsan@example.com",
    wechat: "zhangsan_ai",
    wechatQR: "https://api.qrserver.net/v1/create-qr-code/?size=200x200&data=zhangsan_ai",
    bilibili: "https://space.bilibili.com/",
    bilibiliQR: "https://api.qrserver.net/v1/create-qr-code/?size=200x200&data=https://space.bilibili.com/",
    xiaohongshu: "https://www.xiaohongshu.com/",
    xiaohongshuQR: "https://api.qrserver.net/v1/create-qr-code/?size=200x200&data=https://www.xiaohongshu.com/",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/"
  });

  const [motto] = useState({
    text: "用技术创造价值，用设计传递温度",
    signature: "✨ 让AI更懂人心"
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 xl:py-12 max-w-7xl">
        {/* 基础信息区 */}
        <div className="text-center mb-8 xl:mb-12 animate-fade-in">
          <Avatar className="w-20 h-20 xl:w-24 xl:h-24 mx-auto mb-4 xl:mb-6 ring-4 ring-primary/20">
            <AvatarImage src={personalInfo.avatar} alt={personalInfo.name} />
            <AvatarFallback>{personalInfo.name[0]}</AvatarFallback>
          </Avatar>
          
          <h1 className="text-4xl xl:text-6xl font-bold mb-3 xl:mb-4 gradient-text">
            {personalInfo.name}
          </h1>
          
          <div className="flex flex-wrap justify-center gap-2 mb-4 xl:mb-6">
            {personalInfo.tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs xl:text-sm px-3 py-1"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* 职业定位区 */}
        <Card className="mb-6 xl:mb-8 card-hover border-border/50 bg-card/50 backdrop-blur">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 mb-4">
              <Sparkles className="w-5 h-5 xl:w-6 xl:h-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <p className="text-base xl:text-lg font-semibold mb-2">{personalInfo.bio}</p>
                <p className="text-sm xl:text-base text-muted-foreground">{personalInfo.currentRole}</p>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex flex-wrap gap-2">
              {personalInfo.fields.map((field, index) => (
                <Badge key={index} variant="outline" className="text-xs xl:text-sm">
                  {field}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 主要内容区 - 两栏布局 */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8 mb-6 xl:mb-8">
          {/* 左侧栏 */}
          <div className="xl:col-span-1 space-y-6">
            {/* 能力与特长 */}
            <Card className="card-hover border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                  <h2 className="text-lg xl:text-xl font-bold">核心技能</h2>
                </div>
                
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 价值主张 */}
            <Card className="card-hover border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-primary" />
                  <h2 className="text-lg xl:text-xl font-bold">我能提供的价值</h2>
                </div>
                
                <ul className="space-y-3">
                  {values.map((value, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Star className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* 合作方式 */}
            <Card className="card-hover border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  <h2 className="text-lg xl:text-xl font-bold">合作方式</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold mb-2 text-muted-foreground">可合作内容</h3>
                    <div className="flex flex-wrap gap-2">
                      {cooperation.services.map((service, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold mb-2 text-muted-foreground">可接受形式</h3>
                    <div className="flex flex-wrap gap-2">
                      {cooperation.formats.map((format, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {format}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 右侧栏 */}
          <div className="xl:col-span-2 space-y-6">
            {/* 代表作品 */}
            <Card className="card-hover border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-6">
                  <Palette className="w-5 h-5 text-primary" />
                  <h2 className="text-lg xl:text-xl font-bold">代表作品</h2>
                </div>
                
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  {projects.map((project, index) => (
                    <Card key={index} className="overflow-hidden border-border/50 hover:border-primary/50 transition-all">
                      <div className="aspect-video overflow-hidden bg-muted">
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="pt-4">
                        <h3 className="font-semibold mb-2">{project.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 当前项目 */}
            <Card className="card-hover border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Rocket className="w-5 h-5 text-primary" />
                  <h2 className="text-lg xl:text-xl font-bold">当前专注</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <Code className="w-4 h-4 text-secondary" />
                      我正在做的事
                    </h3>
                    <p className="text-sm text-muted-foreground pl-6">{currentFocus.doing}</p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-secondary" />
                      我关注的方向
                    </h3>
                    <div className="flex flex-wrap gap-2 pl-6">
                      {currentFocus.interests.map((interest, index) => (
                        <Badge key={index} className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 联系方式与个性亮点 */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* 联系方式 */}
              <Card className="card-hover border-border/50 bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <h2 className="text-lg xl:text-xl font-bold">联系我</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {/* 邮箱 */}
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      asChild
                    >
                      <a href={`mailto:${contacts.email}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        {contacts.email}
                      </a>
                    </Button>
                    
                    {/* 微信 */}
                    <div className="p-3 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">微信</span>
                        <span className="text-xs text-muted-foreground">{contacts.wechat}</span>
                      </div>
                      <div className="flex justify-center">
                        <img src={contacts.wechatQR} alt="微信二维码" className="w-32 h-32" />
                      </div>
                    </div>
                    
                    {/* 社交媒体 */}
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={contacts.bilibili} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Bilibili
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={contacts.xiaohongshu} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          小红书
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={contacts.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={contacts.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 个性亮点 */}
              <Card className="card-hover border-border/50 bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="w-5 h-5 text-primary" />
                    <h2 className="text-lg xl:text-xl font-bold">个人信条</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="text-center py-8">
                      <p className="text-lg xl:text-xl font-semibold mb-4 leading-relaxed">
                        {motto.text}
                      </p>
                      <p className="text-2xl xl:text-3xl font-bold gradient-text">
                        {motto.signature}
                      </p>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">持续创新 · 用心设计</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* 页脚 */}
        <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border/50">
          <p>2025 个人展示网页</p>
        </div>
      </div>
    </div>
  );
}
