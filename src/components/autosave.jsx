import React, { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import "../styles/components/notes.css"

import { saveLearnings } from "../api/learnings";

export default function Autosave (props) {

  const [isSaving, setIsSaving] = useState(false);
  const DEBOUNCE_SAVE_DELAY_MS = 5000;

  const debounceSaveLoading = useCallback(
    debounce(() => {
      setIsSaving(true);
    }, DEBOUNCE_SAVE_DELAY_MS),
    [],
  );

  const debouncedSave = useCallback(
    debounce( async (props) => {
      const isDone = await saveLearnings(props);
      if (isDone) {
        setTimeout(() => setIsSaving(false), 1000); // show the Auto saving.. in 1 second.
      }
    }, DEBOUNCE_SAVE_DELAY_MS),
    [],
  );

  useEffect(() => {
    if (props && props.title) {
      debounceSaveLoading();
      debouncedSave(props);
    }
  }, [props, debouncedSave, debounceSaveLoading]);

  return (
      <div className="ne-auto-save">
        { isSaving && <p>Auto Saving...</p> }
      </div>
  )
}