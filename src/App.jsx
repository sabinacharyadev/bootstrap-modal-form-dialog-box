import TransactionForm from "./TransactionFrom";
import TransactionTable from "./TransactionTable";

function App() {
  return (
    <>
      <div className="w-100  d-flex justify-content-end">
        <TransactionForm />
      </div>
      <TransactionTable />
    </>
  );
}

export default App;
