import { dataLayerPush } from "./dataLayerPush";

interface SubmitHandler<Req, Res> {
  /**
   * The grpc action to call
   */
  action: (values: Req) => Promise<Res>;
  /**
   * The form name which will be lodged to Google Analytics
   */
  formName: string;
  /**
   * The grpc action's request values
   */
  values: Req;
}
/**
 *
 * This utility function should be invoked when a user PATCH|UPDATE|POSTs via a grpc action (most cases this is in Formik's submit handler).
 * It's purpose is to update our analytics::event::form's states "SUBMITTING" => "SUCCESS"|"ERROR".
 * This helps complete the users interaction with the form.
 *
 * Example:
 * ```
 * ...
 * await submitHandler({...});
 * ...
 * ```
 */
async function submitHandler<Req, Res>({
  action,
  formName,
  values,
}: SubmitHandler<Req, Res>) {
  dataLayerPush({
    event: "form",
    formState: "SUBMITTING",
    formName,
  });
  try {
    const res = await action(values);
    dataLayerPush({
      event: "form",
      formState: "SUCCESS",
      formName,
    });
    return res;
  } catch (e: any) {
    dataLayerPush({
      event: "form",
      formState: "ERROR",
      formName,
      formError: e?.message ?? e,
    });
    throw e;
  }
}

export { submitHandler };
