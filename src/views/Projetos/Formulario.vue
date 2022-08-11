<template>
  <section>
    <form @submit.prevent="save">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome </label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          required
          id="nomeDoProjeto"
        />
      </div>
      <div class="field" id="save">
        <button class="button" type="submit">Save</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { useStore } from "../../store";
import { defineComponent } from "vue";
import {
  ADICIONAR_PROJETO,
  ALTERA_PROJETO
} from "../../store/tipo-de-mutacoes";
import { TipoDeNotificacao } from "../../interfaces/INotificacao";
import  useNotificador  from "../../hooks/notificador"
export default defineComponent({
  name: "Formulario",
  props: {
    id: {
      type: String,
    },
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(
        (proj) => proj.id == this.id
      );
      this.nomeDoProjeto = projeto?.nome || "";
    }
  },
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  methods: {
    save() {
      if (this.id) {
        this.store.commit(ALTERA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto,
        });
        this.notificar(TipoDeNotificacao.ATENCAO, 'Alterado', 'Projeto alterado com sucesso!')
      } else {
        this.store.commit(ADICIONAR_PROJETO, this.nomeDoProjeto);
      }
      this.nomeDoProjeto = "";
      this.notificar(TipoDeNotificacao.SUCESSO, 'Cadastrado', 'Projeto cadastrado com sucesso!')
      this.$router.push("/projetos");
    },
    
  },
  setup() {
    const store = useStore();
    const { notificar } = useNotificador()
    return {
      store,
      notificar
    };
  },
});
</script>

