import { useState, FunctionComponent } from 'react'
import { DocumentsDb } from '../data/documentsList';
import Accordion from './design-system/Accordion';
import ListItem from './design-system/ListItem';
import useDocSelector from '../hooks/useDocSelector';
import { DocumentType } from '../types';

const DocumentsList: FunctionComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { updateSelectedDocs } = useDocSelector();

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
            <Accordion index={index} activeIndex={activeIndex} title={document.name} toggle={toggleItem}>
                {document.documents.map((item: DocumentType) => (
                    <ListItem name={item.name} key={item.id} onItemClick={() => updateSelectedDocs(item)} />
                ))}
            </Accordion>
        ))}
    </div>
  );
};

export default DocumentsList;
