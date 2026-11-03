const Header = ({
  span,
  title,
  subtitle,
}: {
  span: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <header className="flex justify-between items-end gap-5 mb-[34px]">
      <div>
        <span className="flex items-center gap-[7px] text-[#ba8235] text-[10px] font-[Courier_New,monospace] tracking-[0.14em]">
          {span}
        </span>
        <h1 className="text-[42px] font-normal font-serif mt-3 mx-0 my-[5px] tracking-[-0.04em]">
          {title}
        </h1>
        <p className="text-[#7e8789] text-[13px] m-0">{subtitle}</p>
      </div>
    </header>
  );
};

export default Header;
