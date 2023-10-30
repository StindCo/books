import { useEffect, useState } from "react";
import {
  BsChatLeftDots,
  BsDatabase,
  BsFiles,
  BsFolder,
  BsGear,
  BsHouse,
  BsPerson,
  BsPlayCircle,
  BsPuzzle,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/ispt.png";
import profil from "../../assets/images/profil.jpeg";
import Loader from "../../shared/components/Loader/Loader";
import { loadOperateurs } from "../../shared/reducers/operateurs";
import { loadSchema } from "../../shared/reducers/schema";
import { fetchOperateurs, fetchSchemas, verifyUser } from "./DashboardFetch";
import ParticlesBg from "particles-bg";
import { loginUser } from "../../shared/reducers/login";
import Editor from "@monaco-editor/react";
import { ProjectManager } from "../../shared/fetchers/Axios";
import { PatternsContext } from "./PatternsContext";
import { GiBookshelf, GiChart } from "react-icons/gi";
import { FcSynchronize } from "react-icons/fc";
import { GrUser } from "react-icons/gr";
import { TbUser } from "react-icons/tb";
import { AiOutlineLogout } from "react-icons/ai";
import RecherchePost from "./RecherchePost";

type Props = {
  message: any;
  type: string;
};

export default function Dashboard() {
  let navigate = useNavigate();
  let location = useLocation();
  let [patterns, setPatterns] = useState([]);
  let dispatch = useDispatch();
  const [view, setView] = useState("principal");
  const [isNotValided, setIsNotValided] = useState(false);

  useEffect(() => {
    // fetchSchemas().then((data) => dispatch(loadSchema({ schema: data })));
    // verifyUser()
    //   .then((response: any) => {
    //     if (response.data == "") navigate("/");
    //     if (response?.status == 200) {
    //       dispatch(loginUser({ user: response?.data }));
    //       localStorage.setItem("token", response?.headers?.get("x-jwt-token"));
    //     } else navigate("/");
    //   })
    //   .catch((err) => navigate("/"));
    // ProjectManager.get("/process").then(({ data }) => {
    //   setPatterns(data);
    // });
  }, []);

  return (
    <>
      {!isNotValided && (
        <div
          className={`h-screen w-screen overflow-hidden flex flex-row   ${
            location.pathname == "/dashboard/project" ? "" : "backdrop-blur-sm"
          } `}
        >
          <div className="w-1/6 h-full bg-white shadow-lg pb-3">
            <div className="w-full">
              <Link to="/home">
                <div className="text-right text-lg flex items-start space-x-1 p-5">
                  <img src={logo} className="w-14" />
                  <div className="text-left text-xs ">
                    <span className="font-[PoppinsBold] text-lg">
                      BIBLIOTHÈQUE
                    </span>
                    <br /> universitaire de l'ISPT
                  </div>
                </div>
              </Link>
              <div className="w-full flex flex-col  mt-6 space-y-5">
                <Link
                  to="/home"
                  data-tip="Page d'acceuil"
                  className={`  tooltip-right text-gray-400 ${
                    location.pathname == "/home"
                      ? "text-white rounded-l-[100px] bg-slate-800"
                      : "text-slate-800 hover:text-gray-600"
                  } w-full ml-[1%] text-md p-5 pl-8 space-x-5 flex justify-start items-center`}
                >
                  <BsHouse className="text-xl" /> <span>Accueil</span>
                </Link>

                <Link
                  to="/home/tendance"
                  data-tip="Page d'acceuil"
                  className={`tooltip-right  ${
                    location.pathname == "/home/tendance"
                      ? "text-white rounded-l-[100px] bg-slate-800"
                      : "text-slate-800 hover:text-gray-600"
                  } w-full ml-[1%]  text-md p-5 pl-8 space-x-5 flex justify-start items-center`}
                >
                  <GiChart className="text-xl" /> <span>Tendances</span>
                </Link>

                <Link
                  to="/home/biblio"
                  data-tip="Page d'acceuil"
                  className={`tooltip-right  ${
                    location.pathname == "/home/biblio"
                      ? "text-white rounded-l-[100px] bg-slate-800"
                      : "text-slate-800 hover:text-gray-600"
                  } w-full ml-[1%]  text-md p-5 pl-8 space-x-5 flex justify-start items-center`}
                >
                  <GiBookshelf className="text-xl" />{" "}
                  <span>Ma bibliothèque</span>
                </Link>
              </div>
            </div>
          </div>
          <PatternsContext.Provider value={patterns}>
            <div className="w-full h-full  p-4 px-8 overflow-hidden">
              <div className="w-full flex items-center justify-between">
                <input
                  onFocus={() => setView("search")}
                  placeholder="Que voulez-vous lire aujourd'hui ?"
                  className="w-2/4 rounded-[100px] input input-md input-bordered"
                />
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <span className="underline">Mon compte</span>
                    <div className="border p-1 rounded-full ">
                      <img
                        src={profil}
                        className="w-[40px] rounded-full h-[40px]"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to="/">
                        <AiOutlineLogout /> Se déconnecter
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="m-3 mt-6 pb-32 h-[90%] overflow-hidden overflow-y-scroll p-5 no-scrollBar ">
                {view != "search" && <Outlet />}
                {view == "search" && (
                  <>
                    <div className="w-full flex items-center justify-between">
                      <p className="text-lg">Recherche ...</p>
                      <p
                        onClick={() => setView("k")}
                        className="text-sm cursor-pointer text-red-600 underline"
                      >
                        Quitter la recherche
                      </p>
                    </div>

                    <RecherchePost text="" />
                  </>
                )}
              </div>
            </div>
          </PatternsContext.Provider>
        </div>
      )}

      {isNotValided && (
        <div className="w-full h-screen flex flex-col justify-center items-center space-y-10">
          <FcSynchronize size={160} className="animate-spin" />
          <p className="text-xl">Votre compte est en attente d'activation.</p>
          <div>Veillez patienter 😇 !!!</div>
        </div>
      )}
    </>
  );
}
