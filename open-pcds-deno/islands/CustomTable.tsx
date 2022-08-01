/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface CounterProps {
}

export default function CustomTable(props: CounterProps) {
  //const [count, setCount] = useState(props.start);
  const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
  return (
    <div class={tw`flex gap-2 w-full`}>
      <table>
        <th>Column 1</th>
        <th>Column 2</th>
        <tr>
          <td>Something</td>
          <td>Another something</td>
        </tr>
      </table>
    </div>
  );
}
