import { Project } from "@/models/project";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import codeImage from "@/public/images/code-image.png";

interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  const { image, title, description, link } = project;
  const projectImage = image || codeImage;
  return (
    <a href={link} target="_blank" className="group">
      <div className="overflow-hidden rounded-xl">
        <Image
          src={projectImage}
          alt={`Project Image ${title}`}
          className="object-cover w-full group-hover:rotate-2 group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-[#C1C1C1] text-xl font-bold mt-5">{title}</h3>
      <div className="flex items-center justify-between">
        <span className="text-[#A9A9A9] text-sm font-normal">
          {description}
        </span>

        <div className="w-10 h-10 bg-[#202527] rounded-full flex items-center justify-center">
          <FaLongArrowAltRight
            color="white"
            className="-rotate-[40deg] group-hover:rotate-0 transition-transform duration-300 group-hover:animate-slider"
          />
        </div>
      </div>
    </a>
  );
}
