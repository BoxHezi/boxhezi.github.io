<template>
  <div>
    <p id="full-command">
      <span class="prefix" v-if="!rootUser"> {{ prefix }}</span>
      <span class="prefix" v-else> {{ rootPrefix }}</span>
      <span class="command">{{ currentCommand }}</span>
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

    function initialCommand(): String {
      return currentCommand.value;
    }

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

    onMounted(() => {
      const initCmd = initialCommand();
      currentCommand.value = initCmd;

      startAnimation();
    });

    return {
      commands,
      currentCommand,
      rootUser,
      prefix,
      rootPrefix,
      initialCommand,
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
