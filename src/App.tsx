import { useEffect, useRef } from "react";
import Screen from "./components/Screen";
import MainSection from "./components/MainSection";
import { useScreen } from "./hooks/useScreen";

export default App;

function App({ messages = [] }: { messages?: string[] }) {
  const timeoutRef = useRef<number>();
  const { currentScreen, nextScreen, resetScreen } = useScreen();
  const introDone = currentScreen >= messages.length;
  const hasMessages = messages.length > 0;

  useEffect(() => {
    if (!introDone) {
      const wordCount = messages[currentScreen].split(" ").length;

      timeoutRef.current = setTimeout(
        nextScreen,
        Math.min(wordCount * 500, 3000),
      );
    }

    return function cleanUp() {
      clearTimeout(timeoutRef.current);
    };
  }, [currentScreen, messages, nextScreen, introDone]);

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 text-center">
      {hasMessages ? renderScreen() : null}
      <MainSection active={introDone || !hasMessages} onReplay={resetScreen} />
    </main>
  );

  /* --- */

  function renderScreen() {
    return messages.map(function toScreens(message, index) {
      const isActive = currentScreen === index;

      return (
        <Screen key={index} active={isActive} onClick={onScreenClick}>
          {message}
        </Screen>
      );

      function onScreenClick() {
        clearTimeout(timeoutRef.current);
        nextScreen();
      }
    });
  }
}
