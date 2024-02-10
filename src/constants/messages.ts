export function createMessage(
    format: (...strArgs: any[]) => string,
    ...args: any[]
  ) {
    return format(...args);
}

export const SEARCH = () => `Search`;
export const AGREEMENTS_PAGE_HEADING = () => `Select Agreements, Notices and Other Documents`;
export const SAVE_AND_CLOSE_CTA = () => `Save & Close`;
export const NEXT_CTA = () => `Next`;
export const BACK_CTA = () => `Back`;
export const FILTER_BY = () => `Filter by:`;
export const AVAILABLE_DOCUMENTS = () => `Available Documents`;
export const SELECT_ALL = () => `Select all`;
export const SELECTED_DOCUMENTS = () => `Selected Documents`;
export const NO_DOCUMENTS_SELECTED_TEXT = () => `Select documents from the left panel to have employees review them and provide a signature acknowledging review`;
export const DETAILS_CARD_HEADING = () => `Which agreements, forms and notices should be sent to Jason Smith?`;
export const DETAILS_CARD_DESCRIPTION = () => `Employees assigned to this job type will be required to review, where relevant fill-in, and sign the following agreements and notices:`;
export const AGREEMENTS_PAGE_INFO_TEXT = () => `Select the agreements, notices and documents you want Jason Smith to sign`;
