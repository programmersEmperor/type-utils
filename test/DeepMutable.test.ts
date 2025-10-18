import { test, expectTypeOf } from "vitest";
import { DeepOmit } from "../src/DeepOmit";

test("DeepOmit removes nested keys", () => {
    type Obj = { a: string; nested: { b: string; c: number } };
    type Omitted = DeepOmit<Obj, "b">;
    expectTypeOf<Omitted>().toEqualTypeOf<{ a: string; nested: { c: number } }>();
});
