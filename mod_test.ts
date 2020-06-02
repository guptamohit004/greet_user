import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { GreetUser } from "./mod.ts";

const greeting = (date: any) => {
  console.log(date)
  return true;
}

Deno.test("test convertTime function", async (): Promise<void> => {
  var data= await GreetUser();
   assertEquals(greeting(data), true);
});
