import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  BsArrowRight,
  BsCaretRight,
  BsChevronDown,
  BsChevronRight,
  BsCodeSlash,
  BsCodeSquare,
  BsDatabase,
  BsDatabaseDown,
  BsFilesAlt,
  BsFilter,
  BsSignIntersection,
  BsSignIntersectionY,
  BsSignpostSplit,
  BsSortDown,
} from "react-icons/bs";
import { MdOutput, MdPivotTableChart, MdTableChart } from "react-icons/md";

import { TbMathIntegralX } from "react-icons/tb";

type Props = {
  text: string;
};

export default function ToolsManagement({ text }: Props) {
  const [currentTab, setCurrentTab] = useState(0);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    let copyCategories = [
      {
        name: "Datasets",
        tools: [
          {
            name: "model",
            description: "Data model",
            component: () => (
              <BsDatabaseDown size={28} className="font-[PoppinsBold]" />
            ),
          },
          {
            name: "output_node",
            description: "Output",
            component: () => (
              <MdOutput size={28} className="font-[PoppinsBold]" />
            ),
          },
        ],
      },
      {
        name: "Data Manipulation",
        tools: [
          {
            name: "local_runner",
            description: "Local Sql",
            component: () => (
              <BsCodeSquare size={28} className="font-[PoppinsBold]" />
            ),
          },

          {
            name: "local_multi_runner",
            description: "Local multiple table",
            component: () => (
              <BsCodeSquare size={28} className="font-[PoppinsBold]" />
            ),
          },
          {
            name: "transposition",
            description: "Transposition",
            component: () => (
              <MdPivotTableChart size={28} className="font-[PoppinsBold]" />
            ),
          },
          {
            name: "join",
            description: "Jointure",
            component: () => (
              <BsSignIntersectionY size={28} className="font-[PoppinsBold]" />
            ),
          },
          {
            name: "sort",
            description: "Trie",
            component: () => (
              <BsSortDown size={28} className="font-[PoppinsBold]" />
            ),
          },
          {
            name: "duplicate",
            description: "duplication",
            component: () => (
              <BsFilesAlt size={28} className="font-[PoppinsBold]" />
            ),
          },
          {
            name: "filter",
            description: "filtre",
            component: () => (
              <BsFilter size={28} className="font-[PoppinsBold]" />
            ),
          },
          {
            name: "selection",
            description: "Selection",
            component: () => (
              <BsSignpostSplit size={28} className="font-[PoppinsBold]" />
            ),
          },
          {
            name: "formula",
            description: "Formule",
            component: () => (
              <TbMathIntegralX size={28} className="font-[PoppinsBold]" />
            ),
          },
        ],
      },
      {
        name: "Visualisation",
        tools: [
          {
            name: "pivot",
            description: "Pivot Table",
            component: () => (
              <MdTableChart size={28} className="font-[PoppinsBold]" />
            ),
          },
        ],
      },
      {
        name: "Prediction & classification",
        tools: [],
      },
      {
        name: "Indicateurs",
        type: "process",
        tools: [
          {
            name: "arpu",
            description: "",
            component: () => (
              <span className="text-xl font-[PoppinsBold]">A.R.P.U</span>
            ),
          },
          {
            name: "mou",
            description: "",
            component: () => (
              <span className="text-xl font-[PoppinsBold]">M.O.U</span>
            ),
          },
          {
            name: "arpm",
            description: "",
            component: () => (
              <span className="text-xl font-[PoppinsBold]">A.R.P.M</span>
            ),
          },
          {
            name: "mbou",
            description: "",
            component: () => (
              <span className="text-xl font-[PoppinsBold]">M.B.O.U</span>
            ),
          },
        ],
      },
    ];
    if (text == "") {
      setCategories(copyCategories);
    } else {
      copyCategories = copyCategories
        .map((category: any) => {
          let tools = category.tools.slice();
          tools = tools.filter((tool: any) =>
            tool.name.toLowerCase().includes(text)
          );

          category.tools = tools.slice();
          return category;
        })
        .filter((category: any) => category.tools.length != 0);
      setCategories(copyCategories);
    }
  }, [text]);

  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <>
      <div className="w-full h-[300px] overflow-hidden overflow-y-scroll no-scrollBar shadow-md bg-white mt-3 rounded-lg border-t border-l">
        {categories.map((category: any, index: number) => (
          <div className="w-full" key={index}>
            <p
              onClick={(e) => setCurrentTab(index)}
              className="text-md p-3 px-4 m-2 rounded-xl cursor-pointer hover:bg-slate-800 bg-neutral text-white select-none border-b flex flex-row items-center justify-between"
            >
              <span>{category.name}</span>
              {index != currentTab && <BsChevronRight />}
              {index == currentTab && <BsChevronDown />}
            </p>
            {index == currentTab && (
              <motion.div
                initial={{ height: "0" }}
                animate={{ height: "100%" }}
                exit={{ height: "0" }}
                transition={{ ease: "easeInOut", duration: 0.3 }}
              >
                <div className={`grid grid-cols-3 gap-8 select-none p-3`}>
                  {category.tools.map((tool: any) => (
                    <div
                      draggable
                      onDragStart={(event) => onDragStart(event, tool.name)}
                      key={tool.name}
                      className="p-6 bg-[#cccccc60] cursor-move items-center rounded-lg flex flex-col space-y-2 justify-center"
                    >
                      <tool.component />
                      {tool.description != "" && (
                        <h5 className="text-xs">{tool.description}</h5>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
