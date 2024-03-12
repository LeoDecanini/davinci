import React from "react";
import { IoIosImage } from "react-icons/io";
import { DiPhotoshop } from "react-icons/di";
import { MdOutlineTypeSpecimen } from "react-icons/md";
import { DiIllustrator } from "react-icons/di";
import { MdOutlineWeb } from "react-icons/md";
import { MdOutlineHtml } from "react-icons/md";
import { LiaUsersSolid } from "react-icons/lia";
import { FaWordpress } from "react-icons/fa";
import { SiLegacygames } from "react-icons/si";
import { SiGamebanana } from "react-icons/si";
import { SiUnrealengine } from "react-icons/si";
import { GiGameConsole } from "react-icons/gi";
import { PiTreeStructure } from "react-icons/pi";
import { SiCoronarenderer } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { LuFileText } from "react-icons/lu";
import { BsPersonWalking } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { BiBookAlt } from "react-icons/bi";
import { FaCamera } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LuGamepad2 } from "react-icons/lu";
import { BiGame } from "react-icons/bi";
import { SlPicture } from "react-icons/sl";
import { FaPerson } from "react-icons/fa6";
import { GrPaint } from "react-icons/gr";
import { SiEpicgames } from "react-icons/si";
import { SiRiotgames } from "react-icons/si";
import { FaBook } from "react-icons/fa6";

const IconList = ({ icon, color }: any) => {
  return (
    <div>
      {icon === "SiEpicgames" && (
        <SiEpicgames
          className={`text-fuchsia-500 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "SiRiotgames" && (
        <SiRiotgames
          className={`text-fuchsia-500 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "GrPaint" && (
        <GrPaint
          className={`text-cyan-400 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "FaBook" && (
        <FaBook
          className={`text-cyan-400 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "FaPerson" && (
          <FaPerson
              className={`text-cyan-400 text-9xl w-full h-full object-contain`}
          />
      )}
      {icon === "SlPicture" && (
        <SlPicture
          className={`text-cyan-400 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "BiGame" && (
        <BiGame
          className={`text-orange-500 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "LuGamepad2" && (
        <LuGamepad2
          className={`text-orange-500 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "FaCamera" && (
        <FaCamera
          className={`text-yellow-400 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "FaChalkboardTeacher" && (
        <FaChalkboardTeacher
          className={`text-yellow-900 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "PiPaintBrushDuotone" && (
        <PiPaintBrushDuotone
          className={`text-violet-400 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "LuFileText" && (
        <LuFileText
          className={`text-violet-400 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "BsPersonWalking" && (
        <BsPersonWalking
          className={`text-violet-400 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "FaBookOpen" && (
        <FaBookOpen
          className={`text-violet-400 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "BiBookAlt" && (
        <BiBookAlt
          className={`text-violet-400 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "IoIosImage" && (
        <IoIosImage
          className={`text-violet-700 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "DiPhotoshop" && (
        <DiPhotoshop
          className={`text-violet-700 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "MdOutlineTypeSpecimen" && (
        <MdOutlineTypeSpecimen
          className={`text-violet-700 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "DiIllustrator" && (
        <DiIllustrator
          className={`text-violet-700 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "MdOutlineWeb" && (
        <MdOutlineWeb
          className={`text-cyan-400 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "MdOutlineHtml" && (
        <MdOutlineHtml
          className={`text-cyan-400 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "LiaUsersSolid" && (
        <LiaUsersSolid
          className={`text-cyan-400 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "FaWordpress" && (
        <FaWordpress
          className={`text-cyan-400 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "SiLegacygames" && (
        <SiLegacygames
          className={`text-red-500 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "SiGamebanana" && (
        <SiGamebanana
          className={`text-red-500 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "SiUnrealengine" && (
        <SiUnrealengine
          className={`text-red-500 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "GiGameConsole" && (
        <GiGameConsole
          className={`text-red-500 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "PiTreeStructure" && (
        <PiTreeStructure
          className={`text-red-500 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "SiCoronarenderer" && (
        <SiCoronarenderer
          className={`text-red-500 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "SiBlender" && (
        <SiBlender
          className={`text-red-500 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "MdOutlineAutoAwesomeMotion" && (
        <MdOutlineAutoAwesomeMotion
          className={`text-blue-700 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "SiAdobepremierepro" && (
        <SiAdobepremierepro
          className={`text-blue-700 text-9xl w-full h-full object-contain`}
        />
      )}
      {icon === "SiAdobeaftereffects" && (
        <SiAdobeaftereffects
          className={`text-blue-700 text-9xl w-full h-full object-contain`}
        />
      )}
    </div>
  );
};

export default IconList;
