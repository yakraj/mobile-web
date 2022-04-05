import "./App.css";
import { RouterApp } from "./src/infrastructure/navigation/router";
import { UserContextProvider } from "./src/services/user.contex";
import { ChattingProvider } from "./src/services/chatting.context";
import { InputSellProvider } from "./src/services/sell.input.context";
import { ProductContextProvider } from "./src/services/product.context";
import { SearchProvider } from "./src/services/search.context";

function App() {
  return (
    <UserContextProvider>
      <ChattingProvider>
        <InputSellProvider>
          <ProductContextProvider>
            <SearchProvider>
              <RouterApp />
            </SearchProvider>
          </ProductContextProvider>
        </InputSellProvider>
      </ChattingProvider>
    </UserContextProvider>
  );
}

export default App;
