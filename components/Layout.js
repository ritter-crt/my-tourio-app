import Navigation from "./Navigation";

export default function Layout({children}) {
  return (
    <>
      <Navigation/>
      <h1>Tourio</h1>
      <main>{children}</main>
    </>
  );
}