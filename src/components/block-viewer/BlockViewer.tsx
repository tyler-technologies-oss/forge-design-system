import React, { useRef, useState, useEffect, useCallback } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import CodeBlock from "@theme/CodeBlock";
import styles from "./BlockViewer.module.css";

type Viewport = "desktop" | "tablet" | "phone" | "responsive";
type ViewMode = "preview" | "source";

const viewportWidths: Record<Viewport, string> = {
  desktop: "100%",
  tablet: "768px",
  phone: "375px",
  responsive: "100%",
};

interface BlockViewerProps {
  title: string;
  iframeUrl: string;
}

export default function BlockViewer({
  title,
  iframeUrl,
}: BlockViewerProps): JSX.Element {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { colorMode, setColorMode } = useColorMode();
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [viewMode, setViewMode] = useState<ViewMode>("preview");
  const [sourceCode, setSourceCode] = useState<string>("");
  const [sourceLoading, setSourceLoading] = useState(false);

  const sendThemeToIframe = useCallback((theme: "light" | "dark") => {
    iframeRef.current?.contentWindow?.postMessage(
      { type: "forge-theme-change", theme },
      "*",
    );
  }, []);

  // Sync iframe theme when Docusaurus colorMode changes
  useEffect(() => {
    sendThemeToIframe(colorMode);
  }, [colorMode, sendThemeToIframe]);

  // Send theme to iframe when it loads
  const handleIframeLoad = useCallback(() => {
    sendThemeToIframe(colorMode);
  }, [colorMode, sendThemeToIframe]);

  useEffect(() => {
    if (viewMode === "source" && !sourceCode) {
      setSourceLoading(true);
      fetch(iframeUrl)
        .then((response) => response.text())
        .then((html) => {
          const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
          const bodyContent = bodyMatch ? bodyMatch[1].trim() : html;
          setSourceCode(bodyContent);
          setSourceLoading(false);
        })
        .catch(() => {
          setSourceCode("Error loading source code");
          setSourceLoading(false);
        });
    }
  }, [viewMode, iframeUrl, sourceCode]);

  const toggleTheme = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  const reloadIframe = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeUrl;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
          <div className={styles.viewModeToggle}>
            <button
              onClick={() => setViewMode("preview")}
              className={`${styles.viewModeButton} ${viewMode === "preview" ? styles.active : ""}`}>
              Preview
            </button>
            <button
              onClick={() => setViewMode("source")}
              className={`${styles.viewModeButton} ${viewMode === "source" ? styles.active : ""}`}>
              Code
            </button>
          </div>
        </div>
        {viewMode === "preview" && (
          <div className={styles.toolbarActions}>
            <div className={styles.viewportToggle}>
              <button
                onClick={() => setViewport("desktop")}
                className={`${styles.viewportButton} ${viewport === "desktop" ? styles.active : ""}`}
                aria-label="Desktop view"
                title="Desktop">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </button>
              <button
                onClick={() => setViewport("tablet")}
                className={`${styles.viewportButton} ${viewport === "tablet" ? styles.active : ""}`}
                aria-label="Tablet view"
                title="Tablet (768px)">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12" y2="18" strokeLinecap="round" />
                </svg>
              </button>
              <button
                onClick={() => setViewport("phone")}
                className={`${styles.viewportButton} ${viewport === "phone" ? styles.active : ""}`}
                aria-label="Phone view"
                title="Phone (375px)">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2">
                  <rect x="6" y="2" width="12" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12" y2="18" strokeLinecap="round" />
                </svg>
              </button>
              <button
                onClick={() => setViewport("responsive")}
                className={`${styles.viewportButton} ${viewport === "responsive" ? styles.active : ""}`}
                aria-label="Full width view"
                title="Full width">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path d="M15 3h6v6" />
                  <path d="M9 21H3v-6" />
                  <path d="M21 3l-7 7" />
                  <path d="M3 21l7-7" />
                </svg>
              </button>
              <button
                onClick={reloadIframe}
                className={styles.viewportButton}
                aria-label="Reload preview"
                title="Reload">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path d="M21 2v6h-6" />
                  <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                  <path d="M3 22v-6h6" />
                  <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                </svg>
              </button>
            </div>
            <button
              onClick={toggleTheme}
              className={styles.themeToggle}
              aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} theme`}>
              {colorMode === "light" ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>
          </div>
        )}
      </div>
      {viewMode === "preview" ? (
        <div className={styles.iframeContainer}>
          <div
            className={styles.iframeWrapper}
            style={{ width: viewportWidths[viewport] }}>
            <iframe
              ref={iframeRef}
              src={iframeUrl}
              title={`${title} preview`}
              className={styles.iframe}
              onLoad={handleIframeLoad}
            />
          </div>
        </div>
      ) : (
        <div className={styles.sourceContainer}>
          {sourceLoading ? (
            <div className={styles.sourceLoading}>Loading source...</div>
          ) : (
            <div className={styles.codeBlockWrapper}>
              <CodeBlock language="html">{sourceCode}</CodeBlock>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
