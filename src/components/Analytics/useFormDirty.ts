import React from "react";
import { dataLayerPush } from "./dataLayerPush";
/**
 *
 * This React Hook should be mounted after any Formik form has been mounted into a Component.
 * It's purpose is to update our analytics::event::form's state to have been "STARTED" once the form is dirty.
 * This suggests the user has started to interact with the form.
 *
 * Example:
 * ```
 * ...
 * useFormik({...});
 * const { dirty } = useFormik();
 * useFormDirty(dirty, "Name of form");
 * ...
 * ```
 */
function useFormDirty(dirty: boolean, formName: string): null {
  const notified = React.useRef(false);

  React.useEffect(() => {
    if (notified?.current) {
      if (dirty) {
        if (!notified.current) {
          notified.current = true;
          dataLayerPush({
            event: "form",
            formState: "STARTED",
            formName,
          });
        }
      } else if (notified.current) {
        notified.current = false;
      }
    }
  }, [ dirty, formName, notified ]);

  return null;
}

export { useFormDirty };
