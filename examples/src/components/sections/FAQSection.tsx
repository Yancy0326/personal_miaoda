
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQs data
const faqItems = [
  {
    question: "您提供哪些服务？",
    answer: "我提供一系列AI和电气工程服务，包括系统设计、智能自动化解决方案、神经网络开发和电气系统集成。"
  },
  {
    question: "您的设计流程是怎样的？",
    answer: "我的设计流程通常包括以下步骤：需求收集、系统架构设计、原型制作、实施、测试和部署。在每个阶段，我都会保持开放的沟通，确保实现您的愿景。"
  },
  {
    question: "项目的典型时间线是什么？",
    answer: "项目时间线因范围和复杂性而异。一个简单的自动化项目可能需要2-3周，而一个综合的AI系统可能需要6-8周。在我们的初步咨询中，我会根据您的具体需求提供更准确的时间线。"
  },
  {
    question: "项目完成后您是否提供持续支持？",
    answer: "是的，我提供项目后支持包，确保您的系统随着需求的发展持续最佳运行。这可以包括定期维护、更新以及根据需要扩展功能。"
  },
  {
    question: "您如何处理设计修改？",
    answer: "我的项目报价包括最多三轮修改，以确保您完全满意。如需额外的修改轮次，可按小时费率安排。"
  }
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="min-h-screen w-full py-16 md:py-24 lg:py-32 px-4 md:px-8">
      <div className="max-w-3xl mx-auto relative">
        <h2 className="text-4xl md:text-6xl font-bold mb-10 md:mb-16 text-center text-gray-100 vintage-text">
          常见问题
        </h2>
        
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-gray-200/20 last:border-b-0"
              >
                <AccordionTrigger className="text-gray-100/80 hover:text-gray-100 text-left py-6 vintage-text">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300/80 pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-300/80 mb-6">
            还有问题？请随时直接联系我。
          </p>
          <a 
            href="mailto:xxxxx@163.com" 
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-900/20 hover:bg-blue-900/30 text-blue-200 border border-blue-400/30 rounded-full transition-all hover:scale-105"
          >
            联系我
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
