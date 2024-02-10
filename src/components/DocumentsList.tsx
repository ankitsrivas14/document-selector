import React, { useState, useRef, FunctionComponent } from 'react';
import ChevronDownIcon from '../assets/icons/chevron-down.svg';
import ArrowRightIcon from '../assets/icons/arrow-right-dark.svg';
import { DocumentsDb } from '../data/documentsList';

type ListItemItemProps = {
  title: string;
  index: number;
  toggle: (index: number) => void;
  activeIndex: number | null;
  children: React.ReactNode;
};

const ListItem: FunctionComponent<ListItemItemProps> = ({
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
          src={isOpen ? ChevronDownIcon : ChevronDownIcon}
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

const DocumentsList: FunctionComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); 
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {DocumentsDb.map((document, index) => (
            <ListItem index={index} activeIndex={activeIndex} title={document.name} toggle={toggleItem}>
                {/* <div className=''> */}
                    {document.documents.map(item => (
                        <div 
                            className='px-1.5 py-2 mb-2.5 text-gray-4 text-sm font-medium cursor-pointer hover:bg-accent-light' 
                            key={item.id}
                        >
                            <div className='flex justify-between items-center'>
                                <span>{item.name}</span>
                                <img src={ArrowRightIcon} className='p-1 border border-solid rounded-md border-gray-3 fill-gray-4' alt="toggle" />
                            </div>
                        </div>
                    ))}
                {/* </div> */}
            </ListItem>
        ))}
    </div>
  );
};

export default DocumentsList;
