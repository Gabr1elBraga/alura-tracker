<template >
  <div class="notificacoes">
    <article
      class="message"
      :class="contexto[notificacao.tipo]"
      v-for="notificacao in notificacoes"
      :key="notificacao.id"
    >
      <div class="message-header">{{ notificacao.titulo }}</div>
      <div class="message-body">{{ notificacao.texto }}</div>
      <progress id="loading" class="progress is-small is-primary" max="100" >
        15%
      </progress>
    </article>
  </div>
</template>
<script lang="ts">
import { useStore } from "../store";
import { computed, defineComponent } from "vue";
import { TipoDeNotificacao } from "../interfaces/INotificacao";
export default defineComponent({
  name: "Notificacoes",
  data() {
    return {
      contexto: {
        [TipoDeNotificacao.SUCESSO]: "is-success",
        [TipoDeNotificacao.FALHA]: "is-danger",
        [TipoDeNotificacao.ATENCAO]: "is-warning",
      },
    };
  },
  setup() {
    const store = useStore();
    return {
      notificacoes: computed(() => store.state.notificacoes),
    };
  },
});
</script>
<style scoped>
.notificacoes {
  position: absolute;
  right: 0;
  width: 300px;
  padding: 8px;
  z-index: 105;
}
progress {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}


</style>