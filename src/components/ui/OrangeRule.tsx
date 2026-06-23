interface OrangeRuleProps {
  className?: string;
}

export default function OrangeRule({ className = "" }: OrangeRuleProps) {
  return <div role="presentation" className={`h-[2px] w-12 bg-orange ${className}`} />;
}
