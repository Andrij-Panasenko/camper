import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { GlobalStyles } from "../../styles/GlobalStyles";

export const SharedLayout = () => {
    return (
      <>
        <div>
          <header>Тут буде хедер з навігацією</header>
          <main>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </main>
        </div>

        <GlobalStyles />
      </>
    );
}
