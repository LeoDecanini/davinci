import React from "react";
import Link from "next/link";
import { FaCircle } from "react-icons/fa6";
import { FaMapMarked } from "react-icons/fa";

const Nav = () => {
  return (
    <footer>
      <div className={"w-full bg-muted text-white"}>
        <div
          className={
            "md:grid md:grid-cols-2 xl:grid-cols-4 max-w-8xl gap-10 p-5 md:p-20"
          }
        >
          <div>
            <div className={"flex flex-col gap-3"}>
              <Link className={"text-2xl font-bold"} href={"/"}>
                Carreras
              </Link>
              <ul className={"pl-3"}>
                <li className={"flex items-center gap-3"}>
                  <FaCircle className={"text-secondary w-2"} /> Diseño
                  Multimedial
                </li>
                <li className={"flex items-center gap-3"}>
                  <FaCircle className={"text-secondary w-2"} /> Diseño Gráfico
                </li>
                <li className={"flex items-center gap-3"}>
                  <FaCircle className={"text-secondary w-2"} /> Diseño y
                  programacion Web
                </li>
                <li className={"flex items-center gap-3"}>
                  <FaCircle className={"text-secondary w-2"} /> Diseño de
                  videojuegos
                </li>
                <li className={"flex items-center gap-3"}>
                  <FaCircle className={"text-secondary w-2"} /> Cine de
                  animacion y postproduccion
                </li>
                <li className={"flex items-center gap-3"}>
                  <FaCircle className={"text-secondary w-2"} /> Analista de
                  sistema
                </li>
              </ul>
            </div>
            <div className={"flex flex-col pt-5 gap-3"}>
              <Link className={"text-2xl font-bold"} href={"/"}>
                Cursos para Chicos <br /> y Adolescentes
              </Link>
              <ul className={"pl-3"}>
                <li className={"flex items-center gap-3"}>
                  <FaCircle className={"text-secondary w-2"} /> Ver listado
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className={"flex flex-col md:pt-0 pt-5 gap-3"}>
              <Link className={"text-2xl font-bold"} href={"/"}>
                Institucional
              </Link>
              <ul className={"pl-3"}>
                <li className={"flex items-center gap-3"}>
                  <FaCircle className={"text-secondary w-2"} /> La escuela
                </li>
                <li className={"flex items-center gap-3"}>
                  <FaCircle className={"text-secondary w-2"} /> Instalaciones
                </li>
                <li className={"flex items-center gap-3"}>
                  <FaCircle className={"text-secondary w-2"} /> Inserción
                  laboral
                </li>
                <li className={"flex items-center gap-3"}>
                  <FaCircle className={"text-secondary w-2"} /> Empresas que
                  confían en nosotros
                </li>
                <li className={"flex items-center gap-3"}>
                  <FaCircle className={"text-secondary w-2"} /> Títulos y
                  Licenciaturas
                </li>
                <li className={"flex items-center gap-3"}>
                  <FaCircle className={"text-secondary w-2"} /> Beneficios
                </li>
                <li className={"flex items-center gap-3"}>
                  <FaCircle className={"text-secondary w-2"} /> Descarga de
                  Recursos
                </li>
              </ul>
            </div>
            <div className={"flex flex-col pt-5 gap-3"}>
              <Link className={"text-2xl font-bold"} href={"/"}>
                Admisión
              </Link>
              <ul className={"pl-3"}>
                <li className={"flex items-center gap-3"}>
                  <FaCircle className={"text-secondary w-2"} /> Futuros Alumnos
                </li>
                <li className={"flex items-center gap-3"}>
                  <FaCircle className={"text-secondary w-2"} /> Charlas de
                  Carreras
                </li>
              </ul>
            </div>
            <div className={"flex flex-col pt-5 gap-3"}>
              <Link className={"text-2xl font-bold"} href={"/"}>
                Novedades
              </Link>
              <ul className={"pl-3"}>
                <li className={"flex items-center gap-3"}>
                  <FaCircle className={"text-secondary w-2"} /> Noticias
                </li>
                <li className={"flex items-center gap-3"}>
                  <FaCircle className={"text-secondary w-2"} /> DV.TV Videos
                </li>
              </ul>
            </div>
          </div>
          <div className={"col-span-2"}>
            <div className={"flex md:pt-0 pt-5 flex-col gap-3"}>
              <Link className={"text-2xl font-bold"} href={"/"}>
                Cursos para Adultos
              </Link>
              <div className={"flex flex-col md:flex-row justify-between xl:justify-normal md:gap-20"}>
                <ul className={"pl-3"}>
                  <li className={"flex items-center gap-3"}>
                    <FaCircle className={"text-secondary w-2"} /> Marketing
                    Digital
                  </li>
                  <li className={"flex items-center gap-3"}>
                    <FaCircle className={"text-secondary w-2"} /> Desarrollo de
                    Sitios Web
                  </li>
                  <li className={"flex items-center gap-3"}>
                    <FaCircle className={"text-secondary w-2"} /> Diseño Gráfico
                    Digital
                  </li>
                  <li className={"flex items-center gap-3"}>
                    <FaCircle className={"text-secondary w-2"} /> Animación de
                    Personajes 3D
                  </li>
                  <li className={"flex items-center gap-3"}>
                    <FaCircle className={"text-secondary w-2"} /> Modelado 3D y
                    Render
                  </li>
                  <li className={"flex items-center gap-3"}>
                    <FaCircle className={"text-secondary w-2"} /> Escultura
                    Digital con ZBrush
                  </li>
                  <li className={"flex items-center gap-3"}>
                    <FaCircle className={"text-secondary w-2"} /> Animación 3D
                  </li>
                  <li className={"flex items-center gap-3"}>
                    <FaCircle className={"text-secondary w-2"} /> Comics:
                    Realización Integral
                  </li>
                </ul>
                <ul className={"pl-3"}>
                  <li className={"flex items-center gap-3"}>
                    <FaCircle className={"text-secondary w-2"} /> Ilustración
                    Artística/Digital
                  </li>
                  <li className={"flex items-center gap-3"}>
                    <FaCircle className={"text-secondary w-2"} /> Anatomía
                    Humana y Morfología Animal
                  </li>
                  <li className={"flex items-center gap-3"}>
                    <FaCircle className={"text-secondary w-2"} /> Arte para
                    Videojuegos
                  </li>
                  <li className={"flex items-center gap-3"}>
                    <FaCircle className={"text-secondary w-2"} /> Realización
                    Integral de Videojuegos
                  </li>
                  <li className={"flex items-center gap-3"}>
                    <FaCircle className={"text-secondary w-2"} /> Motion
                    Graphics
                  </li>
                  <li className={"flex items-center gap-3"}>
                    <FaCircle className={"text-secondary w-2"} /> Fotografía
                  </li>
                  <li className={"flex items-center gap-3"}>
                    <FaCircle className={"text-secondary w-2"} /> Tecnología
                    Educativa para Docentes
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={"flex flex-col md:flex-row justify-between xl:justify-normal pt-5 gap-10"}
            >
              <div>
                <div className={"w-full"}>
                  <h5 className={"text-2xl font-bold"}>¿Donde estamos?</h5>
                  <div className={"flex pt-5 gap-5 items-center"}>
                    <FaMapMarked className={"text-3xl text-primary"} />
                    <p>
                      Av. Corrientes 2037/49 / C.A.B.A. <br />
                      Argentina - C1045AAC
                    </p>
                  </div>
                </div>
                <div className={"pt-5"}>
                  <h5 className={"text-2xl font-bold"}>
                    Ley 2681 y su decreto reglamentario
                  </h5>
                  <div className={"flex pt-5 gap-5 items-center"}>
                    <ul className={"pl-3"}>
                      <li className={"flex items-center gap-3"}>
                        <FaCircle className={"text-secondary w-2"} /> Ley 2681
                      </li>
                      <li className={"flex items-center gap-3"}>
                        <FaCircle className={"text-secondary w-2"} />{" "}
                        Reglamentación ley 2681
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={"w-full md:text-center"}>
                <h5 className={"text-2xl font-bold"}>Contactanos</h5>
                <div className={"flex flex-col pt-5 gap-5 md:items-center"}>
                  <p className={"flex flex-col"}>
                    Informes e inscripción:{" "}
                    <span className={"text-xl"}>(+54-11) 5032-0076</span>
                  </p>
                  <p className={"flex flex-col"}>
                    Secretaría Académica:{" "}
                    <span className={"text-xl"}>(+54-11) 5032-0055</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"w-full flex justify-center bg-[#141516] text-white"}>
          <div className={"grid w-full md:grid-cols-3 max-w-8xl gap-10 p-5 md:px-20 py-5"}>
            <Link href={"/"} className="w-full lg:w-[165px]">
              <img className="w-[165px] mx-auto" src="/logo.svg" alt="" />
            </Link>
            <div className={"text-center"}>
              <p>
                Copyright 2020 - Da Vinci Primera Escuela de Arte Multimedial
              </p>
              <p>Todos los derechos reservados.</p>
            </div>
            <div className="flex justify-center items-center mb-6">
              <Link
                href="/"
                className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <svg
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  className="fill-current"
                >
                  <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                </svg>
              </Link>
              <Link
                href="/"
                className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  className="fill-current"
                >
                  <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                </svg>
              </Link>
              <Link
                href="/"
                className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  className="fill-current"
                >
                  <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
                </svg>
              </Link>
              <Link
                href="/"
                className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  className="fill-current"
                >
                  <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Nav;
