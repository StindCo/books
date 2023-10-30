import "reactflow/dist/style.css";
import "./overview.css";
import ModelNode from "./Nodes/Model";
import Runner from "./Nodes/Runner";
import LocalRunner from "./Nodes/LocalRunner";

import PivotNode from "./Nodes/pivot";
import ArpuNode from "./Nodes/ArpuNode";
import LocalMultiRunnerNode from "./Nodes/LocalMultipleRunner";
import TranspositionNode from "./Nodes/Transposition";
import OutputNode from "./Nodes/Output";

import MouNode from "./Nodes/MouNode";
import MbouNode from "./Nodes/MbouNode";
import ArpmNode from "./Nodes/ArpmNode";
import { BsStar } from "react-icons/bs";

export default function ProcessLayout() {
  return (
    <div className="w-full h-full">
      <p className="flex  font-bold text-xl text-gray-800">
        Récommendé pour vous
      </p>
      <div className="flex overflow-x-scroll pb-10 no-scrollBar">
        <div className="flex flex-nowrap">
          <div className="inline-block px-3 w-64">
            <div className="h-64 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2"></div>
          </div>
          <div className="inline-block px-3 w-64">
            <div className="h-64 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2"></div>
          </div>
          <div className="inline-block px-3 w-64">
            <div className="h-64 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2"></div>
          </div>
          <div className="inline-block px-3 w-64">
            <div className="h-64 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2"></div>
          </div>
          <div className="inline-block px-3 w-64">
            <div className="h-64 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2"></div>
          </div>
          <div className="inline-block px-3 w-64">
            <div className="h-64 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2"></div>
          </div>
          <div className="inline-block px-3 w-64">
            <div className="h-64 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2"></div>
          </div>
          <div className="inline-block px-3 w-64">
            <div className="h-64 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2"></div>
          </div>
          <div className="inline-block px-3 w-64">
            <div className="h-64 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2"></div>
          </div>
        </div>
      </div>
      <div className="pb-10 no-scrollBar">
        <p className="flex py-2 font-bold text-xl text-gray-800">
          Très populaires en ce moment
        </p>
        <div className="grid grid-cols-4 gap-8">
          <div className="inline-block px-3 w-72">
            <div className="h-72 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2">
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
            </div>
          </div>
          <div className="inline-block px-3 w-72">
            <div className="h-72 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2">
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
            </div>
          </div>
          <div className="inline-block px-3 w-72">
            <div className="h-72 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2">
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
            </div>
          </div>
          <div className="inline-block px-3 w-72">
            <div className="h-72 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2">
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
            </div>
          </div>
          <div className="inline-block px-3 w-72">
            <div className="h-72 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2">
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
            </div>
          </div>
          <div className="inline-block px-3 w-72">
            <div className="h-72 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg  duration-300 ease-in-out">
              <img
                className="rounded-lg"
                src={
                  "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              />
            </div>
            <h1 className="p-2 text-lg w-full uppercase font-[PoppinsBold]">
              Un titre pour ce livre que j'aime tant
            </h1>
            <div className="flex flex-row items-center space-x-2 mx-2">
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
              <BsStar color={"#ffad00"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
