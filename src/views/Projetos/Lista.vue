<template>
  <section>
    <router-link to="/projetos/novo" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo projeto</span>
    </router-link>
    <table class="table is-fullwidth" id="id">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
          <td>
            <router-link :to="`/projetos/${projeto.id}`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </router-link>
            <button class="button ml-2 is-danger" @click="deletar(projeto.id)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts" >
import { useStore } from "../../store";
import { computed, defineComponent } from "vue";
import { EXCLUIR_PROJETO } from "../../store/tipo-de-mutacoes";
import { TipoDeNotificacao } from "../../interfaces/INotificacao";
import  useNotificador  from "../../hooks/notificador"
export default defineComponent({
  name: "Lista",
  methods: {
    deletar(id: string) {
      this.store.commit(EXCLUIR_PROJETO, id);
      this.notificar(TipoDeNotificacao.FALHA, 'Excluido', 'Projeto excluído com sucesso!')
    },
  },
  setup() {
    const store = useStore();
    const { notificar } = useNotificador()
    return {
      projetos: computed(() => store.state.projetos),
      store,
      notificar
    };
  },
});
</script>

