import { BsArrowRight, BsStar } from "react-icons/bs";

type Props = {
  propStyle: any;
  type: string;
};

export default function DataTool() {
  return (
    <>
      <div className=" w-full">
        <div className="flex flex-col bg-[#fafafa] px-6 rounded-lg">
          <p className="flex py-5 font-bold text-xl text-gray-800">
            Categories
          </p>
          <div className="flex overflow-x-scroll pb-10 no-scrollBar">
            <div className="flex flex-nowrap">
              <div className="inline-block px-3">
                <div className="w-48 h-48 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg shadow-md bg-gradient-to-t bg-gradient-from-r from-slate-900  to-pink-900 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <h1 className="text-white font-[PoppinsBold] text-md p-8">
                    Section Informatique
                  </h1>
                </div>
              </div>

              <div className="inline-block px-3">
                <div className="w-48 h-48 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg shadow-md bg-gradient-to-t bg-gradient-from-r from-cyan-900  to-violet-500 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <h1 className="text-white font-[PoppinsBold] text-md p-8">
                    Section électricité
                  </h1>
                </div>
              </div>
              <div className="inline-block px-3">
                <div className="w-48 h-48 cursor-pointer flex flex-col justify-end items-end text-right  max-w-xs overflow-hidden rounded-lg shadow-md bg-gradient-to-t bg-gradient-from-r from-yellow-900  to-orange-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <h1 className="text-white font-[PoppinsBold] text-md p-8">
                    Section mécaniques
                  </h1>
                </div>
              </div>

              <div className="inline-block px-3">
                <div className="w-48 h-48 cursor-pointer flex flex-col justify-end items-end text-right  max-w-xs overflow-hidden rounded-lg shadow-md bg-gradient-to-t bg-gradient-from-r from-cyan-900  to-slate-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <h1 className="text-white font-[PoppinsBold] text-md p-8">
                    Révues Scientifiques
                  </h1>
                </div>
              </div>

              <div className="inline-block px-3">
                <div className="w-48 h-48 cursor-pointer flex flex-col justify-end items-end text-right  max-w-xs overflow-hidden rounded-lg shadow-md bg-gradient-to-t bg-gradient-from-r from-violet-900  to-red-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <h1 className="text-white font-[PoppinsBold] text-md p-8">
                    Entreprenariat
                  </h1>
                </div>
              </div>

              <div className="inline-block px-3">
                <div className="w-48 h-48 cursor-pointer flex flex-col justify-end items-end text-right  max-w-xs overflow-hidden rounded-lg shadow-md bg-gradient-to-t bg-gradient-from-r from-red-900  to-orange-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <h1 className="text-white font-[PoppinsBold] text-md p-8">
                    Mémoires étudiants
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col  px-6 rounded-lg mt-8 h-full">
          <p className="flex py-5 font-bold text-xl text-gray-800 items-center justify-between">
            <span>Populaire en ce moment</span>{" "}
            <div className="text-sm items-center flex flex-row space-x-3">
              {" "}
              <span className="underline"> Tous les livres </span>{" "}
              <BsArrowRight size={18} />{" "}
            </div>
          </p>
          <div className="w-full px-4 pb-16">
            <div className="flex flex-col justify-center w-full">
              <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl p-3 mx-auto border border-white bg-white">
                <div className="w-2/4 h-full bg-white grid place-items-center">
                  <img
                    src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="tailwind logo"
                    className="rounded-xl"
                  />
                </div>
                <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                  <h3 className="font-black uppercase font-[PoppinsBold]  text-gray-800 text-2xl">
                    L'histoire des sciences appliquées en RDC
                  </h3>
                  <br />
                  <p className=" text-gray-500 text-base">
                    The best kept secret of The Bahamas is the country’s sheer
                    size and diversity. With 16 major islands, The Bahamas is an
                    unmatched destination The best kept secret of The Bahamas is
                    the country’s sheer size and diversity. With 16 major
                    islands, The Bahamas is an unmatched destination The best
                    kept secret of The Bahamas is the country’s sheer size and
                    diversity. With 16 major islands, The Bahamas is an
                    unmatched destination
                    <br />
                    The best kept secret of The Bahamas is the country’s sheer
                    size and diversity. With 16 major islands, The Bahamas is an
                    unmatched destination
                  </p>

                  <br />
                  <br />
                  <br />

                  <div className="flex justify-between item-center">
                    <p className="text-gray-500 font-medium hidden md:block">
                      categoriesName
                    </p>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <p className="text-gray-600 font-bold text-sm ml-2">
                        15
                        <span className="text-gray-500 font-normal ml-2">
                          Téléchargements
                        </span>
                      </p>
                    </div>
                    {/* <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-pink-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div> */}
                    <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                      le plus populaire
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-10 no-scrollBar">
          <p className="flex py-2 font-bold text-xl text-gray-800">
            Tous les livres
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
    </>
  );
}
