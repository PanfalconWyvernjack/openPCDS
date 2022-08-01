/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import CustomTable from "../islands/CustomTable.tsx";
import CustomForm from "../islands/CustomForm.tsx";
import Layout from "../islands/Layout.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Layout />
      <p class={tw`my-6`}>
        This is the start of the app in Deno
      </p>
      <CustomTable></CustomTable>
      <CustomForm/>
    </div>
  );
}
