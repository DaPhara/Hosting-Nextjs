import { NextPage } from "next";
import { ConfirmIcon } from "@/components/icons/FontAwsome";
import style from "./style.module.css";
import Button from "./components/Button";

// Define the Props type to match Next.js expectations
type Props = {
  params: Promise<{ key: string }>; // Use Promise for dynamic params
  // searchParams: { [key: string]: string | string[] | undefined }; // Optional: Type-safe searchParams
};

// Use NextPage to ensure compatibility with Next.js page components
const ConfirmEmail: NextPage<Props> = async ({ params }) => {
  // Resolve the params Promise

  return (
    <main className={style.container}>
      <section className="flex flex-col items-center">
        <ConfirmIcon color="#080" classname="h-36 w-36 mb-8" />
        <h1 className="text-6xl my-4">Email has been Hacked...!</h1>
        <p className="text-3xl">
          Your email confirmed! You can go to the login page by pressing the
          button below!
        </p>
        <p className="text-3xl my-4">
          សូមអរគុណសម្រាប់ការបញ្ជាក់អ៊ីមែល!
          អ្នកអាចចូលទៅទំព័រចូលដោយចុចលើប៊ូតុងខាងក្រោម!
        </p>
        <Button title="Login" classname="my-8" />
      </section>
    </main>
  );
};

export default ConfirmEmail;
