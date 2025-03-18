type inputTable = {
  renderHeadersInTable: JSX.Element;
  renderItemInTable: JSX.Element[];
};

export function Table({ renderHeadersInTable, renderItemInTable }: inputTable) {
  return (
    <>
      <div className="overflow-x-auto bg-white mt-2 h-full rounded-lg">
        <table className="table table-zebra table-pin-rows">
          <thead>{renderHeadersInTable}</thead>
          <tbody>{renderItemInTable}</tbody>
        </table>
      </div>
    </>
  );
}
