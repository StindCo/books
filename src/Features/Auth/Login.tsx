import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCurrentTheme } from "../../shared/reducers/theme";
import loginImage from "../../assets/images/loginImage.png";
import bgLogin from "../../assets/images/ispt.png";
import FadeIn from "react-fade-in/lib/FadeIn";
import Loader from "../../shared/components/Loader/Loader";
import Logo from "../../shared/components/Logo/Logo";
import { useEffect, useState } from "react";
import { LoginService } from "./LoginService";
import Toast from "../../shared/components/Toast/Toast";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../shared/reducers/login";
import { BsChevronDoubleRight } from "react-icons/bs";

type Props = {};

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");
  const [view, setView] = useState("login");
  const [errorMessage, setErrorMessage] = useState("");
  const [IsErrorMessageVisible, setIsErrorMessageVisible] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const validateUsername = () => {
    setIsUsernameValid(username != "");
  };

  const validatePassword = () => {
    setIsPasswordValid(password != "");
  };

  let currentTheme = useSelector(getCurrentTheme);

  const onSubmit = (e: any) => {
    validateUsername();
    validatePassword();

    if (isPasswordValid && isUsernameValid) {
      navigate("/home");
    }

    e.preventDefault();
  };

  const toggleMessageError = (text: any) => {
    setErrorMessage(text);
    setIsErrorMessageVisible(true);
    setTimeout(() => {
      setIsErrorMessageVisible(false);
    }, 5000);
  };

  return (
    <>
      {IsErrorMessageVisible && <Toast type="error" message={errorMessage} />}

      <FadeIn className="overflow-hidden">
        <div
          className=" h-screen overflow-hidden overlflow-y-scroll"
        // style={{
        //   backgroundImage: `url(${bgLogin})`,
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        // }}
        >
          {/* <Logo type="arptc" propStyle="mb-16" /> */}

          <div className="w-full h-full flex flex-row justify-between items-center">
            {view == "login" && (
              <div className="w-2/4 pb-8 flex items-center justify-center">
                <div className="w-4/5 rounded-2xl">
                  <div className="p-5 space-y-2">
                    <h2 className="text-xl">Salut ! 👋</h2>
                    <h4>L'univers de la lecture est à votre portée.</h4>
                  </div>
                  <div className="px-5">
                    <form
                      method="post"
                      onSubmit={onSubmit}
                      className="space-y-5"
                    >
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Identifiant</span>
                        </label>
                        <input
                          type="text"
                          placeholder="email"
                          onChange={(e) => setUsername(e.target.value)}
                          onBlur={() => validateUsername()}
                          className={
                            isUsernameValid
                              ? "input input-bordered"
                              : "input input-bordered input-error"
                          }
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input
                          type="password"
                          placeholder="password"
                          onChange={(e) => setPassword(e.target.value)}
                          onBlur={() => validatePassword()}
                          className={
                            isPasswordValid
                              ? "input input-bordered"
                              : "input input-bordered input-error"
                          }
                        />
                        <label className="text-right">
                          <a
                            href="#"
                            className="label-text-alt link  link-hover"
                          >
                            Mot de passe oublié ?
                          </a>
                        </label>
                      </div>
                      <div className="form-control mt-8">
                        <button
                          className="py-3 hover:bg-[#201306] rounded-md  bg-[#1b1610] text-lg text-white"
                          type="submit"
                        >
                          Se connecter
                        </button>
                      </div>
                      {/* <hr className="w-1/6 mx-auto border-b border-[#030b1d85]" /> */}
                      <br />
                      <div className="w-full flex  items-center justify-center space-x-5">
                        <p>Vous n'avez pas de compte ?</p>
                        <a
                          onClick={() => setView("register")}
                          className="btn rounded-md btn-primary   text-white"
                        >
                          Créer un compte
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {view == "register" && (
              <div className="h-full pt-4 shadow-xl mx-auto w-2/4 pb-8 flex items-center justify-center">
                <div className="w-4/5 rounded-2xl">
                  <div className="p-5 space-y-2">
                    <h2 className="text-xl">Bienvenue ! 👋</h2>
                    <h4>
                      Créez un compte et ouvrez-vous au monde de la lecture !!!{" "}
                    </h4>
                  </div>
                  <div className="px-5">
                    <form
                      method="post"
                      onSubmit={onSubmit}
                      className="space-y-3"
                    >
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Nom complet</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Nom Complet"
                          onChange={(e) => setUsername(e.target.value)}
                          className={"input input-bordered"}
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Identifiant</span>
                        </label>
                        <input
                          type="text"
                          placeholder="email"
                          onChange={(e) => setUsername(e.target.value)}
                          // onBlur={() => validateUsername()}
                          className={"input input-bordered"}
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input
                          type="password"
                          placeholder="password"
                          onChange={(e) => setPassword(e.target.value)}
                          // onBlur={() => validatePassword()}
                          className={"input input-bordered"}
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">
                            Confirmation du mot de passe
                          </span>
                        </label>
                        <input
                          type="password"
                          placeholder="Confirmation du mot de passe"
                          onChange={(e) => setPassword(e.target.value)}
                          className={"input input-bordered"}
                        />
                      </div>

                      <div className="form-control">
                        <button
                          className="py-3 mt-3 hover:bg-[#201306] rounded-md  bg-[#1b1610] text-lg text-white"
                          type="submit"
                        >
                          Créer un compte
                        </button>
                      </div>
                      {/* <hr className="w-1/6 mx-auto border-b border-[#030b1d85]" /> */}
                      <br />
                      <div className="w-full flex  items-center justify-center space-x-5">
                        <p>Déjà enregistré ?</p>
                        <a
                          onClick={() => setView("login")}
                          className="btn rounded-md btn-primary   text-white"
                        >
                          Connectez-vous
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
            {view == "login" && (
              <div className=" rounded-full  p-4">
                <BsChevronDoubleRight size={35} className="" />
              </div>
            )}
            <div className="w-2/4 rounded-l-[10px] h-full flex flex-col items-center justify-around py-10  ">
              {/* <div className="w-full flex flex-col items-center">
                <img className="w-[500px]" src={loginImage} />
              </div> */}
              <div className="text-right ml-10 text-lg flex justify-center items-start ">
                <img src={bgLogin} className="w-40" />
                <div className="text-left text-4xl ">
                  <span className="font-[PoppinsBold] text-7xl">
                    {" "}
                    BIBLIOTHÈQUE{" "}
                  </span>{" "}
                  <br /> universitaire de l'ISPT
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
