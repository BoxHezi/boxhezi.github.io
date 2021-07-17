<template>
  <div>
    <p id="full-command">
      <span id="prefix"> {{ prefix }}</span>
      <span id="command">{{ currentCommand }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    let rootUser: boolean = false;

    const prefix: string = "boxhezi@localhost ~$ ";
    const rootPrefix: string = "root@localhost /home/boxhezi # ";
    const commands: Array<String> = [
      "cat /etc/passwd",
      "cat /etc/shadow",
      "sudo -l",
      "sudo nmap -A localhost -p- -v",
      "nc -lvnp 4444",
      "msfconsole"
    ];
    let currentCommand = commands[0];

    return { commands, currentCommand, rootUser, prefix, rootPrefix };
  },
  methods: {
    initialCommand(): String {
      return this.currentCommand;
    },

    startAnimation() {
      let interval = 2000 + Math.floor(Math.random() * 1500);
      setInterval(() => {
        interval = 2000 + Math.floor(Math.random() * 1500);
        // console.log(interval);
        // console.log("Animation");
        this.currentCommand = this.commands[this.getNextIndex()];
      }, interval);
    },

    /**
     * get next command's index from commands array
     */
    getNextIndex(): number {
      const commandCount = this.commands.length;
      const currentIndex = this.commands.indexOf(this.currentCommand);

      const nextIndex = currentIndex + 1;

      if (nextIndex >= commandCount) {
        return 0;
      }
      return nextIndex;
    }
  },
  mounted() {
    const initCmd = this.initialCommand();
    this.currentCommand = initCmd;

    this.startAnimation();
  }
});
</script>

<style scoped>
#full-command {
  display: flex;
}
</style>
