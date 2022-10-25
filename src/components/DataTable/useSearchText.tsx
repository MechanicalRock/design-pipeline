import React from "react";

import { useDebounce } from "use-debounce";

/**
 *
 * This hook function can be used to manage search input fields values.
 * It will `debounce` the value propogation with a 300ms threshold.
 *
 * Example:
 *
 * ```
 * const { searchText, setSearchText } = useSearchText();
 * ...
 * setSearchText("w00t")
 * ```
 */
function useSearchText() {
  const [ searchText, setSearchText ] = React.useState("");
  const [debouncedSearchText] = useDebounce(searchText, 300);

  return {
    debouncedSearchText,
    searchText,
    setSearchText,
  };
}

export { useSearchText };
