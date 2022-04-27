import { Command, CommandRunner } from "nest-commander";

@Command({
    name: 'run',
})
export class TestCommand implements CommandRunner {
    async run(
        inputs,
        options
    ) {
        console.log('test')
    }
}