import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Pesquisar transações" />
      <button>
        <MagnifyingGlass size={24} />
        Pesquisar
      </button>
    </SearchFormContainer>
  );
}
