import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { AppLayout } from "./SharedLayout.styled";
import { Navigation } from "../../Navigation/Navigation";

export const SharedLayout = () => {
  return (
    <>
      <AppLayout>
        <header>
          <Navigation />
        </header>
        <main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </AppLayout>

      <GlobalStyles />
    </>
  );
};
