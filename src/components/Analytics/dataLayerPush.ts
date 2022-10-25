export type DataLayerPush =
  | {
      event: "form";
      formState:
        | "OPENED"
        | "STARTED"
        | "BACK"
        | "NEXT"
        | "SUBMITTING"
        | "ERROR"
        | "SUCCESS"
        | "EXIT";
      formName: string | "USER VERIFICATION";
      formError?: string;
      formInfo?: string;
      formStep?: number;
    }
  | {
      event: "dialog";
      dialogName: string;
      dialogChoice?: "CONFIRM" | "CANCEL";
    }
  | {
      event: "tooltip";
      tooltip: string;
    }
  | {
      event: "tab";
      tabName: string;
    }
  | {
      event: "faq";
      faqName: string;
    }
  | { site?: string };

/**
 *
 * This is a wrapper function around Google Tag Manager's global `window.dataLayer` object.
 * It's purpose is to centrally define how the dataLayer can be push particular messages.
 * Changes to the dataLayer must also be made in GTM + Google Analytics itself.
 *
 * Example:
 *
 * **Form**
 * ```
 * dataLayerPush({
 *   event: "form",
 *   formName: "User Registration",
 *   formState: "STARTED",
 * });
 * ...
 * ```
 *
 * **Dialog**
 * ```
 * dataLayerPush({
 *   event: "dialog",
 *   dialogName: "Confirm to delete company",
 *   dialogChoice: "CONFIRM",
 * });
 * ...
 * ```
 */
async function dataLayerPush(props: DataLayerPush) {
  if (window.dataLayer) {
    window.dataLayer.push(props);
  }
}

export { dataLayerPush };
