// Import all icons from lucide-react
import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";

interface IconProps {
  iconName: string;
  className?: string;
  size?: number;
}

const Icon = ({ iconName, className = "", size = 24 }: IconProps) => {
  // Get the specific icon from the Icons object using the string and type it as a valid Lucide React component
  const LucideIcon = Icons[
    iconName as keyof typeof Icons
  ] as React.FC<LucideProps>;

  // Check if the icon exists, otherwise return a default or error message
  if (!LucideIcon) {
    return <span>Icon not found</span>;
  }

  // Render the icon component with size and color props
  return <LucideIcon size={size} className={className} />;
};

export default Icon;
