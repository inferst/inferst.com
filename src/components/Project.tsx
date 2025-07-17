import Link from "next/link";

type ProjectProps = {
  title: string;
  description: string;
  link?: string;
};

const Project = (props: ProjectProps) => {
  return (
    <div className="border-1 border-foreground-secondary px-4 py-2 rounded-lg w-full">
      <h3 className="text-xl">
        {props.link && (
          <Link href={props.link} target="_blank" className="hover:underline">
            {props.title}
          </Link>
        )}
        {!props.link && props.title}
      </h3>
      <p className="text-foreground-secondary">{props.description}</p>
    </div>
  );
};

export default Project;
