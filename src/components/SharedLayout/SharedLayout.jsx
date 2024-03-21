import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { GlobalStyles } from "../../styles/GlobalStyles";
import { AppLayout } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
      <>
        <AppLayout>
          <header>Тут буде хедер з навігацією</header>
          <main>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </main>
        </AppLayout>

        <GlobalStyles />
      </>
    );
}
