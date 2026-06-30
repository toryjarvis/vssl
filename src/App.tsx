import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t } = useTranslation();

  return (
    <main className="container">
      <h1>{t("app.welcome")}</h1>
    </main>
  );
}

export default App;
