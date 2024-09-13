<template>
  <div>
    <p id="full-command">
      <span class="prefix">{{ prefix }}</span>
      <span class="command">{{ displayCommand }}|</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const prefix: string = "boxhezi@localhost ~$ ";
const commands: Array<String> = [
  "cat /etc/passwd",
  "cat /etc/shadow",
  "sudo -l",
  "sudo nmap -A localhost -p- -v",
  "nc -lvnp 4444",
  "msfconsole",
];
const timeout: number = 100;

let currentCommand = commands[0];
let displayCommand = ref("");
let charIndex: number = 0;
let deleting: boolean = false;

/**
 * get next command's index from commands array
 */
function getNextIndex(): number {
  const commandCount = commands.length;
  const currentIndex = commands.indexOf(currentCommand);
  const nextIndex = currentIndex + 1;
  return nextIndex >= commandCount ? 0 : nextIndex;
}

function typing(cmd: String) {
  if (!deleting) {
    if (charIndex <= cmd.length) {
      displayCommand.value = cmd.slice(0, charIndex++);
      setTimeout(() => {
        typing(cmd);
      }, timeout);
    } else {
      deleting = !deleting;
      typing(cmd);
    }
  } else {
    if (charIndex !== 0) {
      displayCommand.value = cmd.slice(0, charIndex--);
      setTimeout(() => {
        typing(cmd);
      }, timeout);
    } else {
      deleting = !deleting;
      currentCommand = commands[getNextIndex()];
      typing(currentCommand);
    }
  }
}

onMounted(() => {
  typing(currentCommand);
});
</script>

<style scoped>
#full-command {
  display: flex;
  font-family: "Courier New", Courier, monospace;
}

.command {
  padding-left: 0.5rem;
}
</style>
