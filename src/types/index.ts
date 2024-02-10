export interface ApplicationStepType {
    id: string;
    name: string;
    isActive: boolean;
    isCompleted: boolean;
}

export interface DocumentType {
    id: string;
    name: string;
    isRequired: boolean;
    isCompleted: boolean;
}

export interface DocumentDbType {
    id: string;
    name: string;
    documents: DocumentType[];
}