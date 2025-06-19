import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "What is BYOK (Bring Your Own Key)?",
      answer:
        "BYOK means you use your own API keys from services like OpenAI, Anthropic, or Google. This gives you direct access to these services while maintaining complete control over your usage and costs.",
    },
    {
      question: "Are my API keys saved or stored anywhere?",
      answer:
        "No, absolutely not. Your API keys are stored only in your browser's local storage and are never sent to our servers. You have complete control and can clear them at any time.",
    },
    {
      question: "What API keys can I use?",
      answer:
        "We support various API providers including OpenAI, Anthropic Claude, Google AI, Stability AI, and more. Each app specifies which keys it requires.",
    },
    {
      question: "Is this really free?",
      answer:
        "Yes, our platform is completely free to use. You only pay for your own API usage directly to the providers (OpenAI, etc.). We don't charge any fees or markups.",
    },
    {
      question: "Are the apps open source?",
      answer:
        "Yes, all our apps are open source and available on GitHub. You can review the code, contribute, or even host your own version.",
    },
    {
      question: "How is this different from using the APIs directly?",
      answer:
        "We provide user-friendly interfaces for complex API interactions, handle the technical implementation, and offer features like conversation history, file uploads, and more - all while keeping your keys private.",
    },
  ]

  return (
    <section className="py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-muted-foreground">Everything you need to know about BringYourKey.com</p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
