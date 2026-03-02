import { cn } from "@/utils/cn.utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-5 xl:px-0", className)}>
      {children}
    </div>
  );
};

export default Container;
