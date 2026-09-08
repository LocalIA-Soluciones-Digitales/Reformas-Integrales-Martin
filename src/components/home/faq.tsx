import { FAQ_ITEMS } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/json-ld";
import { getFaqSchema } from "@/lib/seo/schema";

export function Faq() {
  return (
    <section className="py-28">
      <JsonLd data={getFaqSchema(FAQ_ITEMS)} />
      <div className="container-premium grid gap-14 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <Badge variant="light">Preguntas frecuentes</Badge>
          <h2 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight text-carbon sm:text-5xl">
            Resolvemos tus dudas antes de empezar
          </h2>
          <p className="mt-4 text-stone">
            Si no encuentras la respuesta que buscas, escríbenos por WhatsApp
            o llámanos directamente.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
