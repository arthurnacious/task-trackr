import { FC } from "react";

interface Props {
  withSlogan?: boolean;
}

const Logo: FC<Props> = ({ withSlogan = false }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Logo Name */}
      <h1 className="text-white font-bold">
        <span className="font-black-ops text-4xl italic">Task Track</span>
        <span className="text-teal-300 font-dots text-5xl">r</span>
      </h1>

      {/* Slogan (conditionally rendered) */}
      {withSlogan && (
        <p className="text-teal-400 font-great-vibes -mt-2">
          Track your tasks, track your success.
        </p>
      )}
    </div>
  );
};

export default Logo;
