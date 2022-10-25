import {
  Box, Divider,
  IconButton,
  SxProps, Tooltip
} from "@mui/material";
import { styled } from "@mui/material/styles";

import Link from "next/link";
import { useRouter } from "next/router";
import { useLeftNavState } from "../../providers/LeftNavProvider";

type DesktopProps = {
  topLinks: JSX.Element;
  bottomLinks: JSX.Element;
  sx?: SxProps;
};

const MenuIcon = styled(IconButton)({
  height: "2em",
  width: "2em",
  display: "flex",
  color: "white",
  marginBottom: "0.5em",

  "&.active::before": {
    content: "\" \"",
    backgroundColor: "#517782",
    width: "2.3em",
    height: "2em",
    borderRadius: "0.3em 0 0 0.3em",
    position: "absolute",
    right: "-0.34em",
    top: 0,
  },

  "&:hover,&:focus": {
    backgroundColor: "#284c67cf",
    transition: "background-color 0.1s",
  },
});

const LogoWrapper = styled("a")({
  margin: "0.5em 0",
  textDecoration: "none !important",
  padding: "1em 0",
  borderRadius: "0.2em",
  width: "2.5em",
  height: "2.5em",
  marginTop: "0.5em !important",
  marginBottom: "-0.5em",
  position: "relative",

  "& > span": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "0.6em",
  },
});

function AppBarIconButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: JSX.Element;
  label: string;
}) {
  const { asPath } = useRouter();
  const isActive = asPath === href || asPath.startsWith(href);

  return (
    <Link
      href={href}
      passHref
    >
      <Tooltip
        enterDelay={500}
        title={label}
        arrow
        placement="right"
      >
        <MenuIcon className={isActive
          ? "active"
          : ""}
        >{icon}
        </MenuIcon>
      </Tooltip>
    </Link>
  );
}

function DesktopAppBar({
  topLinks,
  bottomLinks,
  sx,
}: DesktopProps) {
  const styles: SxProps = {
    flexGrow: 1,
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "4em",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "primary.main",
    zIndex: 1,
    display: "flex",
    maxWidth: "4em",

    "& > *": {
      display: "flex",
      margin: "0 auto",
      color: "white",
      textAlign: "center",
    },
    ...(sx || {}),
  };

  const { collapsed } = useLeftNavState();

  return (
    <Box
      sx={styles}
      data-testid="appBar"
    >
      <Link
        href="/"
        passHref
      >
        <Tooltip
          enterDelay={300}
          title="Home"
          arrow
          placement={"right"}
        >
          <LogoWrapper>
            Home
          </LogoWrapper>
        </Tooltip>
      </Link>

      <Divider
        sx={{
          borderColor: "#FFF",
          marginBottom: "1em !important",
          width: "100%",
        }}
      />
      <>{topLinks}</>
      <Box sx={{
        flexGrow: 1,
        display: "flex",
      }}
      />
      <>{bottomLinks}</>
      {collapsed && <Box sx={{ height: "3.8em" }} />}
    </Box>
  );
}

function AppBar({ desktopProps, sx }: {
  desktopProps: DesktopProps;
  sx?: SxProps;
}) {
  return (
    <DesktopAppBar
      {...desktopProps}
      sx={sx}
    />
  );
}

export { AppBarIconButton, AppBar };
