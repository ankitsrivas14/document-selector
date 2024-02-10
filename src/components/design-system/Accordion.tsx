import { FunctionComponent, useRef } from "react";
import ChevronDownIcon from '../../assets/icons/chevron-down.svg';

type AccordionProps = {
    title: string;
    index: number;
    toggle: (index: number) => void;
    activeIndex: number | null;
    children: React.ReactNode;
  };
  
  const Accordion: FunctionComponent<AccordionProps> = ({
    title,
    index,
    toggle,
    activeIndex,
    children,
  }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const isOpen = index === activeIndex;
  
    const handleClick = () => {
      toggle(index);
    };
  
    return (
      <div className="border-b border-gray-200">
        <button
          onClick={handleClick}
          className={
              `flex justify-between items-center w-full text-left p-5 border-b border-gray-3
              text-gray-800 bg-gray-2 hover:bg-gray-100 focus:outline-none ${isOpen && '!bg-gray-100'}`
    }
        >
          <span className='text-gray-1 text-base font-medium'>{title}</span>
          <img 
            src={ChevronDownIcon}
            className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            alt="toggle"
          />
        </button>
        <div
          ref={contentRef}
          className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
          style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0' }}
        >
          <div className={`bg-gray-50 p-2 bg-white`}>
            {children}
          </div>
        </div>
      </div>
    );
};

export default Accordion;