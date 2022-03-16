import React, { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import "../styles/components/notes.css"

import { saveLearnings } from "../api/learnings";

export default function Autosave ({data, isSavingHandle}) {

  const [isSaving, setIsSaving] = useState(false);
  const DEBOUNCE_SAVE_DELAY_MS = 5000;

  const debounceSaveLoading = useCallback(
    debounce(() => {
      setIsSaving(true);
    }, DEBOUNCE_SAVE_DELAY_MS),
    [],
  );

  const debouncedSave = useCallback(
    debounce( async (data) => {
      const isDone = await saveLearnings(data);
      if (isDone) {
        setTimeout(() => setIsSaving(false), 1000); // show the Auto saving.. in 1 second.
      }
    }, DEBOUNCE_SAVE_DELAY_MS),
    [],
  );

  useEffect(() => {
    if (data && data.title) {
      debounceSaveLoading();
      debouncedSave(data);
    }
  }, [isSavingHandle, debouncedSave, debounceSaveLoading]);

  return (
      <div className="ne-auto-save">
        { isSaving && <p>Auto Saving...</p> }
      </div>
  )
}