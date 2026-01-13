interface SkipLinkProps {
  targetId?: string;
  children?: React.ReactNode;
}

export const SkipLink = ({ targetId = "main-content", children = "Skip to main content" }: SkipLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.focus();
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className="skip-link"
    >
      {children}
    </a>
  );
};
