import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { formatCurrency } from "../../helpers/currency.helper";
import {
  PriceHightLight,
  TransactionContainer,
  TransactionTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />

        <TransactionTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de um sistema</td>
              <td>
                <PriceHightLight variant="income">
                  {formatCurrency(800000)}
                </PriceHightLight>
              </td>
              <td>Venda</td>
              <td>01/05/2024</td>
            </tr>
            <tr>
              <td>Desenvolvimento de um sistema</td>
              <td>
                <PriceHightLight variant="income">
                  {formatCurrency(800000)}
                </PriceHightLight>
              </td>
              <td>Venda</td>
              <td>01/05/2024</td>
            </tr>
            <tr>
              <td>Desenvolvimento de um sistema</td>
              <td>
                <PriceHightLight variant="income">
                  {formatCurrency(800000)}
                </PriceHightLight>
              </td>
              <td>Venda</td>
              <td>01/05/2024</td>
            </tr>
            <tr>
              <td>Desenvolvimento de um sistema</td>
              <td>
                <PriceHightLight variant="outcome">
                  {formatCurrency(800000)}
                </PriceHightLight>
              </td>
              <td>Venda</td>
              <td>01/05/2024</td>
            </tr>
            <tr>
              <td>Desenvolvimento de um sistema</td>
              <td>
                <PriceHightLight variant="outcome">
                  {formatCurrency(800000)}
                </PriceHightLight>
              </td>
              <td>Venda</td>
              <td>01/05/2024</td>
            </tr>
            <tr>
              <td>Desenvolvimento de um sistema</td>
              <td>
                <PriceHightLight variant="income">
                  {formatCurrency(800000)}
                </PriceHightLight>
              </td>
              <td>Venda</td>
              <td>01/05/2024</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
