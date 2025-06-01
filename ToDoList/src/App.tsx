import { TodoApp } from "./components/TodoApp";
import { useMatomo } from "@datapunt/matomo-tracker-react";

export const App = () => {
  const { enableLinkTracking } = useMatomo();
  enableLinkTracking();
  return <TodoApp />;
};
