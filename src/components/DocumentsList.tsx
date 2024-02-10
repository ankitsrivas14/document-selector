import { useState, FunctionComponent } from 'react'
import { DocumentsDb } from '../data/documentsList';
import Accordion from './design-system/Accordion';
import ListItem from './design-system/ListItem';
import useDocSelector from '../hooks/useDocSelector';
import { DocumentType } from '../types';
import { ICON_NAME } from '../constants/design-system';
import { IconName } from '../types/design-system';

const DocumentsList: FunctionComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { selectedDocs, updateSelectedDocs } = useDocSelector();

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
                    <ListItem 
                        name={item.name} 
                        key={item.id} 
                        onItemClick={() => updateSelectedDocs(item)} 
                        endIconType={(selectedDocs.some((selected: DocumentType) => selected.id === item.id) ? ICON_NAME.EDIT : ICON_NAME.ARROW_RIGHT) as IconName}
                    />                
                ))}
            </Accordion>
        ))}
    </div>
  );
};

export default DocumentsList;
