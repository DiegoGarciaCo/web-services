import { ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./core/Accordians";

export function AccordionVariant() {
  return (
    <Accordion
      className="flex w-full flex-col"
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      variants={{
        expanded: {
          opacity: 1,
          scale: 1,
        },
        collapsed: {
          opacity: 0,
          scale: 0.7,
        },
      }}
    >
      <AccordionItem
        value="getting-started"
        className="p-2 border-zinc-300 border-2"
      >
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-zinc-950 dark:text-zinc-50 text-2xl">
              How do I start?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            recusandae. Tempora commodi placeat explicabo asperiores veritatis.
            Rem nobis alias quas repellat possimus maxime neque laboriosam non
            animi laborum, provident officia?
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="animation-properties"
        className="p-2 border-zinc-200 border-2"
      >
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-zinc-950 dark:text-zinc-50 text-2xl">
              What are the requirements?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, enim
            nostrum, sed repellendus explicabo quod voluptatibus rem fugiat
            ipsum mollitia autem tempora? Aperiam ut ad ab natus officiis
            voluptate perferendis?.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="advanced-features"
        className="p-2 border-zinc-300 border-2"
      >
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-zinc-950 dark:text-zinc-50 text-2xl">
              Another Random Question Goes Here?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem et
            blanditiis, corporis facere in rerum ullam. A perspiciatis corrupti
            officia atque, adipisci aut exercitationem provident velit fugiat
            corporis architecto maxime..
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="community-support"
        className="p-2 border-zinc-200 border-2"
      >
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-zinc-950 dark:text-zinc-50 text-2xl">
              Another Random Question Goes Here?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
            veniam assumenda architecto quas excepturi doloremque in? Rerum
            sapiente est, commodi natus dolorum debitis libero assumenda odit
            illum iusto iste sequi!
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="random-question"
        className="p-2 border-zinc-200 border-2"
      >
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-zinc-950 dark:text-zinc-50 text-2xl">
              Another Random Question Goes Here?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
            veniam assumenda architecto quas excepturi doloremque in? Rerum
            sapiente est, commodi natus dolorum debitis libero assumenda odit
            illum iusto iste sequi!
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="random-value"
        className="p-2 border-zinc-200 border-2"
      >
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-zinc-950 dark:text-zinc-50 text-2xl">
              Another Random Question Goes Here?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
            veniam assumenda architecto quas excepturi doloremque in? Rerum
            sapiente est, commodi natus dolorum debitis libero assumenda odit
            illum iusto iste sequi!
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
