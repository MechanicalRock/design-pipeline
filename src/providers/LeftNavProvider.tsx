import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import React from "react";

type Action =
  | { type: "toggleNav" }
  | { type: "collapseNav"; payload: { collapsed: boolean } };

export type State = {
  collapsed: boolean;
};
type Dispatch = (action: Action) => void;

const LeftNavStateContext = React.createContext<State | undefined>(undefined);
const LeftNavDispatchContext = React.createContext<Dispatch | undefined>(undefined);

export function LeftNavReducer(state: State, action: Action): State {
  switch (action.type) {
    case "toggleNav": {
      return {
        ...state,
        collapsed: !state.collapsed,
      };
    }
    case "collapseNav": {
      if (state.collapsed !== action.payload.collapsed) {
        return {
          ...state,
          collapsed: action.payload.collapsed,
        };
      }
      return state;
    }
    default: {
      throw new Error("Unhandled action type");
    }
  }
}

export const initialProps: State = { collapsed: false };

const LeftNavProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [ state, dispatch ] = React.useReducer(
    LeftNavReducer,
    initialProps
  );
  return (
    <LeftNavStateContext.Provider value={state}>
      <LeftNavDispatchContext.Provider value={dispatch}>
        {children}
        <CollapseController />
      </LeftNavDispatchContext.Provider>
    </LeftNavStateContext.Provider>
  );
};

const CollapseController = React.memo(function Inner() {
  const dispatch = useLeftNavDispatch();
  const { asPath } = useRouter();
  const theme = useTheme();
  const shouldCollapse = useMediaQuery(theme.breakpoints.down("md"));

  React.useEffect(
    () => {
      dispatch({
        type: "collapseNav",
        payload: { collapsed: shouldCollapse },
      });
    },
    [ dispatch, shouldCollapse ]
  );

  React.useEffect(
    () => {
      if (shouldCollapse) {
        dispatch({
          type: "collapseNav",
          payload: { collapsed: true },
        });
      }
    },
    [
      dispatch,
      asPath,
      shouldCollapse,
    ]
  );

  return null;
});

function useLeftNavState() {
  const context = React.useContext(LeftNavStateContext);
  if (context === undefined) {
    throw new Error("useLeftNavState must be used within a LeftNavProvider");
  }
  return context;
}

function useLeftNavDispatch() {
  const context = React.useContext(LeftNavDispatchContext);
  if (context === undefined) {
    throw new Error("useLeftNavDispatch must be used within a LeftNavProvider");
  }
  return context;
}

export {
  useLeftNavState, useLeftNavDispatch, LeftNavProvider
};
