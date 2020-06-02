# 🌐 Greet a user according to the TimeZone .

Greet a user according to the TimeZone  using DENO.
Returns Good Morning,Good Afternoon,Good Evening.

[![Test CI](https://github.com/denorg/get-ip/workflows/Deno%20CI/badge.svg)](https://github.com/guptamohit004/greet_user/actions)

## ⭐ Getting started

Import the `GreetUser` function and use it:

```ts
import { GreetUser } from "https://deno.land/x/greet_user/mod.ts";

const greetUser = async () => {
    console.log(await GreetUser());
}

greetUser();
```

### CLI

Alternatively, you can use it directly from the CLI by using `deno run --allow-net cli.ts`:

```bash
deno run --allow-net https://deno.land/x/greet_user/cli.ts
```

You can also install it globally using the following:

```bash
deno install --allow-net -n greet_user https://deno.land/x/greet_user/cli.ts
```

Then, the package is available to run:

```bash
greet_user
```

### Configuration

Required permissions:

1. `--allow-net`

### Response
  * Success

          * Good Morning
          * Good Afternoon.
          * Good Evening.
          * Grab A Coffee.

  * Fail

          * Hello


## 👩‍💻 Development

Run tests:

```bash
deno test --allow-net
```

## 📄 License

MIT © Mohit Gupta

