import { GreetUser } from "./mod.ts";

const cli = async () => {
  console.log(await GreetUser());
}

cli();
