import { cn } from "@/utils/cn.utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
