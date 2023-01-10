import { asyncPauseFor } from "utils/asyncPauseFor";

describe("test", () => {
    it("works", () => {
        expect(1 + 2).toBe(3);
    });

    it("works 2", async () => {
        const res = await asyncPauseFor(1);

        expect(res).toBe("Done");
    });
});
