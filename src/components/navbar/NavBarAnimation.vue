<template>
  <div>
    <p id="full-command">
      <span class="prefix" v-if="!rootUser"> {{ prefix }}</span>
      <span class="prefix" v-else> {{ rootPrefix }}</span>
      <span class="command">{{ displayCommand }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  setup() {
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
    let currentCommand = ref(commands[0]);
    let displayCommand = ref("");
    let charIndex: number = 0;
    let deleting: boolean = false;

    function startAnimation() {
      let interval = 2000 + Math.floor(Math.random() * 1500);
      setInterval(() => {
        interval = 2000 + Math.floor(Math.random() * 1500);
        // console.log(interval);
        // console.log("Animation");
        currentCommand.value = commands[getNextIndex()];
      }, interval);
    }

    /**
     * get next command's index from commands array
     */
    function getNextIndex(): number {
      const commandCount = commands.length;
      const currentIndex = commands.indexOf(currentCommand.value);

      const nextIndex = currentIndex + 1;

      if (nextIndex >= commandCount) {
        return 0;
      }
      return nextIndex;
    }

    function typing(cmd: String) {
      if (!deleting) {
        if (charIndex <= cmd.length) {
          displayCommand.value = cmd.slice(0, charIndex++) + "|";
          setTimeout(() => {
            typing(cmd);
          }, 200);
        } else {
          deleting = !deleting;
          typing(cmd);
        }
      } else {
        if (charIndex !== 0) {
          displayCommand.value = cmd.slice(0, charIndex--) + "|";
          setTimeout(() => {
            typing(cmd)
          }, 200)
        } else {
          deleting = !deleting;
          currentCommand.value = commands[getNextIndex()];
          cmd = currentCommand.value;
          typing(cmd);
        }
      }
    }

    onMounted(() => {
      typing(currentCommand.value);
    });

    return {
      commands,
      currentCommand,
      displayCommand,
      rootUser,
      prefix,
      rootPrefix,
      startAnimation,
      getNextIndex
    };
  }
});
</script>

<style scoped>
#full-command {
  display: flex;
}
</style>
