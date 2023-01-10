import child_process from "child_process";

export function asyncPauseFor(seconds: number): Promise<string> {
    if (!Number.isInteger(seconds) || seconds <= 0) {
        throw new Error("seconds needs to be a whole, strictly positive number");
    }
    return new Promise((resolve, _reject) => {
        child_process.execSync(`ping -W 1 127.0.0.1 -c ${seconds}`);

        resolve("Done");
    });
}
