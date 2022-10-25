declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * MUI's Data Grid Pro license
     */
    readonly REACT_APP_MUI_DATA_GRID_PRO_LICENSE: string;
  }
  interface unknown {
    message?: string;
  }
}

interface Window {
  dataLayer: {
    push(
      req:
      | {
        event: "form";
        formState?: "OPENED" | "STARTED" | "BACK" | "NEXT" | "SUBMITTING" | "ERROR" | "SUCCESS" | "EXIT";
        formName: string | "USER VERIFICATION";
        formError?: string;
        formInfo?: string;
        formStep?: number;
      }
      | {
        event: "dialog";
        dialogName: string;
      }
      | { site?: string; }
    ): void;
  };
}
