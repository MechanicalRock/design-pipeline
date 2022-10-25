import { FC } from "react";
import Head from "next/head";

const Link = (props: { href: string; label: string }) => {
  return (
    <a
      href={props.href}
      style={{
        fontFamily: "verdana",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "20px",
        textAlign: "center",
        color: "rgba(0, 0, 0, 0.38)",
        textDecoration: "underline",
      }}
    >
      {props.label}
    </a>
  );
};

export const EmailButtonLink = (props: { href: string; label: string }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <!--[if mso]>
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href=${props.href} style="height:40px;v-text-anchor:middle;width:300px;" arcsize="10%" stroke="f" fillcolor="#32A142">
            <w:anchorlock/>
            <center>
          <![endif]-->
          <a href=${props.href} style="background-color:#32A142;border-radius:4px;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:16px;line-height:40px;text-align:center;text-decoration:none;width:300px;-webkit-text-size-adjust:none;">${props.label}</a>
          <!--[if mso]>
            </center>
            </v:roundrect>
          <![endif]-->`,
      }}
    />
  );
};

const EmailLayout: FC<{
  companyLogoUrl: string;
  name: string;
  message?: string;
  unsubscribeUrl: string;
}> = ({ companyLogoUrl, name, message, unsubscribeUrl, children }) => {
  return (
    <>
      <Head>
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=utf-8"
        />
        <title>FCX</title>
      </Head>
      <table
        style={{ width: "100%" }}
      >
        <tr>
          <td align="center">
            <table
              style={{
                width: "650px",
                height: "auto",
                fontWeight: 400,
                fontFamily: "verdana, sans-serif",
                background: "#F7F7F7",
                padding: "25px",
              }}
            >
              <tr>
                <td
                  style={{
                    background: "#123347",
                    height: "150px",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  {/* eslint-disable-next-line */}
                  <img
                    src={companyLogoUrl}
                    alt="fc-coloured-logo"
                    height="50px"
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    height: 250,
                    background: "#fff",
                    textAlign: "left",
                    verticalAlign: "top",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    paddingBottom: "30px",
                    paddingTop: "30px",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "18px",
                      lineHeight: "20px",
                      color: "rgba(0, 0, 0, 0.6)",
                      paddingBottom: "20px",
                    }}
                  >
                    Hello {name},
                  </h5>
                  {message && (
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "16px",
                        color: "#414042",
                        paddingBottom: "20px",
                      }}
                    >
                      {message}
                    </p>
                  )}
                  {children}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    margin: "15px",
                    height: "100px",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "20px",
                    textAlign: "center",
                    color: "rgba(0, 0, 0, 0.38)",
                  }}
                >
                  You received this email because you registered for FCX.{" "}
                  <Link
                    label="Unsubscribe"
                    href={unsubscribeUrl}
                  />
                  <br />
                  If you have any questions please contact us at{" "}
                  <Link
                    href="mailto:support@fcx.com.au"
                    label={"support@fcx.com.au"}
                  />
                  <br />
                  &copy; FCX. All rights reserved.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </>
  );
};

export default EmailLayout;

type WrapperProps = {
  companyLogoUrl: string;
  name: string;
  message?: string;
  unsubscribeUrl: string;
  page?: React.ReactElement;
};

export function EmailWrapper({
  companyLogoUrl,
  name,
  message,
  unsubscribeUrl,
  page,
}: WrapperProps) {
  return (
    <EmailLayout
      companyLogoUrl={companyLogoUrl}
      name={name}
      message={message}
      unsubscribeUrl={unsubscribeUrl}
    >
      {page}
    </EmailLayout>
  );
}
