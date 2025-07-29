import { Spinner } from "flowbite-react";

export default function loading() {
  return (
    <div className="h-screen grid place-content-center">
      {/* <Spinner color="info" aria-label="Info spinner example" />
      <Spinner color="success" aria-label="Success spinner example" />
      <Spinner color="failure" aria-label="Failure spinner example" />
      <Spinner color="warning" aria-label="Warning spinner example" /> */}
      <Spinner
        className=" w-25 h-25"
        color="pink"
        aria-label="Pink spinner example"
      />
      {/* <Spinner color="purple" aria-label="Purple spinner example" /> */}
    </div>
  );
}
